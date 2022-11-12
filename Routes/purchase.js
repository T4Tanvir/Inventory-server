const purchaseController = require("../Controllers/purchase");
const express = require("express");
const router = express.Router();

router.get("/getAllPurchases", purchaseController.getAllPurchases);
router.post("/createPurchase", purchaseController.createPurchase);
router.delete("/purchase/:id", purchaseController.deletePurchase);
router.patch("/purchase/:purchaseId", purchaseController.updatePurchase);

module.exports = router;
