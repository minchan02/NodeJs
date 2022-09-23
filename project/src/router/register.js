const express = require("express");
const router = express.Router();
const db = require('../db/config');
const encrypt = require('../ctrl/encryption');


router.get('/', function(req, res){
	res.render('register');
})

router.post('/', function(req, res){
	//const {psword, salt} = encrypt(req.body.pw);
	var param = [req.body.id, req.body.pw, req.body.name, req.body.unit, req.body.email, 'abc'];
	db.query('INSERT INTO member (id,pw,name,unit,email,salt) VALUES (?, ?, ?, ?, ?, ?)', param , function(err,rows, fields){
		if(err) {
			console.log(err);
		}
		else{
			 console.log(rows);
		}
		
	});
	//res.redirect('/');
	res.end();
})


module.exports = router;