import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container ,Row, Col} from "react-bootstrap";
import VideoList from "./components/VideoList";
import Home from "./components/Home";
import SingleVideoPage from "./components/SingleVideoPage";
import Sidebar from "./components/Sidebar";
import Explore from "./components/Explore";
import Playlists from './components/Playlists';
import WatchLater from './components/WatchLater';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col xs={9}>
          <Router>
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/VideoList/:category" element={<VideoList />} />
                <Route
                  path="/SingleVideoPage/:id"
                  element={<SingleVideoPage />}
                />
                <Route path="/explore" element={<Explore />} />
                <Route path="/playlist" element={<Playlists/>} />
                <Route path="/watchLater" element={<WatchLater />} />
                
              </Routes>
            </Container>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
