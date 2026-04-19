console.log("Starting Web Project");

const express = require("express");
const app = express(); 
const http = require("http");

//1. Kirish code 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2. Session codes

//3. Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4. Routing code
app.get("/home", function (req, res) {
    res.send("<h3>Hello! This is first project</h3>");
});

app.get("/men", function (req, res) {
    res.send("<h3>Men's Shoes & Clothes</h3>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The Server is running  successfully on port: ${PORT}`);
}); 