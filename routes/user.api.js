const express = require("express");
const userController = require("../controllers/user.cotroller");
const router = express.Router();

router.post("/", userController.createUser);

module.exports = router;
