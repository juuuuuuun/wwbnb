const dotenv = require('dotenv');
const path = require('path');
const logger = require('../utils/logger');

const result = dotenv.config();
if (result.error && logger) {
  if (process.env.NODE_ENV !== 'production') {
    const envSamplePath = path.resolve(process.cwd(), 'env.example');
    logger.log(`Attempting to use default env in ${envSamplePath} instead.\n`);
    dotenv.config({ path: envSamplePath });
  }
}
