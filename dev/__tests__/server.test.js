const request = require('supertest');
const app = require('../server');

describe('Test api', () => {
  it ('should start new game', async () => {
    return request(app)
    .get('/new-game')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
      expect(response.body.note).toBe('New game started');
    })
  });

  it('should post forst event', async() => {
    return request(app)
      .post('/log-action')
      .send({type: 'evenStartAgain'})
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        expect(response.body.note).toBe('Action was logged');
        expect(response.body.id).toEqual(0);
      });
  });

  it('should post second event', async() => {
    return request(app)
      .post('/log-action')
      .send({type: 'evenStartAgain'})
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        expect(response.body.note).toBe('Action was logged');
        expect(response.body.id).toEqual(1);
      });
  });

  it ('Logs should have two entries', async () => {
    return request(app)
    .get('/logs')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
      expect(response.body.note).toBe('Game logs');
      expect(response.body.logs.length).toEqual(2);
    })
  });

  it ('should restart game', async () => {
    request(app)
    .get('/new-game')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
      expect(response.body.note).toBe('New game started');
    });
  });
});
