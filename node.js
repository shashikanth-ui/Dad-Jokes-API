import express from "express";
import axios from "axios";
import fs from "fs";
let app = express();
app.use(express.static("static"))
app.get("/",(req,res)=>{
    res.send("index.html");
})
app.listen("3000",()=>{

    console.log("http://localhost:3000");
})