require('dotenv').config();
const app = require('./app');
const mongoService = require('./model/mongo');

const { PORT } = process.env;

const logger = app.get('logger');

function onHttpStart() {
  logger.info(`✅ Express http server listing on: ${PORT}`);
}

mongoService
  .initialize()
  .then((msg) => {
    logger.info(msg);
    return app.listen(PORT, onHttpStart);
  })
  .catch((err) => {
    logger.error(`❌ Error is caused due to ${err}`);
  });
