const userService = require('../../../service/userService');
const { wrapTryCatch } = require('../../../utils/AppError');
const { logger } = require('../../../utils/logger');

const getIndex = (req, res) => {
  res.render('index', { layout: false });
};

const postIndex = wrapTryCatch(async (req, res) => {
  let isError = false;
  const messages = {};
  for (const key in req.body) {
    if (req.body[key].length === 0) {
      messages[key] = 'Invalid';
      isError = true;
    }
  }

  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailReg.test(req.body.email)) {
    messages.email = 'Email form error';
    isError = true;
  }

  const pwdReg = /^[A-Z]+\w+\d*\w*/;
  if (req.body.password.length < 6 || !pwdReg.test(req.body.password)) {
    messages.password = 'Follow like Abc123xxxx';
    isError = true;
  }

  if (isError) {
    return res.render('index', { layout: false, message: 'failure', messages });
  }

  const user = await userService.register(req.body);
  logger.info(user);
  // res.render('dashboard', {layout: false, message: 'success', username: });
  res.redirect('/dashboard');
});

const getAbout = (req, res) => {
  res.render('aboutUs', { layout: false });
};

const getLogin = (req, res) => {
  res.redirect('/');
};

const postLogin = wrapTryCatch(async (req, res) => {
  console.log("login: ", req.body);
  let isError = false;
  const messages = {};
  for (const key in req.body) {
    if (req.body[key].length === 0) {
      messages[key] = 'Invalid';
      isError = true;
    }
  }

  if (isError) {
    return res.render('index', { layout: false, message: 'login-failure', messages });
  }

  const user = await userService.login(req.body);
  logger.info(user);
  req.session.user = {
    username: user.username,
    email: user.email,
  };
  res.redirect('/dashboard');
});

const getDashboard = (req, res) => {
  res.render('dashboard', {
    layout: false,
    message: 'success',
    username: req.session.user.username,
  });
};

const getLogout = (req, res) => {
  req.session.reset();
  res.redirect('/');
};

const homeController = {
  getIndex,
  postIndex,
  getAbout,
  getLogin,
  postLogin,
  getDashboard,
  getLogout
};

module.exports = homeController;
