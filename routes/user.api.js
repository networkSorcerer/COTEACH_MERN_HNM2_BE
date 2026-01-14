const express = require("express");
const userController = require("../controllers/user.cotroller");
const router = express.Router();

router.post("/", userController.createUser);
router.get("/me", authController.authenticate, userController.getUser);
module.exports = router;
