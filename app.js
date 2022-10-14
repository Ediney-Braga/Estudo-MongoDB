const PORT = 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const linkRoute = require("./routes/linkRoute");
const path =require("path");

mongoose.connect("mongodb://localhost/newlinks")


let db = mongoose.connection;
db.on("error", () => {console.log("houve um erro")});
db.once("open", () => {console.log("Banco de dados carregado");})


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));


app.use("/", linkRoute);

app.listen(PORT, () => {
    console.log("Server Ruinng...")
})