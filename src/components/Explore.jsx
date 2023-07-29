import React, { useState } from "react";
import { videos } from "./VideosData";
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <h3>Explore</h3>
      {/* Search bar */}
      <Form.Group controlId="searchForm">
        <Form.Control
          type="text"
          placeholder="Search by title or Category.."
          value={searchQuery}
          onChange={handleSearchChange}
          
        />
      </Form.Group>

      <Row className="justify-content-center">
        {filteredVideos.map((video) => (
          <Col key={video._id} xs={12} sm={6} md={4} lg={3} className="mb-4 mt-5">
            <Card className="h-100" mt-10>
              <Card.Img variant="top" src={video.thumbnail} />
              <p>{video.category}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Explore;
