console.log("Starting Web Project");

const express = require("express");
const app = express(); 
const http = require("http");
const fs = require("fs");

let user; 
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:",err);
    } else{
        user = JSON.parse(data)
    } 
});

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

app.get("/", function(req, res){
    res.render("aadi_club")
})


app.get("/author", function(req, res) {
    res.render("author", { user });
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The Server is running  successfully on port: ${PORT}`);
}); 