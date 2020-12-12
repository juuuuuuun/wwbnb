
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const path = require('path');
const multer = require('multer');
const clientSessions = require('client-sessions');

const expressLogger = require('../utils/logger');

const middlewares = (app) => {
  const { logger } = expressLogger;

  app.engine(
    'hbs',
    hbs({
      extname: '.hbs',
      defaultLayout: 'main',
      helpers: {
        isEqual(a, b, options) {
          if (a !== b) {
            return options.inverse(this);
          }
          return options.fn(this);
        },
        json(obj) {
          return JSON.stringify(obj);
        },
      },
    })
  );

  app.set('views', path.join(__dirname, '../views'));
  app.set('logger', logger);
  app.set('view engine', '.hbs');
  app.use(expressLogger);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(
    clientSessions({
      cookieName: 'session',
      secret: 'assignment',
      duration: 5 * 60 * 1000,
      activeDuration: 5 * 1000 * 60,
    })
  );
  app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
  });

  const storage = multer.diskStorage({
    destination: './public/images/uploaded',
    filename(req, file, cb) {
      // we write the filename as the current date down to the millisecond
      // in a large web service this would possibly cause a problem if two people
      // uploaded an image at the exact same time. A better way would be to use GUID's for filenames.
      // this is a simple example.
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

  module.exports.upload = multer({ storage });

  module.exports.authenticated = (req, res, next) => {
    if (!req.session.user) res.redirect('/login');
    else next();
  };

  module.exports.authenticatedWithAdmin = (req, res, next) => {
    if(req.session.user && req.session.user.isAdmin) {
        next();
    } else {
        res.redirect("/")
    }
  }
};

module.exports = middlewares;
