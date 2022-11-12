const User = require("../Models/User");
const Error = require("../Utils/error");

const createUser = (data) => {
  const user = new User({ ...data });
  try {
    return user.save();
  } catch (err) {
    throw new Error("Please try again later", 400);
  }
};

const getUser = async() => {
    
  try {
    return User.find({}).select('-password -__v -timestamp');
  } catch (err) {
    throw new Error("server eroor occured", 400);
  }
};
const getUserByID = async (userId) => {
    try {
        const data = await User.findOne({ _id: userId })
        return data;
      } catch (err) {
        throw new Error("Server error occur ", 404);
      }
};

const updateUser = async(id,userData) => {
  try {
    console.log(userData,id)
    const user = await User.findById({ _id: id });
    await user.updateOne({ $set: { ...userData } });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getUser,
  getUserByID,
  updateUser,
};
