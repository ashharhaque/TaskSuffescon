const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        // validate: {
        //   validator: function (v) {
        //     return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/.test(
        //       v
        //     );
        //   },
        //   message: (props) => `${props.value} is not a valid Email!`,
        // },
        lowercase: true,
        unique: true,
        required: true
    },
    phone:{
      type:Number,
      // validate: {
      //   validator: function (v) {
      //     return /^[6-9]\d{9}$/.test(
      //       v
      //     );
      //   },
      //   message: (props) => `${props.value} is not a valid Email!`,
      // },
      required:true
    },
    address:{
      type:Object,
      required:true
    },
    password:{
        type:String,
    },
    confirmPassword:{
        type:String,
    }
})

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);
    this.confirmPassword="";
    next();
});
const userModel=mongoose.model("userModel",UserSchema);
module.exports=userModel;