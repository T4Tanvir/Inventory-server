const Product = require("../Models/Prodcut");
const Error = require("../Utils/error");

err={
  decreaseQunatity:"You have not enough product to sell",
  increaseQunatity:"You can't delete because you sell this product",
}

async function upadateProductQunatity(productList, operation) {
  // console.log(operation)
  try {
    for (const productData of productList) {
      const product = await Product.findById({ _id: productData.id });
      console.log(productData, operation);
      const updateQuantity =
        operation === "decreaseQunatity"
          ? product.quantity - productData.quantity
          : product.quantity + productData.quantity;
      console.log(updateQuantity);
      if (updateQuantity < 0) {
        throw new Error(err[operation], 400);
      }
      await product.updateOne({ $set: { quantity: updateQuantity } });
    }
  } catch (err) {
    throw new Error(err);
  }
}

const findProductById = async (productId) => {
  try {
    const data = await Product.findOne({ _id: productId });
    return data;
  } catch (err) {
    throw new Error("Server error occur ", 404);
  }
};
const createProduct = async (data) => {
  const prodcut = new Product({ ...data });
  try {
    return prodcut.save();
  } catch (e) {
    throw new Error("Prodct can not save the database", 400);
  }
};

const deleteProduct = async (productId) => {
  const findData = await findProductById(productId);
  console.log(findData);
  if (findData.quantity != 0) {
    throw new Error("At first we need to zero the quantity", "400");
  }
  return findData.remove();

  //return Product.deleteOne({ _id: productId });
};

const updateProduct = async (productId, updateData) => {
  try {
    return Product.findByIdAndUpdate({ _id: productId }, { ...updateData });
  } catch (error) {
    throw new Error("Cannot update the data", 204);
  }
};

const getProduct = async () => {
  try {
    return Product.find({});
  } catch (err) {
    throw new Error("server eroor occured", 400);
  }
};

const getProductById = async (productId) => {
  return findProductById(productId);
};
const getProductByName = async(productName) =>{
  try {
    const data = await Product.findOne({ name: productName });
    console.log(data)
    return data;
  } catch (err) {
    throw new Error("There are no product in this name ", 404);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getProductById,
  findProductById,
  upadateProductQunatity,
  getProductByName
};
