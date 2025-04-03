const express = require('express'); 
//상수 express는 서버모듈을 사용하겠다는 의미
const app = express();
//상수앱은 변수 익스프레스를 대입
const mysql = require("mysql");
//상수 mysql은 mysql모듈을 사용하겠다는 의미
const PORT = process.env.port || 8000;
//상수 포트는 포트넘버를 8000번으로 설정

const db = mysql.createPool({
host:"localhost",
user:"root",
password:"1234",
database:"react",
});


app.get("/", (req, res) =>{
const sqlQuery="INSERT INTO requested (rowno) VALUES (1)";
//console.log("요청함");
db.query(sqlQuery, (err, result) =>{
res.send("성공");
});
});

app.listen(PORT, () =>{
console.log(`running on port ${PORT}`);
//서버가 실행되면 포트넘버를 출력
});