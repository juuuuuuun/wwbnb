const Room = require('../model/room');

const getRooms = () => {
    return Room.find({});
}

const getRoom = (id) => {
    return Room.findById(id);
}

const createRoom = (room) => {
    const newRoom = new Room(room);
    return newRoom.save();
}

const roomService = {
    createRoom
};
  
module.exports = roomService;