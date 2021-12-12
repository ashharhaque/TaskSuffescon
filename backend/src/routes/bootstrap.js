const registration=require("./registration");
const bootstrap=(app)=>{
   app.use(registration);
}

module.exports=bootstrap;