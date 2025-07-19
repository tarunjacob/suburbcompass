const request = require('supertest');
const app = require('../index'); // Adjust the path to your app's entry point

// This is a mock of the 'pg' Pool.
// In a real-world scenario, you would use a dedicated test database.
jest.mock('pg', () => {
    const mPool = {
        connect: jest.fn(),
        query: jest.fn(),
        end: jest.fn(),
    };
    return { Pool: jest.fn(() => mPool) };
});

const pool = require('pg').Pool();

describe('Auth Endpoints', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    // Test Case 1.1: User Registration
    describe('POST /api/register', () => {
        it('should create a new user and return it', async () => {
            const mockUser = { id: 1, email: 'test@example.com' };
            pool.query.mockResolvedValueOnce({ rows: [mockUser], rowCount: 1 });

            const res = await request(app)
                .post('/api/register')
                .send({
                    email: 'test@example.com',
                    password: 'password123',
                });

            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('id');
            expect(res.body.email).toBe('test@example.com');
            // Check that password hashing was attempted
            expect(pool.query).toHaveBeenCalledWith(expect.any(String), ['test@example.com', expect.any(String)]);
        });

        it('should return 409 if user already exists', async () => {
            pool.query.mockRejectedValueOnce({ code: '23505' }); // Simulate unique constraint violation

            const res = await request(app)
                .post('/api/register')
                .send({
                    email: 'test@example.com',
                    password: 'password123',
                });

            expect(res.statusCode).toEqual(409);
            expect(res.body).toHaveProperty('error', 'User with this email already exists');
        });
    });

    // Test Case 1.2: User Login
    describe('POST /api/login', () => {
        it('should login the user and return a JWT token', async () => {
            const mockUser = { id: 1, email: 'test@example.com', password_hash: '$2a$10$...' }; // A real hash would be here
            // Mock the successful query to find the user
            pool.query.mockResolvedValueOnce({ rows: [mockUser], rowCount: 1 });
            // Mock bcrypt.compare to return true
            const bcrypt = require('bcryptjs');
            jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(true);

            const res = await request(app)
                .post('/api/login')
                .send({
                    email: 'test@example.com',
                    password: 'password123'
                });

            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('token');
        });

        it('should return 401 for invalid credentials', async () => {
            // Mock user not found
            pool.query.mockResolvedValueOnce({ rows: [], rowCount: 0 });

            const res = await request(app)
                .post('/api/login')
                .send({
                    email: 'wrong@example.com',
                    password: 'password123'
                });
            
            expect(res.statusCode).toEqual(401);
        });
    });
}); 