var fs = require('fs');

//Sync(동기) : 만약 readfile이 10분이 걸린다면 10분동안 가만히 있다가 다음줄로 이동
console.log(1);
var data = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(data);

//Async(비동기) : readfile이 읽는 동안 다음꺼 먼저 수행
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
	console.log(3);
	console.log(data);
})
console.log(4);