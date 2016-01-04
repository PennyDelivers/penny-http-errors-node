'use strict';

var HttpError = require('./HttpError');

class NotFoundError extends HttpError {
  constructor(message) {
    super(message);
    this.code = 404;
  }
}

module.exports = NotFoundError;
