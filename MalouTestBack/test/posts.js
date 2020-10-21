var assert = require('assert');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);
describe('GetPosts', function() {
    it('it should GET Posts', (done) => {
        chai.request(server)
            .get('/api/posts/10-01-2020')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
});