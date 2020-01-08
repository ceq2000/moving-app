const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  token: { type: String, required: true },
  purpose: {type: String, required: true},
  expiresAt: {type: Date, required: true},
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true}
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
