const express = require('express');
const roomController = require('../controller');

const router = express.Router();

router.get('/', roomController.getRooms);

router.post('/', roomController.createRoom);

router.get('/:id', roomController.getRoom);



module.exports = router;
