// node app.js / supervisor app.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.locals.pretty = true;
app.set('views', './views'); //  jade를 views 파일에 
app.set('view engine', 'jade');
app.use(express.static('public')); // public 폴더를 정적인 파일의 위치로 설정
app.use(bodyParser.urlencoded({extended:false}))
app.get('/form', function(req, res){
	res.render('form');
});
app.get('/form_receiver',function(req,res){
	var title = req.query.title;
	var description = req.query.description;
	res.send(title+','+description);
})
app.post('/form_receiver', function(req,res){ // url에 표시 X => 보안 사고 방지
	var title = req.body.title;
	var description = req.body.description;
	res.send(title+','+description);
})
app.get('/topic/:id', function(req, res){ // req => 요청
	var topics = [
		'Javascript is....',
		'Nodejs is...',
		'Express is...'
	];
	var output = `
		<a href="/topic?id=0">Javascript</a><br>
		<a href="/topic?id=1">Nodejs</a><br>
		<a href="/topic?id=2">Express</a><br>
		${topics[req.params.id]}<!-- ${topics[req.query.id]} -->
	`
	res.send(output); // topic?id=3&name=egoing
});
app.get('/topic/:id/:mode', function(req, res){
	res.send(req.params.id+','+req.params.mode)
})
app.get('/', function(req, res){
	res.send('Hello home page');
});
app.get('/template', function(req, res){
	res.render('temp', {time:Date(), _title:'Jade'});
});
app.get('/dynamic', function(req, res){
	var lis = '';
	for(var i=0; i<5; i++){
		lis = lis+'<li> coding </li>'
	}
	var time = Date();
	var output= `<!DOCTYPE html>
<html>
	<head>
		<meta charset = "utf-8">
		<title></title>
	</head>
	<body>
		Hello, Dynamic!	<!--동적인 파일은 새로고침으로 불가능-->
		<ul>
		${lis} <!-- 변수 -->
		</ul>
		${time}
	</body>
</html>`;
	res.send(output);
})
app.get('/route', function(req,res){
	res.send('Hello Router, <img src="/a.png">');
})
app.get('/login', function(req, res){
	res.send('<h1> Login please </h1>');
})
app.listen(3000, function(){
	console.log('Connected 3000 port!');
});