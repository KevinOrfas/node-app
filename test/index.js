'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const supertest = require('supertest'); //require supertest
const request = supertest('http://localhost:3000/'); //supertest hits the HTTP server (your app)
// let should = chai.should();

chai.use(chaiHttp);

describe("GET /", function () {
  it("serves an html page", async function () {
    const response = await request.get("/");

    chai.expect(response.status).to.eql(200);
    chai.expect(response.type).to.eql('text/html');
    response.text.should.contain('body');
  });
});


describe("JSON API", function () {
  it("returns the user with phone number", async function () {
    const response = await request.get("api/users?phone=2551024826").set('token', 'o2omxho3i39ho2f9rroc');
    console.log('response', response.body)

    chai.expect(response.status).to.eql(200);
    chai.expect(response.type).to.eql('application/json');
    chai.expect(response.body).to.have.property('phone', '2551024826');
  });
});
