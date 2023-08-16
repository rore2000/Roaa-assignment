const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser');
const cors = require('cors');
const md5 = require('md5')

const userEmail = null;
const userPass = null;

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"web"
    
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



app.post( "/api/getProfileInfo",(req,res)=> {

    const id = req.body.id;

    console.log("finall what id?",id);

    ///const sqlSelect= "SELECT * FROM users where email=? and password=?"; 
    const sqlSelect= "SELECT fname, lname, img, level, program, division FROM users where id=?";
    db.query(sqlSelect,id , (err,result) => {
        //console.log("Final resuuuult !!", result);
        //console.log(result);
        res.send(result);
    });
});



app.post("/api/post", (req,res)=> {
    const email = req.body.email;
    const pass = md5(req.body.password); // ** encrapte the pss by using md5 function for security reasons **
    console.log(" what req??")
    console.log(email);
    console.log(pass);
    const stm = "SELECT id FROM users where email=? and password=?";
    db.query(stm,[email , pass] , (err,result) => {
        //console.log("resuuuult !!");
        console.log( "what result?? ", result);
        console.log( "what id?? ");
        if(result !="") {
        res.send(result); // if the user found with entered email&pass then send the user id
        }
    });

});






app.post("/api/programInfo", (req,res)=> {

    const level = req.body.level;
    const program = req.body.program;
    const division = req.body.division;
    const id = req.body.id;

    console.log("what is level?",level);
    console.log("what is program?",program);
    console.log("what is division?",division);
    console.log("what is id?",id);



    const stm= "update users set level=?, program=?,  division=? where id=?";
    db.query(stm , [level, program , division, id]  , (err,result) => {
        console.log(err);
    })
});




/*
app.get( "/api/get",(req,res)=> {



    ///const sqlSelect= "SELECT * FROM users where email=? and password=?";       , [emaill , passwordd] 
    const sqlSelect= "SELECT * FROM users";
    db.query(sqlSelect , (err,result) => {
        console.log("resuuuult !!");
        console.log(result);
        res.send(result);
    });
});
*/


app.post("/api/insert", (req,res)=> {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const birthdate = req.body.birthdate;
    const photo = req.body.photo;
    var password = md5(req.body.password); /* hash function for security resons */

    const stm= "insert into users (fname, lname, email, birthdate, img, password)  values (?,?,?,?,?,?)";
    db.query(stm , [fname, lname , email, birthdate, photo, password]  , (err,result) => {
        console.log(err);
    })
});



app.listen(3001 , ()=> {
    console.log("runing on port 3001");
});
