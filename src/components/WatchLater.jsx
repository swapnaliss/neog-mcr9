import React,{useState, useEffect} from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const WatchLater = () => {
  const [watchLaterList, setWatchLaterList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWatchLaterList = localStorage.getItem("watchLaterList");
    if (storedWatchLaterList) {
      setWatchLaterList(JSON.parse(storedWatchLaterList));
    }
  }, [setWatchLaterList]);

  return (
    <div>
       <Container>
            <Row className="justify-content-center">
            {watchLaterList.map((videos) => (
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
  )
}

export default WatchLater
