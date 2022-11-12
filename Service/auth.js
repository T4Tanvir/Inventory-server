const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Error = require("../Utils/error");

const registrationService = async (data) => {
  const { email } = data;
  const getEmail = await User.findOne({ email: email });
  if (getEmail) {
    throw new Error("This email is allready used", 400);
  }
  const user = new User(data);
  return user.save();
};

const loginService = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("Authentication failure!", 400);
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Authentication failure!", 400);
  }

  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, "secret", { expiresIn: "60s" });
};

module.exports = { registrationService, loginService };
