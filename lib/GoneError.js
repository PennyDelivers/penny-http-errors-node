'use strict';

var HttpError = require('./HttpError');

class GoneError extends HttpError {
  constructor(message) {
    super(message);
    this.code = 410;
  }
}

module.exports = GoneError;
