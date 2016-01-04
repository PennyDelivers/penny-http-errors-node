'use strict';

var HttpError = require('./HttpError');

class UnauthorizedError extends HttpError {
  constructor(message) {
    super(message);
    this.code = 401;
  }
}

module.exports = UnauthorizedError;
