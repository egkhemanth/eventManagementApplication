const express = require("express");
const main = express.Router();
const bodyParser=require("body-parser");
const fs = require("fs");
const data = require("./data");
main.route("/")
.get((req, res) => {
  res.render("home", { data });
})
.post((req,res)=>{
 
});
module.exports = main;
