import React from "react";
import { useParams } from "react-router-dom";
import { videos } from "./VideosData";
import MoreVideos from "./MoreVideos";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  GiNotebook
} from "react-icons/gi";
import {MdWatchLater} from "react-icons/md";
import {AiFillPlayCircle} from "react-icons/ai";
const SingleVideoPage = () => {
  const { id } = useParams();
  const Id = parseInt(id, 10);

  const FindVideos = videos.find((video) => video._id === Id);

  return (
    <div>
      <Row>
        <Col sm={8}>
          <div>
            <iframe
              title={FindVideos.title}
              width="560"
              height="315"
              src={FindVideos.src}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div>
            <h5>{FindVideos.title}</h5>
            <button><GiNotebook className="nav-icon" color="blue" /></button>
            <button><MdWatchLater className="nav-icon" color="blue" /></button>
            <button>< AiFillPlayCircle className="nav-icon" color="blue"/></button>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <p>More Videos :</p>
          <MoreVideos category={FindVideos.category}  />
        </Col>
      </Row>
    </div>
  );
};

export default SingleVideoPage;
