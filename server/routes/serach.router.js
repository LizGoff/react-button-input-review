var express = require('express');
var router = express.Router();
// Make sure to Google mongoose when looking for resources
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var SearchSchema = new Schema();

// // Mongoose gives us an object that has properties we
// // can use to talk to the database.

// var Search = mongoose.model('Search', SearchSchema, 'search');

// POST Route
router.post('/', function (req, res) {
    console.log(req.body);
    var searchToAdd = new Student(req.body);
    searchToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    }); // END SAVE
}); // END POST Route

// GET Route
router.get('/', function (req, res) {
    Search.find({}, function (err, foundSearch) {
        if (err) {
            console.log("ERROR! : ", err);
            res.sendStatus(500);
        } else {
            res.send(foundSearch);
        }
    }); // END FIND
}); // END GET Route

// router.delete ('/', function (req, res) {
//     console.log(req.query);
//     Search.findByIdAndRemove(req.query._id)
//         .then(() => {
//             res.sendStatus(200);
//         })
//             .catch ((error) => {
//                 console.log("ERROR! with Delete: ", error);

//             res.sendStatus(500);
//         });
// }); // END DELETE Route


module.exports = router;