const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    title: { type: String, required: true },
    year: { type: String, required: true },
    description: String,
    //   purchaseDate: {type: Date},
    //   purchasePrice: {type: String},
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Room = mongoose.model("Rooms", RoomSchema);

module.exports = Room;
