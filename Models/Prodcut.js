const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  purchase_rate: {
    type: String,
    required: true,
  },
  selling_rate: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
    required: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
