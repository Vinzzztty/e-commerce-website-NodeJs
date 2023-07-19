const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.get("/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);

router.get("/products", adminController.getProduts);

module.exports = router;
