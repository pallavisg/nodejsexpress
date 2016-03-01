var should = require('should');
var app = require('../app').app;
var supertest = require('supertest');
var agent = supertest.agent(app);

//you need to set your intranetid and password as local environment variables to run these tests correctly
process.env.NODE_ENV_TEST = true;

describe ("test API services:", function() {
    this.timeout(30000);
    it ("should get home page", function (done) {
        agent.get('/')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            done();
        });
    });

    it ("should get user info page", function (done) {
        agent.get('/info')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            done();
        });
    });
});