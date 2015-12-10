var Sequelize = require('sequelize')
var app = require('express')();


// var sequelize = new Sequelize('postgres://root:MyNewPass@localhost:8080/shreddit');
var db = new Sequelize('shreddit', 'root', 'MyNewPass', {
  dialect: 'postgres'
})
 
// check database connection
// sequelize.authenticate().complete(function(err) {
//     if (err) {
//       console.log('Unable to connect to the database:', err);
//     } else {
//       console.log('Connection has been established successfully.');
//     }
// });
 
// initializing a port


// var User = sequelize.define('users', {});

// User.findAll().then(function (user) {
//     console.log(user);
// });

var Users = db.define('users', {
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

Users.findAll({
  			where: {
    		id: 1
 			 }
		}).then(function(res){
			console.log(res)
		});
module.exports = Users

// app.get('/s', User.read.bind(null, db))
// app.get('/d', User.find.bind(null, db))


app.listen(8080, function (){
    console.log('port 8080 active')
});