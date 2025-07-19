-- User Management Tables

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subscriptions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    plan_type VARCHAR(50) NOT NULL DEFAULT 'free',
    stripe_customer_id VARCHAR(255) UNIQUE,
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true
);

-- Investor Profile Table

CREATE TABLE investor_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE UNIQUE,
    investment_budget INTEGER,
    primary_goal VARCHAR(100),
    risk_tolerance VARCHAR(100),
    property_preferences JSONB,
    renovation_appetite VARCHAR(100),
    financial_literacy VARCHAR(100),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Property & Location Data Tables

CREATE TABLE suburbs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    state VARCHAR(50) NOT NULL,
    postcode VARCHAR(10) NOT NULL,
    median_price INTEGER,
    five_year_growth DECIMAL(5, 2),
    rental_yield DECIMAL(5, 2),
    vacancy_rate DECIMAL(5, 2),
    demographic_data JSONB,
    UNIQUE(name, state, postcode)
);

CREATE TABLE properties (
    id SERIAL PRIMARY KEY,
    suburb_id INTEGER REFERENCES suburbs(id) ON DELETE SET NULL,
    address TEXT NOT NULL,
    property_type VARCHAR(100),
    listing_url TEXT UNIQUE,
    price INTEGER,
    beds INTEGER,
    baths INTEGER,
    cars INTEGER,
    analysis_data JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User Activity Tables

CREATE TABLE saved_searches (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    search_criteria JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE shortlisted_properties (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, property_id)
);

-- AI & Analysis Tables

CREATE TABLE strata_reports (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
    original_filename VARCHAR(255),
    storage_path VARCHAR(255) NOT NULL,
    analysis_summary JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Indexes for foreign keys and frequently queried columns
CREATE INDEX ON subscriptions (user_id);
CREATE INDEX ON investor_profiles (user_id);
CREATE INDEX ON properties (suburb_id);
CREATE INDEX ON saved_searches (user_id);
CREATE INDEX ON shortlisted_properties (user_id);
CREATE INDEX ON shortlisted_properties (property_id);
CREATE INDEX ON strata_reports (user_id);
CREATE INDEX ON strata_reports (property_id); 