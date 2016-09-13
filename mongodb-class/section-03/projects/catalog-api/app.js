var express = require("express");
var app = express();

// include the body Parser to handle POSTS
var bodyParser = require("body-parser");


// include mongojs
var mongojs = require('mongojs');
var db = mongojs('catalog', ['products']);


// middleware
app.use(bodyParser.json())


app.get('/', function(req, res) {
	res.send('it works');
});

// query for all of the products
app.get('/products', function(req, res) {
	console.log("fetching products");
	db.products.find(function(err, docs){
		if (err) {
			res.send(err);
		} else {
			console.log("sending products");
			res.json(docs);
		}
	});
});

// query for a specific product id
app.get('/products/:id', function(req, res) {
	console.log("fetching product");
	db.products.findOne({_id:mongojs.ObjectId(req.params.id)},function(err, doc){
		if (err) {
			res.send(err);
		} else {
			console.log("sending product");
			res.json(doc);
		}
	});
});

// add a new product. takes the entire request body and posts it
app.post('/products', function(req, res) {
	console.log('posting a product');
	db.products.insert(req.body, function(err, doc) {
		if (err) {
			res.send(err);
		} else {
			console.log('adding a product');
			res.json(doc);
		}
	});
});

// update a specific record
app.put('/products/:id', function(req, res) {
	console.log("fetching product");
	db.products.findAndModify({query: {_id:mongojs.ObjectId(req.params.id)}, 
		update:{$set: {
			name: req.body.name,
			category: req.body.category,
			description: req.body.description
		}},
		new:true
}, function(err, doc){
		if (err) {
			res.send(err);
		} else {
			console.log("sending product");
			res.json(doc);
		}
	});
});

// query for a specific product id
app.delete('/products/:id', function(req, res) {
	console.log("received delete request for product Id: " + req.params.id );
	db.products.remove({_id:mongojs.ObjectId(req.params.id)},function(err, doc){
		if (err) {
			res.send(err);
		} else {
			console.log("removing product");
			res.json(doc);
		}
	});
});

app.listen(3000);
console.log("app listening on port 3000 ... ");