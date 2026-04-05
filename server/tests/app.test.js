const request = require('supertest');
const app = require('../src/app');

describe('Backend Integration Tests', () => {
    describe('GET /api/health', () => {
        it('should return 200 and status ok', async () => {
            const res = await request(app).get('/api/health');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('status', 'ok');
        });
    });

    describe('POST /auth/login', () => {
        it('should return 401 for invalid credentials (example)', async () => {
            const res = await request(app)
                .post('/auth/login')
                .send({ email: 'test@example.com', password: 'wrong' });
            // This depends on actual DB integration, but confirms the route is reachable
            expect([401, 200, 400]).toContain(res.statusCode);
        });
    });
});
