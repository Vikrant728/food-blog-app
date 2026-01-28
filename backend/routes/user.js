const express = require("express");
const router = express.Router();
const{userlogin,usersignup,getuser}=require("../controller/user")

router.post("/signup",usersignup)
router.post("/login",userlogin)
router.get("/user/:id",getuser)

module.exports=router