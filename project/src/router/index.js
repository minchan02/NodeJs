const express = require("express");
const router = express.Router();
const db = require('../db/config');
const register = require("./register");

router.get('/', function(req, res){
	res.render('index');
})

router.get('/login', function(req, res){
	res.render('login');
})

router.use('/register', register);

module.exports = router;