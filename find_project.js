//var mongodb=require('mongodb');

const url="mongodb://localhost:27017/learnyoumongo";
var mongo = require('mongodb').MongoClient
 mongo.connect(url, function(err, client) {
   // db gives access to the database
let givenage=+process.argv[2];
var db = client.db('learnyoumongo');
   learnyoumongo.parrots.find({age: { $gt:givenage }},{
        name: 1,
        age: 1,
        _id: 0
    }).toArray(function(err, documents) {
   	console.log(documents);
   })
 })