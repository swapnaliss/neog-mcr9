import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';
import { categories } from './Categories';
import { useNavigate } from 'react-router-dom';

const CategoryListing = () => {
    const navigate = useNavigate();

  return (
    <div className= "container">
    <Container >
    <h3 >Categories</h3>
    <Row className="justify-content-center" >
      {categories.map((category) => (
        <Col key={category._id} xs={12} sm={6} md={4} lg={3} className="mb-4" >
          <Card className="h-100" onClick = {() => navigate(`/videoList/${category.category}`)}>
            <Card.Img variant="top" src={category.thumbnail} />
            <p>{category.category}</p>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  </div>
  )
}

export default CategoryListing