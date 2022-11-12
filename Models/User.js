const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      msg: (props) => `${props.value} is not a valid email number!`,
    },
    required: true,
  },
  phnNumber: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Employee"],
    default: "employee",
    require: true,
  },
  password: {
    type: String,
    minlength: [4, "Password is very small"],
    require: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
