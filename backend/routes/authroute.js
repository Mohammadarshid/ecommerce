const express = require("express");
const { registercontroller, loginController } = require("../Controllers/AuthControllers");
const router = express.Router();

// User Registration Route

//  routes

// Register || POST

router.post('/register', registercontroller)


//  LOGIN ||

router.post('/login', loginController)



module.exports = router;
