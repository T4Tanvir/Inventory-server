const express = require("express");
const router = express.Router();
const authController = require("../Controllers/auth");

router.get("/", (_req, res,next) => {
  res.status(200).json({
    msg: "server run successfully at the port 3000",
  });
});

router.post("/register", authController.registrationController);

router.post("/login", authController.loginController);

module.exports = router;
