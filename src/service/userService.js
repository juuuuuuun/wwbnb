require('dotenv').config();
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const User = require('../model/user.js');
const { logger } = require('../utils/logger');

const login = ({ email, password }) => {
  logger.info({ email, password });
  return new Promise((resolve, reject) => {
    User.find({ email })
      .then((users) => {
        return bcrypt
          .compare(password, users[0].password)
          .then(() => {
            return resolve(users[0]);
          })
          .catch(() => {
            reject(new Error(`Incorrect Password for user: ${email}`));
          });
      })
      .catch(() => {
        reject(new Error(`Unable to find user: ${email}`));
      });
  });
};

const register = (userData) => {
  return new Promise((resolve, reject) => {
    const username = `${userData.firstname} ${userData.lastname}`;
    const mailOptions = {
      from: 'jsong89.seneca@gmail.com',
      to: userData.email,
      subject: 'Welcome to register WWBnB!',
      html:
        `<p>Hello ${username}:</p><p>Thank-you for registration.<p/>` +
        `<a href="https://jsong89.herokurouter.com/dashboard/">Click</a>`,
    };

    const { NODEMAILER_SERVICE, NODEMAILER_EMAIL, NODEMAILER_PASSWORD } = process.env;

    const transporter = nodemailer.createTransport({
      service: NODEMAILER_SERVICE,
      auth: {
        user: NODEMAILER_EMAIL,
        pass: NODEMAILER_PASSWORD,
      },
    });
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        logger.error(`ERROR: ${error}`);
      } else {
        console.info(`SUCCESS: ${info.response}`);
      }
    });

    userData.isAdmin = userData.isAdmin === "on";
    const newUser = new User(userData);
    logger.info("data: " + JSON.stringify(newUser));    
    newUser.save().then((res) => console.log(res)).catch(err => console.log(err));
    return null; 
  });
};

const userService = {
  login,
  register,
};

module.exports = userService;
