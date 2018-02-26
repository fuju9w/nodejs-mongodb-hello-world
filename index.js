var express = require('express');
var app = express();


app.get('/', function (req, res) {
   
	var MongoClient = require('mongodb').MongoClient;
	// connect to MongoDB on Azure VM
	var url = "mongodb://mymongdb25022018.southeastasia.cloudapp.azure.com:27017/";
	
	
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("mydb");
			dbo.collection("customers").findOne({}, function(err, result) {
		if (err) throw err;
			console.log(result.name);
			res.send(result);
			db.close();
		});
	}); 
	
});

var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
    console.log('Server is running..-8080-');
});

