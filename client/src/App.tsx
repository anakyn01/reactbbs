import React from 'react';
//부트스트랩을 사용하기 위해서 cdn을 부름
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import BoardList from './BoardList';
import Write from './Write';

function App() {
  return (
  <>
  <Container>
<Row>
<Col>
  <BoardList/>
  <div className='mt-3'>
    <Write/>
  </div>
  </Col>
  </Row>
  </Container>
  </> 
  );
}

export default App;
