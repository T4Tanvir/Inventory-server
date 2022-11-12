const prodductService = require("../Service/product");

const createProduct = async (req, res, next) => {
  try {
    await prodductService.createProduct(req.body);
    return res.status(200).json({ msg: "product save successfully" });
  } catch (e) {
    next(e);
  }
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    await prodductService.deleteProduct(productId);
    return res.status(203).json({ msg: "Product deleted succefully" });
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    await prodductService.updateProduct(productId, req.body);
    return res.status(200).json({ msg: "Product updated succefully" });
  } catch (err) {
    next(err);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const allProduct = await prodductService.getProduct();
    res.status(200).json((data = allProduct));
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  const id = req.params.productId;
  const product = await prodductService.getProductById(id);
  return res.status(200).json((data = product));
};
const getProductByName = async (req, res, next) => {
  const productName = req.params.productName;
  console.log(productName,'tanvir');
  const product = await prodductService.getProductByName(productName);
  return res.status(200).json((data = product));
};
module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getProductById,
  getProductByName,
};
