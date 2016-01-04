'use strict';

var HttpError = require('./HttpError');

class NotAllowedError extends HttpError {
  constructor(message) {
    super(message);
    this.code = 405;
  }
}

module.exports = NotAllowedError;
