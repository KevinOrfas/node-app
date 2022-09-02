const chai = require("chai");
const { expect } = chai;
const sinon = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);
// const fileManagement = require("./data");

describe("File Management", () => {
  var userObject = {
    'firstName': 'Kevin',
    'lastName': 'Orfas',
    'phone': '2551024824',
    'hashedPassword': 'myPass',
    'tosAgreement': true
  };
  beforeEach(() => { });

  afterEach(() => {
    sinon.restore();
  });

  describe("When creating a file", () => {
    it.skip("Should create a new file", (done) => {
      const writeSpy = sinon.spy(fs, "writeFile");
      const fileManagement = proxyquire("./data", { fs });
      fileManagement.create("users", '2551024859', userObject, done);
      const args = {
        'firstName': 'Kevin',
        'lastName': 'Orfas',
        'phone': '2551024824',
        'hashedPassword': 'myPass',
        'tosAgreement': true
      }

      expect(writeSpy).to.have.been.called();
  
    });
  });
});
