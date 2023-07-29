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
            <Row className="justify-content-center">
            {videosData.map((videos) => (
              <Col
                key={videos._id}
                className="mb-4"
              >
                <Card
                  className="h-100"
                  onClick={() => navigate(`/SingleVideoPage/${videos._id}`)}
                >
                  <Card.Img variant="top" src={videos.thumbnail} />
                  <p>{videos.title}</p>
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
