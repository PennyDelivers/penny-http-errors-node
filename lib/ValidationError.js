'use strict';

var HttpError = require('./HttpError');

class ValidationError extends HttpError {
  constructor(message, offendingProperty) {
    super(message);
    this.code = 422;
    if (offendingProperty) {
        this.property = offendingProperty;
    }
  }
}

module.exports = ValidationError;
