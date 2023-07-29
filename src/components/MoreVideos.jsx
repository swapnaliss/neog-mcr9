import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { videos } from "./VideosData";
import { useNavigate } from 'react-router-dom';

const MoreVideos = ({ category }) => {
  const moreVideos = videos.filter((video) => video.category === category);
  const navigate = useNavigate();

  return (
    <div>
      {moreVideos.map((video) => (
        <Card key={video._id} onClick={() => navigate(`/SingleVideoPage/${video._id}`)}>
          <Row >
            <Col md={4} >
              <Card.Img variant="top" src={video.thumbnail} />
            </Col>
            <Col md={8}>
              <Card.Body>
                <p>{video.title}</p>
                <p>Creator: {video.creator}</p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default MoreVideos;
