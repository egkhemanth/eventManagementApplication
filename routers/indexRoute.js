const express = require("express");
const indexRouter = express.Router();
const bodyParser=require("body-parser");
const fs = require("fs");
const data = require("./data");
indexRouter.route("/events")
.get((req, res) => {
  res.render("events", { data });
})
.post((req,res)=>{
    const{search,price,pincode}=req.body;
    //console.log(search,price,pincode)
    let newArray = data.filter(function (el) {
        return (el.price>= price && (el.category.toLowerCase()== search.toLowerCase()|| el.organiser.toLowerCase()==search.toLowerCase()||el.location.toLowerCase()==search.toLowerCase()) && el.pincode==pincode);
      });
    if(newArray.length>0){
        //console.log(newArray);
        res.render("results",{newArray});}
    else{
        res.render("noresults");
        }
});
module.exports = indexRouter;
