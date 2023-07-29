import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import VideoList from "./components/VideoList";
import Home from "./components/Home";
import SingleVideoPage from "./components/SingleVideoPage";
import Sidebar from "./components/Sidebar";
import Explore from "./components/Explore";
import Playlists from './components/Playlists';
import WatchLater from './components/WatchLater';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Row>
          <Col xs={12} md={3} lg={2} className="sidebar-col">
            <Sidebar />
          </Col>
          <Col xs={12} md={9} lg={10} className="video-list-col">
            <Container fluid>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/VideoList/:category" element={<VideoList />} />
                <Route
                  path="/SingleVideoPage/:id"
                  element={<SingleVideoPage />}
                />
                <Route path="/explore" element={<Explore />} />
                <Route path="/playlist" element={<Playlists />} />
                <Route path="/watchLater" element={<WatchLater />} />
              </Routes>
            </Container>
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;
