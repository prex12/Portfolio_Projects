const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded("extended : true"));
app.use(express.static('public'));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html")
})
app.get("/index.html",function(req, res){
    res.sendFile(__dirname + "/index.html")
})
app.get("/aboutUs.html", (req, res) =>{
    res.sendFile(__dirname +"/aboutUs.html");
})

app.get("/portfolio.html", (req, res) =>{
    res.sendFile(__dirname + "/portfolio.html")
})

app.get("/contactus.html", (req, res)=>{
    res.sendFile(__dirname + "/contactus.html")
})

app.get("/propertyexpanded.html", (req, res) =>{
    res.sendFile(__dirname + "/propertyexpanded.html")
})

app.post("/", (req, res)=>{
    const fname = req.body.fname;
    const email = req.body.email;
    const phoneNumber = req.body.phone;
    const lname = req.body.lname;
    console.log(fname);
})


app.listen(3000, function(){
    console.log("this server is running and connected to port 3000");
});