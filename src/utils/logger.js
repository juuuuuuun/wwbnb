require('dotenv').config();
const pino = require('pino');
const expressPino = require('express-pino-logger');
const os = require('os');
const path = require('path');

const { LOG_FILE, LOG_LEVEL, NODE_ENV } = process.env;

// Deal with log levels we don't know, or which are incorrectly formatted
let logLevel = (LOG_LEVEL || 'info').toLowerCase();
if (!pino.levels.values[logLevel]) {
  // Use `debug` by default in development mode, `info` otherwise.
  logLevel = NODE_ENV === 'development' ? 'debug' : 'info';
}

const options = {
  prettyPrint: {
    // Translate time from epoch time to local time
    translateTime: 'SYS: yyyy-mm-dd HH:MM:ss.l ',
  },
  level: logLevel,
};

// Log to stdout, or a file if LOG_FILE is specified
let destination;
if (LOG_FILE && logLevel !== 'debug') {
  destination = pino.destination(path.resolve(process.cwd(), LOG_FILE));
  options.prettyPrint = false;
  //  options.prettyPrint.colorize = false;
} else {
  // Try to use colour when not logging to a file, but skip on Windows
  options.prettyPrint.colorize = !(os.type() === 'Windows_NT');
  destination = pino.destination(process.stdout.fd);
}

// Unable to use options as argument in both cases because pino-elastic does not like prettyPrint
const logger = pino(options, destination);

const expressLogger = expressPino({ logger });

module.exports = expressLogger;
