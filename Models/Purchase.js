const mongoose = require("mongoose");
const Product = require("./Prodcut");

const purchaseSchema = mongoose.Schema({
  products: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
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
  phn_number: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
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

module.exports = mongoose.model("Purchase", purchaseSchema);
