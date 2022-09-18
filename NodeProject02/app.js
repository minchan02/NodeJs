var express = require('express');
var app = express()
var bodyParser = require('body-parser');
var router = require('./router/index')


app.listen(3000, function(){
	console.log("Connected on port 3000");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs'); // ejs 를 쓰자 <%= %>

app.use(router)
// app.use('/main', main) // main으로 들어오면 main.js를 써
// app.use('/email', email)


