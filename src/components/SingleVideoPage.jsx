import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { videos } from "./VideosData";
import MoreVideos from "./MoreVideos";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GiNotebook } from "react-icons/gi";
import { MdWatchLater } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
const SingleVideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [isAlreadyInWatchList, setisAlreadyInWatchList] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  const { id } = useParams();
  const Id = parseInt(id, 10);

  // const FindVideos = videos.find((video) => video._id === Id);

  useEffect(() => {
    const storedWatchLaterList = localStorage.getItem("watchLaterList");
    if (storedWatchLaterList) {
      setWatchLaterList(JSON.parse(storedWatchLaterList));
    }

    const storedPlaylists = localStorage.getItem("playlists");
    if (storedPlaylists) {
      setPlaylists(JSON.parse(storedPlaylists));
    }

    // Find the current video
    const findVideo = videos.find((video) => video._id === Id);
    if (findVideo) {
      setCurrentVideo(findVideo);
    }
  }, [Id]);

  const handleAddToWatchLater = useCallback(
    (FindVideos) => {
      localStorage.setItem(
        "watchLaterList",
        JSON.stringify([...watchLaterList, currentVideo])
      );
    },
    [watchLaterList, currentVideo, Id]
  );

  const handleAddToPlaylist = useCallback(
    () => {
      localStorage.setItem(
        "playlists",
        JSON.stringify([...playlists, currentVideo])
      );
    },
    [watchLaterList, currentVideo, Id]
  );

  return (
    <div>
      <Row>
        <Col sm={8}>
          <div>
            <iframe
              title={currentVideo?.title}
              width="560"
              height="315"
              src={currentVideo?.src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div>
              <h5>{currentVideo?.title}</h5>
              <button>
                <GiNotebook className="nav-icon" color="blue" />
              </button>
              <button
                onClick={() =>
                  handleAddToWatchLater(currentVideo, isAlreadyInWatchList)
                }
              >
                <MdWatchLater className="nav-icon" color="blue" />
              </button>
              <button  onClick={() => handleAddToPlaylist("Playlist 1")}>
                <AiFillPlayCircle className="nav-icon" color="blue" />
              </button>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <p>More Videos :</p>
          <MoreVideos category={currentVideo?.category} />
        </Col>
      </Row>
    </div>
  );
};

export default SingleVideoPage;
