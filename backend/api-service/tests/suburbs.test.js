const request = require('supertest');
const app = require('../index');
const jwt = require('jsonwebtoken');

jest.mock('pg', () => {
    const mPool = {
        connect: jest.fn(),
        query: jest.fn(),
        end: jest.fn(),
    };
    return { Pool: jest.fn(() => mPool) };
});

const pool = require('pg').Pool();
const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';

describe('Suburbs Endpoint', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/suburbs/match', () => {
        it('should return a list of matched suburbs for a user with a profile', async () => {
            const user = { userId: 1 };
            const token = jwt.sign(user, JWT_SECRET);

            const mockProfile = {
                user_id: 1,
                investment_budget: 800000,
            };
            const mockSuburbs = [
                { id: 1, name: 'Suburb A', median_price: 750000 },
                { id: 2, name: 'Suburb B', median_price: 790000 },
            ];

            // Mock the database calls
            pool.query
                .mockResolvedValueOnce({ rows: [mockProfile], rowCount: 1 }) // First call for profile
                .mockResolvedValueOnce({ rows: mockSuburbs, rowCount: 2 });  // Second call for suburbs

            const res = await request(app)
                .get('/api/suburbs/match')
                .set('Authorization', `Bearer ${token}`);

            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toBe(2);
            expect(res.body[0]).toHaveProperty('match_score');
            expect(pool.query).toHaveBeenCalledWith('SELECT * FROM investor_profiles WHERE user_id = $1', [user.userId]);
            expect(pool.query).toHaveBeenCalledWith('SELECT *, 0 as match_score FROM suburbs WHERE 1=1 AND median_price <= $1', [mockProfile.investment_budget]);
        });

        it('should return 404 if the user has no profile', async () => {
            const user = { userId: 1 };
            const token = jwt.sign(user, JWT_SECRET);

            // Mock profile not found
            pool.query.mockResolvedValueOnce({ rows: [], rowCount: 0 });

            const res = await request(app)
                .get('/api/suburbs/match')
                .set('Authorization', `Bearer ${token}`);
            
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('error', 'Investor profile not found. Please create one first.');
        });

        it('should return 401 if no token is provided', async () => {
            const res = await request(app).get('/api/suburbs/match');
            expect(res.statusCode).toEqual(401);
        });
    });
}); 