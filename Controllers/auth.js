const bcrypt = require("bcryptjs");
const authService = require("../Service/auth");

const registrationController = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = {
      ...req.body,
      password: hashPassword,
    };
    await authService.registrationService(user);
    return res.status(200).json({
      msg: "user registration complete",
    });
  } catch (error) {
    next(error);
  }
};

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const token = await authService.loginService(email, password);
    return res.status(200).json({ message: "login successfully", token });
  } catch (error) {
    next(error);
  }
};

module.exports = { registrationController, loginController };
