console.log("Starting Web Project");

//requiring needed external packages
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
const mongodb = require("mongodb");


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
            res.render("goals", {goals: data});
        }
    })
    
})
    //create operation post
app.post("/create_item1", (req, res) => {
    //goals.push(req.body.MIT_REJA);
    const new_goal = req.body.MIT_REJA;
    db.collection("2026_plans").insertOne({reja: new_goal}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    })
})
    //delete operation post 
app.post("/delete_item1", (req, res) => {
    const id = req.body.id;
    //path to delete item from database 
    db.collection("2026_plans").deleteOne({ _id: new mongodb.ObjectId(id)}, (data, err) => {
        res.json({state: "successfully deleted from database"}); 
    })
});

   
    //edit operation post
app.post("/edit_item1", (req, res) => {
    const data = req.body;
    console.log(data);
    //path to delete item from database 
    db.collection("2026_plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, 
    {$set: {reja: data.new_input} }, 
    function(data, err) {
        res.json({ state: "SUCCESSED"}); 
    } 
 );
});

//clear list operation post 
app.post("/delete-all1", (req, res) => {
    if(req.body.delete_all) {
        db.collection("2026_plans").deleteMany({}, (err, data) => {
            if(err) {
                res.json({ state: "Delete failed" });
            } else{
                res.json({state: "All plans Deleted"})
            }
        })
    }
})

//====R====E====J====A====END====

app.get("/aadi_club", function(req, res){
    res.render("aadi_club")
})


app.get("/author", function(req, res) {
    res.render("author", { user });
})


module.exports = app;