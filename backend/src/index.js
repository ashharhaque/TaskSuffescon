
const express = require("express");
const path=require("path");
const dotenv=require("dotenv");
dotenv.config({ path:"./config.env"});
const session=require("express-session");
const mongoDbConnection = require("./utils/db.config");
const mongo= require("connect-mongo");
const MongoStore = mongo(session);
const bodyParser=require("body-parser");


const cors=require("cors");

// const bootstrap= require("./routes/bootstrap");

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const COOKEYSECRET=process.env.SECRETKEY;
app.use(session({
    secret: COOKEYSECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: new MongoStore({ mongooseConnection: mongoDbConnection })
}));



   

require("./routes/bootstrap")(app);
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`SERVER  STARTED ON PORT:${PORT}`)
});



