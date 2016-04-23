var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



app.use(express.static(__dirname+'/public'));


/*Get customers data from database*/

// app.get('/getCutomersData', function(req, res){
// 	console.log("get request");
//     res.send(customerData);
// });


/*Post customer data from database*/
// app.post('/addCutomer', function(req, res){
// 	console.log("post");
// 	console.log(req.body);
//     res.send("successfuly added");
// });


app.listen(3000);
console.log('Server running on 3000');