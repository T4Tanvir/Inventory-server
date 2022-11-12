const sellService = require("../Service/sell");

const getAllSells = async() => {
    try {
        const purchases = await sellService.getAllSells();
        res.status(200).json((data = purchases));
      } catch (e) {
        next(e);
      }
};

const createSells = async (req, res, next) => {
  try {
    console.log(req.body)
    await sellService.createSells(req.body);
    return res.status(200).json({ msg: "sell save successfully" });
  } catch (err) {
    next(err);
  }
};
const deleteSells = async(req,res,next) => {
    const id = req.params.id;
    try {
      await sellService.deleteSells(id);
      return res.status(200).json({ msg: "sell delete successfully" });
    } catch (err) {
      next(err);
    }
};

const updateSells = async(req,res,next) => {
    const id = req.params.selseID;
    try {
      await sellService.updateSell(id, req.body);
      return res.status(200).json({ msg: "Sell updated successfully" });
    } catch (e) {
      next(e);
    }
};
module.exports = { getAllSells, createSells, deleteSells, updateSells };
