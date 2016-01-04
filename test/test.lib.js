'use strict';

var errors = require('./../lib');

describe('HttpError', function() {
  it('inherits `Error`', function() {
    (new errors.HttpError).should.be.an.instanceOf(Error);
  });
  it('has default code 500', function() {
    (new errors.HttpError).should.have.property('code', 500);
  });
  it('has default status 500', function() {
    (new errors.HttpError).should.have.property('status', 500);
  });
  it('has message', function() {
    (new errors.HttpError('test'))
      .should.have.property('message', 'test');
  });
  it('has `name` `HttpError`', function() {
    (new errors.HttpError('test'))
      .should.have.property('name', 'HttpError');
  });
  it('has `type` `HttpError`', function() {
    (new errors.HttpError('test'))
      .should.have.property('type', 'HttpError');
  });
});

let errorNamesToCodes = {
  BadRequestError: 400,
  ForbiddenError: 403,
  GoneError: 410,
  NotAllowedError: 405,
  NotFoundError: 404,
  ResourceConflictError: 409,
  UnauthorizedError: 401,
  ValidationError: 422,
};

for (let errorName in errorNamesToCodes) {
  let code = errorNamesToCodes[errorName];
  describe(errorName, function() {
    it('inherits `Error`', function() {
      (new errors[errorName]).should.be.an.instanceOf(Error);
    });
    it('inherits `HttpError`', function() {
      (new errors[errorName]).should.be.an.instanceOf(errors.HttpError);
    });
    it('has default code ' + code, function() {
      (new errors[errorName]).should.have.property('code', code);
    });
    it('has default status ' + code, function() {
      (new errors[errorName]).should.have.property('status', code);
    });
    it('has `name` `' + errorName + '`', function() {
      (new errors[errorName]('test'))
        .should.have.property('name', errorName);
    });
    it('has `type` `' + errorName + '`', function() {
      (new errors[errorName]('test'))
        .should.have.property('type', errorName);
    });
  });
}

