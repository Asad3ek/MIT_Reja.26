const http = require("http");
const mongodb = require("mongodb");
const { connect } = require("http2");

let db;
const connectionString = "mongodb+srv://anthony_mit:KWJEZeEWp0cDcOiQ@cluster0.mhqyxxk.mongodb.net/MIT_REJA";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, (err, client) => {
    if(err){
        console.log("ERROR: Connection problem on MongoDB")
    } else{
        
        console.log("Successfully connected to MongoDB")
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, () => {
        console.log(
        `The Server is running  successfully on port: ${PORT}, http://localhost:${PORT}`
        );
        }); 
    }
})


