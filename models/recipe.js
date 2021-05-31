const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  
  image: {
    type: String,
    default: ""
  },

  url: {
    type: String,
    default: "",
    unique: true
  },

  ingredients: [String]
});
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
