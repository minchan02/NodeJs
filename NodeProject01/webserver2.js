const http = require('http');
 
const hostname = '0.0.0.0';
const port = 1337;
 /*
http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});*/

var server = http.createServer(function(req, res){ // 요청, 응답
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
});
server.listen(port, hostname, function(){
	console.log(`Server running at http://${hostname}:${port}/`);
});