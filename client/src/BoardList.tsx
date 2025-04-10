/*
Axios:
javascript에서 http요청을 수행하기 위한 라이브러리
특히 react와 함께 사용되고 서버와 데이터를 주고받기 위해 API호출을 할때 유용함
npm install axios
*/
import Axios from "axios";

import {Component} from 'react';
import {Button, Table, Form, Container, Row, Col} from 'react-bootstrap';



const Board =({//보드라는 컴포넌트 인데 id, title, registerId, registerdate라는 4개의 pops를 받아 
    //이를 html의 테이블에 <tr>요소로 출력합니다
//Props는 React컴포넌트에 전달되는 인수입니다 
    id,title,registerId,registerDate,
}:{id:number; title:string; registerId:string; registerDate:string;}) =>{
    //props에  type을 명시
    return(
 <tr>
    <td>
        <input type="checkbox" className="form-check"/>
    </td>
    <td>{id}</td><td>{title}</td><td>{registerId}</td><td>{registerDate}</td>
 </tr>       
    )
}
/*
Hook
- useState : 컴포넌트에 상태[일반적으로 어플리케이션에서 추적해야 하는 데이터나 속성을 의미합니다]를 추적합니다
*/
/*const submitTest = () =>{
    Axios.get("http://localhost:8000/",{}).then(() =>{
alert("등록 완료!");
    });
}*/

class BoardList extends Component{
state = {
    boardList:[],//보드리스트라는 상태를 정의하고 초기화로 빈 배열을 설정함
};

getList = () => {
    //get요청 메서드 두번째 인자 {} GET요청에 사용될 옵션을 나타내는데 이경우에는 빈 개체로
    //추가적인 설정 없이 기본 get요청이 이루어 집니다
    Axios.get("http://localhost:8000/list", {}).then((res) => {
        //GET요청이 성공하면 .then으로 콜백이 실행됩니다 이 콜백함수는 res라는 인자를 받는데
        //이는 서버에서 반환된 응답 객체 입니다
        const{data} = res;//응답객체 res의 data속성을 구조분해 할당합니다
        this.setState({//컴포넌트에 상태를 업데이트하는 메서드
            boardList:data,//여기서 boardList는 상태값을 data로 설정합니다
        });//이작업으로 보드리스트 상태가 업데이트 되면 react는 상태변경을 감지하고 관련된 컴포넌트를 
        //리렌더링 합니다
    }).catch((e) =>{//오류가 생기면 실행하는 오류객체
console.error(e);
    });
}
//Axios를 사용하여 서버에서 데이터를 가져오고 가져온 데이터를 컴포넌트의 상태(boardlist) 에 저장하는 역활을 합니다
//이함수는 리액트에 클래스형 컴포넌트에 this.setState를 호출하는 방식으로 상태를 관리하고 있습니다
//프로젝트 생성 수정 소멸 삭제를 말한다 생명주기 라이프사이클
componentDidMount() {//라이프 사이클 매서드중 하나 컴포넌트가 처음 렌더링 되고 
    //DOM에 마운트된후에 호출 이시점에서 네트워크 요청을 
    // 보내거나 타이머를 설정하는 등의 작업을 할수 있다
  //스프링 라이프사이클 1)빈 생성 2)의존성 주입 3)초기화 4)빈사용 5)소멸  
    this.getList();
}

    render(){//렌더함수

        //구조 분해 할당 객체에서 속성을 추출 {boardList}
        //boardList:any 구조분해되는 값의 유형을 지정
        //this.state는 컴포넌트의 상태 객체를 나타냅니다
        const {boardList}:{boardList:any} = this.state;
//boardList구성요소의 상태에서 추출하여 로컬변수에 할당 any는 모든 데이터 유형이 될수 있음을 의미
        return(/*프론트 코드를 적는곳 */
        <>

<h1 className='my-5'>BBS</h1>
<Table striped bordered hover>
    <colgroup>
    <col style={{width: '5%'}}/>
    <col style={{width: '5%'}}/>
    <col style={{width: '65%'}}/>
    <col style={{width: '5%'}}/>
    <col style={{width: '10%'}}/>
    </colgroup>
    <thead>
        <tr>
            <th className='text-center'>
                선택
            </th>
            <th className='text-center'>
                번호
            </th>
            <th className='text-center'>
                제목
            </th>
            <th className='text-center'>
                작성자
            </th>
            <th className='text-center'>
                작성일
            </th>
        </tr>
    </thead>
    <tbody>
      {/*jsx 자바스크립트xml */}
      {//map()함수 이배열을 순회하여 각 항목을 처리 v:any 는 배열의 각 항목을 v라는 변수로 받아들입니다
        boardList.map((v:any)=>{
            return(
//jsx보드 컴포넌트 아래에서쓴 4개의 props를 받아서 v객체의 속성 값으로 설정됩니다
<Board
id={v.BOARD_ID}
title={v.BOARD_TITLE}
registerId={v.REGISTER_ID}
registerDate={v.REGISTER_DATE}
key={v.BOARD_ID}//key는 각 항목을 고유하게 식별하기 위한 속성
/>
            );
        })
      }
    </tbody>
</Table>
<div className="d-flex justify-content-end my-5">
    <div className="btn-group">
        <Button variant="info">글쓰기</Button>
        <Button variant='secondary'>수정하기</Button>
        <Button variant='danger'>삭제하기</Button>
    </div>
</div> 
        </>
        )
    }
}
export default BoardList;