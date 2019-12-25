const express = require("express");
const app = express();
const bodyParser=require('body-parser');
//const expressHbs = require("express-handlebars");
const path = require("path");
const indexRoute = require("./routers/indexRoute");
const main=require("./routers/main")
const hbs=require('handlebars');
const ejs=require('ejs')
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", ".ejs");
app.set("views", path.join(__dirname, "./views"));
app.use("/",main);
app.use("/", indexRoute);
app.get("*",(req,res)=>{
  res.send("Not Found")
})
const server = app.listen(8000, () => {
  console.log("Server Running in port");
});
