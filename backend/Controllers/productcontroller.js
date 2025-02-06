const productmodel = require("../models/productmodel");
//  Create Product
const createproductcontroller = async (req, res) => {
  try {
    const { name, category, price } = req.body;

    // Validation: Ensure all fields are provided
    if (!name || !category || !price) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const newproduct = new productmodel({
      name,
      category,
      price,
    });

    console.log(newproduct);

    await newproduct.save();
    res.status(201).send({
      success: true,
      message: "New Product Created Successfully",
      product: newproduct,
    });
  } catch (error) {
    console.error("Error in create product API:", error);
    res.status(500).send({
      success: false,
      message: "Error in creating product",
      error: error.message,
    });
  }
};

//  getallprod
const getallproductcontroller = async (req, res) => {
  try {
    const products = await productmodel.find({});
    if (!products) {
      return res.status(404).send({
        success: false,
        message: "No Product Available",
      });
    }
    console.log(products);

    res.status(200).send({
      success: true,
      totalproduct: products.length,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get All Resturant APi",
    });
  }
};
//  getrestuantby id

const getproductbyidcontroller = async (req, res) => {
  try {
    // find product by id
    const productid = req.params.id;

    if (!productid) {
      return res.status(404).send({
        success: false,
        message: "Please Provide resturant id",
      });
    }

    console.log(productid);
    const product = await productmodel.findById(productid);
    if (!productid) {
      return res.status(404).send({
        success: false,
        message: "no resturant Found",
      });
    }
    console.log(product);

    res.status(200).send({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get Product by id Api",
    });
  }
};

const deleteproductcontroller = async (req, res) => {
  try {
    const productid = req.params.id;
    if (!productid) {
      return res.status(404).send({
        success: false,
        message: "please  provide by product id",
      });
    }
    if (!productid) {
      return res.status(404).send({
        success: false,
        message: "No product found ",
      });
    }
    await productmodel.findByIdAndDelete(productid);
    res.status(200).send({
      success: true,
      message: " product Deleted Succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete Product Api",
      error,
    });
  }
};

module.exports = {
  createproductcontroller,
  getallproductcontroller,
  getproductbyidcontroller,
  deleteproductcontroller,
};
