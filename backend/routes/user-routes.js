const express = require ("express");
const { signup, signin } = require("../controllers/user-controller");
const userRouter = express.Router();


userRouter.post("/signup",signup)
userRouter.post("/signin",signin)

module.exports = userRouter;