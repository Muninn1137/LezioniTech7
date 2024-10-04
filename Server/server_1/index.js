const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("Sto ascoltando la porta 3000")
});

app.get("/", (req, res)=>{
    res.status(200);
    res.send("Ciao");
    res.sendFile(__dirname + "Home/public/home.html")
});