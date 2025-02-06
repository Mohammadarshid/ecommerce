const express = require("express");
const {
  getuserController,
  updateuserController,
  resertpasswordcontroller,
  updatePasswordController,
  deleteProfileController,
} = require("../Controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// User Registration Route

//  routes

// Register || POST

router.get("/getuser", authMiddleware, getuserController);

// update || PUT

router.put("/update", authMiddleware, updateuserController);

// password update
router.post("/updatePassword", authMiddleware, updatePasswordController);

// Reset Password
router.post("/resetpassword", resertpasswordcontroller);

// delete profile
router.delete("/delete/:id", authMiddleware, deleteProfileController);

module.exports = router;
