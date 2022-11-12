const express = require("express");
const router = express.Router();
const productController = require("../Controllers/product");

router.post("/createProduct", productController.createProduct);

router.delete("/deleteProduct/:productId", productController.deleteProduct);

router.put("/updateProduct/:productId", productController.updateProduct);

router.get("/getProduct", productController.getProduct);

router.get("/productById/:productId", productController.getProductById);
router.get("/productByName/:productName", productController.getProductByName);

/*
every thing should be verified by using middleware
for stock :-/getall--- product name, quantity, price
for form-fillup: model-name----brand,category, purchaseRate
brand-category-nameOrModel-priceRange
*/

module.exports = router;
