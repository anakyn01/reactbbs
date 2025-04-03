import {Component} from 'react';
import {Button, Table, Form, Container, Row, Col} from 'react-bootstrap';

class BoardList extends Component{
    render(){//렌더함수
        return(/*프론트 코드를 적는곳 */
        <>
<Container>
<Row>
<Col>
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
        <tr>
            <td className='text-center'>
                <input type="checkbox" className='form-check'/>
            </td>
            <td className='text-center'>1</td>
            <td>게시글1</td>
            <td className='text-center'>hwang</td>
            <td className='text-center'>2025-04-03</td>
        </tr>
    </tbody>
</Table>
<div className="d-flex justify-content-end my-5">
    <div className="btn-group">
        <Button variant="info">글쓰기</Button>
        <Button variant='secondary'>수정하기</Button>
        <Button variant='danger'>삭제하기</Button>
    </div>
</div>
</Col>
</Row>
</Container>      
        </>
        )
    }
}
export default BoardList;