var express = require('express');
var db = require('../models');
var moment = require('moment');
var router = express.Router();
var path = require('path');

router.get('/', function (req,res) {
    db.Customer.findAll({}).then(function(data){
        console.log(data);
        //res.send({ redirect: '/admin' });
        res.render('admin', {customers: data});
    });
});

// router.get('/', function(req, res) {
//     res.render('admin');
// })

router.post('/admin', function(req, res) {
    var idVal = parseInt(req.params);
    console.log('--------------------> ', idVal);

    db.Customer.update({
    //     devoured: true,
    // }, {
    //     where: {
    //         id: {
    //             $eq: idVal
    //         }
    //     }
    }).then(function(data){
        console.log('update')
        res.redirect('/')
    });
});

router.post('/add', function (req, res) {
    // console.log('<----------------->', req.params);
console.log('name ', req.body);
    var myObj = {
        name: req.body.name,
        email: req.body.email,
        phone: parseInt(req.body.phone),
        message: req.body.message
    };
    console.log('------------------------>', myObj);
    db.Customer.create(myObj)
    .then(function(){
        console.log('logged customer');
        res.redirect('/');
    })
    .catch((err) => {
        console.log('>>>>>>>>>>> ', err);
    })
    console.log('end of the function ');
});

// router.post('/burger/delete', function(req, res){
//     db.Customer.destroy({
//         where: {}
//     }).then(function(data){
//         console.log('destroy all data');
//         res.redirect('/');
//     })
// });



module.exports = router;