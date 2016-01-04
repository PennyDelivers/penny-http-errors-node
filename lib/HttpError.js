'use strict';

class HttpError extends Error {
  constructor(message) {
    super(message);
    this.code = 500; // default error code 500
  }

  get name() {
    return this.constructor.name;
  }

  get status() {
    return this.code;
  }

  get type() {
    return this.name;
  }
}

module.exports = HttpError;
