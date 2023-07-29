import React from "react";
import { Container, Row, Col, Card} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { videos } from "./VideosData";
import { useNavigate } from 'react-router-dom';

const VideoList = () => {
    const navigate = useNavigate();

  const { category } = useParams();
  console.log(category);

  const videosData = videos.filter((video) => video.category === category);
  console.log(videosData);
  return (
    <div>
      <div>
        <Container>
          <h3>Categories</h3>
          <Row className="justify-content-center">
            {videosData.map((videos) => (
              <Col
                key={videos._id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <Card
                  className="h-100"
                  onClick={() => navigate(`/videoList/${category.category}`)}
                >
                  <Card.Img variant="top" src={videos.thumbnail} />
                  <p>{videos.category}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default VideoList;
