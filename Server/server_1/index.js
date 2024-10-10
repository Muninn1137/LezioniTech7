const express = require("express"); // Libreria che consente di scrivere un server 
const bodyParser = require("body-parer");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.post('/login',(req, res)=>{
const {username, password } = req.body;

db.get('Select * from user where usernae + ?', [username, password], (err, row) =>{

    if (err){
        return res.status(500).send('Errore interno del server');
    }
    if (row){
        res.redirect('/profilo');
    }
    else {
        res.status(401).send('Credenziali non valide');
    }
})
});


// Get per la pagina del profilo
app.get("/profilo", (req, res)=>{
    res.sendFile(__dirname + "/private/profile.html")
});


// Fai partire il server.
app.listen(3000, ()=>{
    console.log("Sto ascoltando la porta 3000")
});


