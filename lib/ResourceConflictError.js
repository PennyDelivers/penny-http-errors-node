'use strict';

var HttpError = require('./HttpError');

class ResourceConflictError extends HttpError {
  constructor(message) {
    super(message);
    this.code = 409;
  }
}

module.exports = ResourceConflictError;
