import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Sidebar from './Sidebar';
import CategoryListing from './CategoryListing';

const Home = () => {
    return (
        <>        
        <div>
        <h1 className="app-name" style={{ textAlign: 'center', margin: '20px 0' }}>
          Video Library
        </h1>
      </div>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <Sidebar />
          </Col>
          <Col xs={9}>
           <CategoryListing/>
          </Col>
         
        </Row>
      </Container>
      </>

    
  )
}

export default Home