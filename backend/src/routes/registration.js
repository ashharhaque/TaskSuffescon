const express=require("express");
const router=express.Router();
const {createUser}=require("./../controller/createUser");
router.post("/registration",createUser);
module.exports=router;