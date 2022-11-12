const mongoose = require("mongoose");

const sellSchema = mongoose.Schema({
  products: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  customer: {
    type: String,
    required: true,
  },
  total_price: {
    type: Number,
    reqired: true,
  },
  payment: {
    type: Number,
    required: true,
  },
  due: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
/*
sells kora product dlete korte galse sob hisab abar back korte hobe

*/

module.exports = mongoose.model("Sell", sellSchema);
