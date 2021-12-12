const mongoose=require("mongoose");
const DB=process.env.DATABASE;

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const db=mongoose.connection;
 
db.on("error",console.error.bind(console, ' DATABASE connection error:'));

db.once("open",()=>{
    console.log("DATABASE SUCCESSFULLY CONNECTED");
});

module.exports=db;