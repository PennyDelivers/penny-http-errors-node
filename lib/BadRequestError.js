'use strict';

var HttpError = require('./HttpError');

class BadRequestError extends HttpError {
  constructor(message) {
    super(message);
    this.code = 400;
  }
}

module.exports = BadRequestError;
