import React from "react";
import { Card } from "react-bootstrap";
import { videos } from "./VideosData";

const MoreVideos = ({ category }) => {
  const moreVideos = videos.filter((video) => video.category === category);
  console.log(moreVideos);

  return (
    <div>
      {moreVideos.map((video) => (
        <Card className="h-50 moreCard" key={video._id}>
          <Card.Img variant="top" src={video.thumbnail} />
          <p>{video.title}</p>
        </Card>
      ))}
    </div>
  );
};

export default MoreVideos;
