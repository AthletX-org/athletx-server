const express = require("express");
const router = express.Router();
const authControllers = require("../../controllers/authController");

router.post("/signup", authControllers.signup);
router.post("/login", authControllers.login);
router.post("/logout", authControllers.logout); 

module.exports = router;
