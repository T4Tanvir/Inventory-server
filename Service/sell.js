const Sell = require("../Models/Sell");
const productService = require("./product");

const getAllSells = async () => {
  try {
    return Sell.find({});
  } catch (err) {
    throw new Error("server eroor occured", 400);
  }
};
const createSells = async (data) => {
  const sell = new Sell({ ...data });
  try {
    await productService.upadateProductQunatity(
      data.products,
      "decreaseQunatity"
    );
    return sell.save();
  } catch (err) {
    throw new Error("Please try again later", 400);
  }
};
const deleteSells = async (id) => {
  try {
    const sell = await Sell.findOne({ _id: id });
    await productService.upadateProductQunatity(
      sell.products,
      "increaseQunatity"
    );
    return Sell.findByIdAndDelete(id);
  } catch (err) {
    return new Error("Can not delete the sell", 400);
  }
};

const updateSells = async (id, updatedData) => {
  try {
    const sell = await Sell.findOne({ _id: id });

    //console.log(updatedData.products);

    //for delete the sell
    await productService.upadateProductQunatity(
      sell.products,
      "increaseQunatity"
    );
    await productService.upadateProductQunatity(
      updatedData.products,
      "decreaseQunatity"
    );

    return await purchase.updateOne({ ...updatedData });
  } catch (e) {
    throw new Error("can not update the sell", 400);
  }
};
module.exports = { getAllSells, createSells, deleteSells, updateSells };
 