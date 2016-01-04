'use strict';

module.exports = {
  HttpError: require('./HttpError'),
  BadRequestError: require('./BadRequestError'),
  ForbiddenError: require('./ForbiddenError'),
  GoneError: require('./GoneError'),
  NotAllowedError: require('./NotAllowedError'),
  NotFoundError: require('./NotFoundError'),
  ResourceConflictError: require('./ResourceConflictError'),
  UnauthorizedError: require('./UnauthorizedError'),
  ValidationError: require('./ValidationError'),
};
