const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const productsController = require("../controllers/productController");
const router = express.Router();

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;