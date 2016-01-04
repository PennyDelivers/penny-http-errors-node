'use strict';

var HttpError = require('./HttpError');

class ForbiddenError extends HttpError {
  constructor(message) {
    super(message);
    this.code = 403;
  }
}

module.exports = ForbiddenError;
