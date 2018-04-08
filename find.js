//var mongodb=require('mongodb');

const url="mongodb://localhost:27017/learnyoumongo";
var mongo = require('mongodb').MongoClient
 mongo.connect(url, function(err, client) {
   // db gives access to the database
let givenage=+process.argv[2];
var db = client.db('learnyoumongo');
   db.collection('parrots').find({age: { $gt:givenage }}).toArray(function(err, documents) {
   	console.log(documents);
   })
 })