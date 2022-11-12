const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user");


router.get("/user/all", userController.getUser);
router.put("/userupdate/:userid", userController.updateUser);
router.get("/getuser/:userId", userController.getUserByID);

module.exports = router;
