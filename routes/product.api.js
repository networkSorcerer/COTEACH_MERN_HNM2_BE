const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();
const productController = require("../controllers/product.controller");
router.post(
  "/",

  authController.authenticate,
  authController.checkAdminPermission,
  productController.createProduct,
);
