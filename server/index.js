var mongoclient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var app = express();
var connectionstring = "mongodb://127.0.0.1:27017";

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(cors());

app.get("/getusers",(req,res)=>{
    mongoclient.connect(connectionstring,(err,clientobj)=>{
        if(!err)
        {
            var database = clientobj.db("bsrBase");
            database.collection("tblRegisterDetails").find({}).toArray((err,documents)=>{
                if(!err)
                {
                    res.send(documents);
                }
            })
        }
    })
});

app.post("/registeruser",(req,res)=>{
    var data = {
        UserName :req.body.UserName,
        Mobile :req.body.Mobile,
        Email :req.body.Email,
        Password :req.body.Password,
        City :req.body.City,
        Postal :req.body.Postal
        
    };
    mongoclient.connect(connectionstring,(err,clientobj)=>{
        if(!err)
        {
            var database = clientobj.db("bsrBase");
            database.collection("tblRegisterDetails").insertOne(data,(err,documents)=>{
                if(!err)
                {
                    console.log("Record inserted");
                }
            })
        }
    })
});

app.listen(4002);
console.log(`server started: http://127.0.0.1:4002`);