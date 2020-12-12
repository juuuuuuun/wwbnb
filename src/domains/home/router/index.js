const express = require('express');
const homeController = require('../controller');

const router = express.Router();

router.get('/', homeController.getIndex);

router.get('/aboutUs', homeController.getAbout);

router.get('/login', homeController.getLogin);

router.post('/login', homeController.postLogin);

router.get('/dashboard', homeController.getDashboard);

router.post('/', homeController.postIndex);

router.get('/logout', homeController.getLogout);

module.exports = router;
