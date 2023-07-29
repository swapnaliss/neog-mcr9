import React from "react";
import { useParams } from "react-router-dom";
import { videos } from "./VideosData";
import MoreVideos from "./MoreVideos";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SingleVideoPage = () => {
  const { id } = useParams();
  const Id = parseInt(id, 10);
  console.log(id);

  const FindVideos = videos.find((video) => video._id === Id);
  console.log(FindVideos);

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
          </div>
        </Col>
        <Col sm={4}>
          <MoreVideos category={FindVideos.category} />
        </Col>
      </Row>
    </div>
  );
};

export default SingleVideoPage;
