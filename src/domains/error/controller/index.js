const CONSTANTS = require('../../../utils/constants');
const errorService = require('../service');
const { logger } = require('../../../utils/logger');

const errorController = (err, req, res, next) => {
  let error = err;
  if (error) {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';
    const isProduction = process.env.NODE_ENV === 'production';
    error.isDetail = true; // manual setting for now
    if (isProduction) {
      if (error.isDetail) {
        if (error.name === CONSTANTS.CAST_ERROR) error = errorService.handleCastErrorDB(error);
        if (error.code === CONSTANTS.DUPLICATE_FIELD_ERROR)
          error = errorService.handleDuplicateFieldsDB(error);
        if (error.name === CONSTANTS.VALIDATION_ERROR)
          error = errorService.handleValidationErrorDB(error);
        if (error.name === CONSTANTS.JSON_TOKEN_ERROR) error = errorService.handleJWTError();
        if (error.name === CONSTANTS.TOKEN_EXPIRED_ERROR)
          error = errorService.handleJWTExpiredError();
      } else {
        error.message = 'Please contact server admin';
      }
    }
    const stack = isProduction ? null : error.stack;
    logger.error(`[${error.statusCode}][${req.method}-${req.originalUrl}] - ${error.message}`);
    return res.status(400).render('error', { layout: false, message: 'failure', messages: JSON.stringify(error) });
  } else {
    next();
  }
};

module.exports = errorController;
