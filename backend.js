var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb://localhost/test');

var publicFolder = path.join(__dirname, 'public');

app.use(express.static(publicFolder));
app.use(bodyparser.urlencoded({extended: true }))

var user = new mongoose.Schema({
username:{type:string , required: true},
password:{type:string , required: true}
})

app.get('',(req,res)=>{
    res.render(publicFolder + '/index2.html');
})

app.post('/index.html',(req, res) =>{
    var user = new User({name: req.body.username,age: req.body.age});

    user.save().then(newuser =>{
res.send("created and user successfully");
    }).catch(err =>{
        res.send("somthing went wrong"); 
    })
})
    app.listen(3000, () =>{
        console.log("server is running on port 3000");
    });