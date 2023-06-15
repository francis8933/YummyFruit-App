const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  basefruit: { type: String, require: true },
  secundaryfruit: { type: String },
  baseveggie: { type: String, require: true },
  secundaryveggie: String,
  herb: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
