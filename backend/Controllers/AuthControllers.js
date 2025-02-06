const usermodel = require("../models/usermodel");
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
// Register Controller
const registercontroller = async (req, res) => {
  try {
    const { userName, email, password, phone, address, profile, answer } =
      req.body;
    if (
      !userName ||
      !email ||
      !password ||
      !phone ||
      !address ||
      !profile ||
      !answer
    ) {
      return res.status(500).send({
        success: false,
        message: "please provide all fields ",
      });
    }
    const existinguser = await usermodel.findOne({ email });

    if (existinguser) {
      return res.status(500).send({
        success: false,
        message: "Email Already Registered please please login",
      });
    }

    // hashing [password]

      var salt = bcrypt.genSaltSync(10);
      const hashendPwd= await bcrypt.hash(password,salt)

    const User = await usermodel.create({
      userName,
      email,
      password:hashendPwd,
      phone,
      address,
      profile,
      answer
    });
    res.status(201).send({
      success: true,
      message: "Successfully Registered",
      User,
    });
    console.log(User);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

// Login Controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "please Provide Email or Password",
      });
    }
    // check user

    const user = await usermodel.findOne({ email});
    console.log(user);

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User not Found",
      });
      }
      //  check user password | compare  password
       const isMismatch =await bcrypt.compare(password,user.password)
      if (!isMismatch) {
          return res.status(500).send({
              success: false,
              message:'invalid Creditials'
              })
      }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
      });
      res.status(200).send({
          success: true,
          message: 'login Successfully',
          token,
          user,
      })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login  APi",
      error,
    });
  }
};

module.exports = { registercontroller, loginController };
