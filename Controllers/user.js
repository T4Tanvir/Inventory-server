const userService = require("../Service/user");

const createUser = async (req, res, next) => {
  try {
    await userService.createUser(req.body);
    return res.status(200).json({ msg: "User save successfully" });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const allUser = await userService.getUser();
    console.log(allUser);
    console.log("i am called");
    res.status(200).json((data = allUser));
  } catch (err) {
    next(err);
  }
};
const getUserByID = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const product = await userService.getUserByID(id);
    return res.status(200).json((data = product));
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  const userid = req.params.userid;

  try {
    console.log(userid);
    await userService.updateUser(userid, req.body);
    return res.status(200).json({ msg: "User updated succefully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUser,
  getUserByID,
  updateUser,
};
