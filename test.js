var express   =    require("express");
 var mysql     =    require('mysql');
 var app       =    express();
 var siege	= require('siege')
 
 var pool      =    mysql.createPool({
     connectionLimit : 100, //important
     host     : 'localhost',
     user     : 'root',
     password : 'MyNewPass',
     database : 'shreddit',
     debug    :  false
 });
 
 
 
 function handle_database(req,res) {
     
     pool.getConnection(function(err, connection){
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
 
 app.get("/",function(req,res){-
         handle_database(req,res);
 });
 
siege()
  .on(3000)
  .for(10000).times
  .get('/')
  .attack()
 
 app.listen(3000, function(){
	 console.log('listening 3000')
 });