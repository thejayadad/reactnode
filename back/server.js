require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./routes/StudentRoute");

const port = process.env.PORT || 5001

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', true);
mongoose.connect(uri, {useNewUrlParser:true});
const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("Mongodb going")
})

app.use(cors())
app.use(express.json());


app.listen(5000, () => {
    console.log("We are going on")
})