const mysql = require('mysql2');// initialize mysql
const db = mysql.createConnection({
	host: "bumfllmklfzakkkv8r58-mysql.services.clever-cloud.com",
	database: "bumfllmklfzakkkv8r58",
	user:"ujak0zngguaydwty" ,
	password:"jMWMKvMcZY2moeTv4FVm" ,
	
});

db.connect((err) => { //connecting with cloud
	if (!err) {
		console.log('MySQL is connected');
	} else {
		console.log('MySQL failed to connect');
		console.log(err);
	}
});

module.exports = db;