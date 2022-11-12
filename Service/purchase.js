const mongoose = require("mongoose");
const Purchase = require("../Models/Purchase");
const productService = require("../Service/product");
const Error = require("../Utils/error");

const createPurchase = async (data) => {
  const purchase = new Purchase({ ...data });
  try {
    await productService.upadateProductQunatity(
      data.products,
      "increaseQunatity"
    );
    return purchase.save();
  } catch (err) {
    throw new Error("Prodct can not save the database", 400);
  }
};

const deletePurchase = async (id) => {
  try {
    const purchase = await Purchase.findOne({ _id: id });
    await productService.upadateProductQunatity(
      purchase.products,
      "decreaseQunatity"
    );
    return Purchase.findByIdAndDelete(id);
  } catch (err) {
    return new Error("Can not delete the purchase", 400);
  }
};

const updatePurchase = async (id, updatedData) => {
  try {
    const purchase = await Purchase.findOne({ _id: id });

    console.log(updatedData.products);

    await productService.upadateProductQunatity(
      purchase.products,
      "decreaseQunatity"
    );
    await productService.upadateProductQunatity(
      updatedData.products,
      "increaseQunatity"
    );
   

    return await purchase.updateOne({ ...updatedData });
  } catch (e) {
    throw new Error("can not updated the product", 400);
  }
};
const getAllPurchases = async () => {
  try {
    return Purchase.find({}).pupulate(-products);
  } catch (err) {
    throw new Error("server eroor occured", 400);
  }
};

module.exports = {
  createPurchase,
  deletePurchase,
  updatePurchase,
  getAllPurchases,
};
