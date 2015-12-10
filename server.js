var mysql = require("mysql");
// import mysql from 'mysql'
// import User from './Controllers/Users.js'
var User = require('./Controllers/Users.js')
var express = require('express');
var port = process.env.PORT || 8080;


// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MyNewPass",
  database:'shreddit'
});


var app = express();

app.get(  '/read',    User.read.bind(null, con))
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

function handle_database(req,res) {
     
     pool.getConnection(function(err,connection){
         if (err) {
           connection.release();
           res.json({"code" : 100, "status" : "Error in connection database"});
           return;
         }   
 
         console.log('connected as id ' + connection.threadId);
         
         connection.query("select * from user",function(err,rows){
             connection.release();
             if(!err) {
                 res.json(rows);
             }           
         });
 
         connection.on('error', function(err) {      
               res.json({"code" : 100, "status" : "Error in connection database"});
               return;     
         });
   });
 }

// con.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });


app.get("/",function(req,res){
 con.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
 con.end();
   if (!err)
     console.log('The solution is: ', rows);
   else
     console.log('Error while performing Query.');
   });
 });

 

// create
// var user = { name: 'Winnie', location: 'Australia' };
// con.query('INSERT INTO users SET ?', user, function(err,res){
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });

// update
// con.query(
//   'UPDATE users SET location = ? Where ID = ?',
//   ["Provo", 1],
//   function (err, result) {
//     if (err) throw err;

//     console.log('Changed ' + result.changedRows + ' rows');
//   }
// );

//select by return by


//delete
// con.query(
//   'DELETE FROM users WHERE id = ?',
//   [5],
//   function (err, result) {
//     if (err) throw err;

//     console.log('Deleted ' + result.affectedRows + ' rows');
//   }
// );


con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});

app.listen(port, function() {
  console.log('Listening on port '+ port);
});
