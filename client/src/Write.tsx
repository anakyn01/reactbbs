import {Component} from "react";//java spring에 네임스페이스와 동일함
import {Form, Button} from "react-bootstrap";

class Write extends Component{//리액트에는 함수형 컴포넌트와 클래스형 컴포넌트 2개 가 존재함
    render(){//렌더함수 자바에서 특별한 지정한 없는 한 프린트 스레드 public static void main()..와 같다
        return(
<>
<Form>
    <Form.Group className="mb-3" controlId="">
        <Form.Label>제목</Form.Label>
        <Form.Control type="email" placeholder="이메일을 입력하세요"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="">
        <Form.Label>내용</Form.Label>
        <Form.Control as="textarea"/>
    </Form.Group>
    <div className="d-flex justify-content-end my-5">
<div className="btn-group">
<Button variant="info">작성완료</Button>
<Button variant="secondary">취소</Button>
</div>
    </div>
</Form>
</>
        )
    }


}
export default Write;