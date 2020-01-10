const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: String,
  purchaseDate: {type: Date},
  purchasePrice: {type: Date},
  date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true}
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
