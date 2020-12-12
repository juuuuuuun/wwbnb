const roomService = require('../../../service/roomService');
const { wrapTryCatch } = require('../../../utils/AppError');

const getRooms = wrapTryCatch(async (req, res) => {
  const rooms = await roomService.getRooms();
  res.render('rooms', { rooms, layout: false });
});

const getRoom = wrapTryCatch(async (req, res) => {
  const { id } = req.params;
  // const room = await roomService.getRoom(id);
  // res.sendFile(path.join(__dirname, `views/roomDetail${id}.html`));
  res.render(`roomDetail${id}`, { layout: false });
});


const createRoom = wrapTryCatch(async (req, res) => {
  const room = await roomService.createRoom(req.body);
  // res.sendFile(path.join(__dirname, `views/roomDetail${id}.html`));
  res.render(`roomDetail${room._id}`, { layout: false });
});

const roomController = {
  getRooms,
  getRoom,
  createRoom
};

module.exports = roomController;
