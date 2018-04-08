//var mongodb=require('mongodb');

const url="mongodb://localhost:27017/learnyoumongo";
var mongo = require('mongodb').MongoClient
var size=process.argv[2];
 mongo.connect(url, function(err, client) {
   // db gives access to the database
var db = client.db('learnyoumongo');
db.collection('prices').aggregate({
	$match:{size:size}
}, { $group: {
   _id: 'average' // T
 , average: {
     // $sum is the
     $avg: '$price'
   }
}
},function(err,result){
   	console.log(Number(result[0].average).toFixed(2));
   }
   )

 })