const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const router = require('./src/router/index')
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static(`${__dirname}/src/public`));
app.set("views", "./src/views");
app.set('view engine', 'ejs'); // ejs 를 쓰자 <%= %>

app.use(router)
// app.use('/main', main) // main으로 들어오면 main.js를 써
// app.use('/email', email)

app.listen(PORT, function(){
	console.log("Connected on port 3000");
});

