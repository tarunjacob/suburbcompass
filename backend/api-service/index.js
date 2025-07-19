const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret'; // Use an environment variable for your secret

app.use(express.json());

// Database connection setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// User Registration Endpoint
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email',
      [email, password_hash]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (error) {
    console.error('Registration error:', error);
    if (error.code === '23505') { // Unique violation
        return res.status(409).json({ error: 'User with this email already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User Login Endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = userResult.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Investor Profile Creation/Update Endpoint
app.post('/api/profile', authenticateToken, async (req, res) => {
    const { userId } = req.user;
    const {
        investment_budget,
        primary_goal,
        risk_tolerance,
        property_preferences,
        renovation_appetite,
        financial_literacy
    } = req.body;

    try {
        const newProfile = await pool.query(
            `INSERT INTO investor_profiles (user_id, investment_budget, primary_goal, risk_tolerance, property_preferences, renovation_appetite, financial_literacy)
             VALUES ($1, $2, $3, $4, $5, $6, $7)
             ON CONFLICT (user_id) DO UPDATE SET
                investment_budget = EXCLUDED.investment_budget,
                primary_goal = EXCLUDED.primary_goal,
                risk_tolerance = EXCLUDED.risk_tolerance,
                property_preferences = EXCLUDED.property_preferences,
                renovation_appetite = EXCLUDED.renovation_appetite,
                financial_literacy = EXCLUDED.financial_literacy,
                updated_at = CURRENT_TIMESTAMP
             RETURNING *`,
            [userId, investment_budget, primary_goal, risk_tolerance, property_preferences, renovation_appetite, financial_literacy]
        );

        res.status(201).json(newProfile.rows[0]);
    } catch (error) {
        console.error('Profile creation error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Suburb Matchmaker Endpoint
app.get('/api/suburbs/match', authenticateToken, async (req, res) => {
    const { userId } = req.user;

    try {
        // 1. Get the user's profile
        const profileResult = await pool.query('SELECT * FROM investor_profiles WHERE user_id = $1', [userId]);
        if (profileResult.rows.length === 0) {
            return res.status(404).json({ error: 'Investor profile not found. Please create one first.' });
        }
        const profile = profileResult.rows[0];

        // 2. Build a dynamic query based on the profile
        let query = 'SELECT *, 0 as match_score FROM suburbs WHERE 1=1';
        const queryParams = [];
        
        if (profile.investment_budget) {
            queryParams.push(profile.investment_budget);
            query += ` AND median_price <= $${queryParams.length}`;
        }

        // Add more complex matching logic here later based on goal, risk, etc.
        // For now, this is a simple filter.

        // 3. Execute the query
        const suburbsResult = await pool.query(query, queryParams);
        
        // 4. (Placeholder for scoring) Add a dummy match score
        const matchedSuburbs = suburbsResult.rows.map(suburb => ({
            ...suburb,
            match_score: Math.floor(Math.random() * (95 - 75 + 1) + 75) // Random score between 75-95
        }));

        res.json(matchedSuburbs);

    } catch (error) {
        console.error('Suburb matching error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Stripe Checkout Session Creation Endpoint
app.post('/api/payments/create-checkout-session', authenticateToken, async (req, res) => {
    const { userId } = req.user;
    const { planId, successUrl, cancelUrl } = req.body; // e.g., planId: 'price_12345'

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: planId,
                quantity: 1,
            }],
            mode: 'subscription',
            success_url: successUrl,
            cancel_url: cancelUrl,
            client_reference_id: userId.toString(),
        });

        res.json({ id: session.id });

    } catch (error) {
        console.error('Stripe session creation error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/', (req, res) => {
  res.send('API Service is running');
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`API Service listening at http://localhost:${port}`);
  });
}

module.exports = app; 