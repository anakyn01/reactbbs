/*
Cross Origin Resource sharing(cors)
현재 웹페이지 도메인에서 다른 웹페이지 도메인으로 리소스가 요청되는 경우를 말한다
예를 들어 http://web.co.kr 에서 API서버 URL인 http://api.com도메인으로 API를 요청하면 
http형태로 요청이 되므로 브라우저 자체에서 보안상이유로
cors를 제한하게 되는 현상을 말합니다
npm i cors
*/

const express = require('express'); 
//상수 express는 서버모듈을 사용하겠다는 의미
const cors = require("cors");//출처 허용옵션을 사용하겠다는 의미
const app = express();
//상수앱은 변수 익스프레스를 대입
const mysql = require("mysql");
//상수 mysql은 mysql모듈을 사용하겠다는 의미
const PORT = process.env.port || 8000;
//상수 포트는 포트넘버를 8000번으로 설정
const bodyParser = require("body-parser");

let corsOptions = {
    origin:"http://localhost:3000",//특정 허용옵션
    credential:true,//쿠키 인증 헤더등을 포함할수 있도록 허용
}
//이러한 설정은 nodejs에서 cors미들웨어[통신지원,데이터베이스 연결,보안,트랜잭션관리,
// 로드 밸런싱{부하를 균등하게 나누어 시스템 성능을 최적화 합니다}]를 사용할때 지정한다
app.use(cors(corsOptions));//서로다른 출처간에 리소스를 공유할수 있도록 하는 보안
app.use(express.json());//json데이터를 자동으로 파싱해서 req.body에 할당해주는 미들웨어
app.use(bodyParser.urlencoded({extended:true}));
//요청본문을 파싱하는 미들웨어로서 HTML폼 데이터를 파싱하는데 사용합니다
const db = mysql.createPool({
host:"localhost",
user:"root",
password:"1234",
database:"react",
});

app.get("/list", (req, res) =>{
const sqlQuery=
"select BOARD_ID, BOARD_TITLE, REGISTER_ID, date_format(REGISTER_DATE, '%Y-%m-%d') as REGISTER_DATE from BOARD;";
db.query(sqlQuery,(err, result) =>{
    res.send(result);
});    
});


/*app.get("/", (req, res) =>{
const sqlQuery="INSERT INTO requested (rowno) VALUES (1)";
//console.log("요청함");
db.query(sqlQuery, (err, result) =>{
res.send("성공");
});
});*/

app.listen(PORT, () =>{
console.log(`running on port ${PORT}`);
//서버가 실행되면 포트넘버를 출력
});