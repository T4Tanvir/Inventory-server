const purchaseService = require("../Service/purchase");
const productService = require("../Service/product");

const createPurchase = async (req, res, next) => {
  try {
    await purchaseService.createPurchase(req.body);
    return res.status(200).json({ msg: "Purchase save successfully" });
  } catch (err) {
    next(err);
  }
};

const deletePurchase = async (req, res, next) => {
  const id = req.params.id;
  try {
    await purchaseService.deletePurchase(id);
    return res.status(200).json({ msg: "Purchase delete successfully" });
  } catch (err) {
    next(err);
  }
};

const updatePurchase = async (req, res, next) => {
  const id = req.params.purchaseId;
  try {
    await purchaseService.updatePurchase(id, req.body);
    return res.status(200).json({ msg: "Purchase updated successfully" });
  } catch (e) {
    next(e);
  }
};
const getAllPurchases = async (_req, res, next) => {
  try {
    const purchases = await purchaseService.getAllPurchases();
    res.status(200).json((data = purchases));
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createPurchase,
  deletePurchase,
  updatePurchase,
  getAllPurchases,
};
