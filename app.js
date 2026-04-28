console.log("Starting Web Project");

const express = require("express");
const app = express(); 
const fs = require("fs");

let user; 
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:",err);
    } else{
        user = JSON.parse(data)
    } 
});

//calling MongoDB
const db = require("./server").db();


//1. Kirish code 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2. Session codes

//3. Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4. Routing code

app.post("/create_item", (req, res) => {
    console.log(req.body);
    res.json("aadi:Welcome to the aadiclub: You joined aadiclub Successfully");
})

//====R====E====J====A====START====
let goals = [];

app.get("/", function(req, res) {
    db.collection("2026_plans").find().toArray((err, data) => {
        if(err){
            console.log(err);
            res.end("Something went wrong")
        } else{
            console.log(data);
            res.render("goals", {goals});
        }
    })
    
})

app.post("/create_item1", (req, res) => {
    goals.push(req.body.MIT_REJA);
    console.log(req.body);
    const new_reja = req.body.MIT_REJA;
    db.collection("2026_plans").insertOne({reja: new_reja}, (err, data) => {
        if(err){
            console.log(err);
            res.end("Something Went Wrong");
        } else{
            console.log("Data Successfully Added");
        }
    })
    res.redirect("/");
})

app.post("/delete/:id", (req, res) => {
    const id = req.params.id;

    goals.splice(id, 1);

    res.redirect("/");
});

//====R====E====J====A====END====

app.get("/aadi_club", function(req, res){
    res.render("aadi_club")
})


app.get("/author", function(req, res) {
    res.render("author", { user });
})


module.exports = app;