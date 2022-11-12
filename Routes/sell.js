const express = require("express");
const router = express.Router();
const sellController = require("../Controllers/sell");

router.get("/getAllSells", sellController.getAllSells);
router.post("/createSells", sellController.createSells);
router.delete("/sells/:id", sellController.deleteSells);
router.patch("/sells/:selseID", sellController.updateSells);

module.exports = router;
