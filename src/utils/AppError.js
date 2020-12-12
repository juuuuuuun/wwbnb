module.exports = class AppError extends Error {
  constructor(message = 'No specific error message', statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isDetail = true; // get specific error for production
    this.status = String(statusCode).startsWith('4') ? 'fail' : 'error';

    Error.captureStackTrace(this, this.constructor);
  }
};

module.exports.wrapTryCatch = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    next(err);
  }
};
