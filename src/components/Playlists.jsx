import React,{useState, useEffect} from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    const storedPlaylists = localStorage.getItem("playlists");
    if (storedPlaylists) {
      setPlaylists(JSON.parse(storedPlaylists));
    }
  }, [setPlaylists]);

  console.log(playlists)
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          {playlists.map((videos) => (
            <Col key={videos._id} className="mb-4">
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
  );
};

export default Playlists;
