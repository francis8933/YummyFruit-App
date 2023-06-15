const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: { type: String, require: true, unique: true },
  password: { type: Number, require: true },
  recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
