const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createproductcontroller,
  getallproductcontroller,
  getproductbyidcontroller,
  deleteproductcontroller,
} = require("../Controllers/productcontroller");

const router = express.Router();

//  routes

// product || POST
router.post("/create", authMiddleware, createproductcontroller);

// produts all ||get
router.get("/getall", getallproductcontroller);

// products get by id
router.get("/get/:id", getproductbyidcontroller);

//  delete products by id

router.delete("/delete/:id", authMiddleware, deleteproductcontroller);

module.exports = router;
