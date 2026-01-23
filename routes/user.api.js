const express = require("express");
const userController = require("../controllers/user.cotroller");
const router = express.Router();
const authController = require("../controllers/auth.controller");
router.post("/", userController.createUser);
router.get("/me", authController.authenticate, userController.getUser);
module.exports = router;
