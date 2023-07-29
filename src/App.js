import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import VideoList from './components/VideoList';
import Home from './components/Home';
import SingleVideoPage from './components/SingleVideoPage';

function App() {
  return (
   <div>
    <Router>
    <Container>
      <Routes>
        <Route path="/" element={<  Home />} />
        <Route path="/VideoList/:category" element={<VideoList />} />
        <Route path="/SingleVideoPage/:id" element={<SingleVideoPage/>} />
      </Routes>
    </Container>
  </Router>
   </div>
  );
}

export default App;
