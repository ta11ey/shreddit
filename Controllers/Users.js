var Users = require('./../newserver.js')

Users.findAll({
  			where: {
    		id: 1
 			 }
		}).then(function(res){
			console.log(res)
		});
		
module.exports = {
	read: function (con){
		con.query('SELECT * FROM users', 
		{type:con.QueryTypes.SELECT})
		.then(function(users){
        console.log(users)
		
})
	},
	find: function (con){
		Users.findAll({
  			where: {
    		id: 2
 			 }
		}).then(function(res){
			console.log(res)
		});
	}
}