const userModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "asd@3160";

const signup = async (req, res) => {
  //check existing user or not
  //hash password
  //user create
  //generate token
  const { username, email, password } = req.body;
  try {
    const existigUser = await userModel.findOne({ email: email });
    if (existigUser) {
      return res.status(400).json({ message: "User Already Exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY); //payload for validation in future
    //payload for user identification
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};


const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existigUser = await userModel.findOne({ email: email });
    if (!existigUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const matchPassword =await bcrypt.compare(password, existigUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Pasword" });
    }

    const token = jwt.sign(
      { email: existigUser.email, id: existigUser._id },
      SECRET_KEY
    ); //existing userfetched through this email
    res.status(200).json({ user: existigUser, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = { signup, signin };
