import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import { videos } from "./VideosData";
import MoreVideos from "./MoreVideos";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GiNotebook } from "react-icons/gi";
import { MdWatchLater } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

const SingleVideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [notes, setNotes] = useState("");

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

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

     // Load notes from local storage on component mount
     const storedNotes = localStorage.getItem(`notes-${Id}`);
     if (storedNotes) {
       setNotes(storedNotes);
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
    [watchLaterList, currentVideo]
  );

  const handleAddToPlaylist = useCallback(() => {
    localStorage.setItem(
      "playlists",
      JSON.stringify([...playlists, currentVideo])
    );
  }, [currentVideo, playlists]);

  const handleAddNote = useCallback((event) => {
    localStorage.setItem(
      `notes-${Id}`,
      JSON.stringify(event.target.value)
    );
  }, [Id]);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

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
              <button ref={ref}>
                <GiNotebook
                  onClick={handleClick}
                  className="nav-icon"
                  color="blue"
                />
              </button>

              <button
                onClick={() =>
                  handleAddToWatchLater(currentVideo)
                }
              >
                <MdWatchLater className="nav-icon" color="blue" />
              </button>
              <button onClick={() => handleAddToPlaylist("Playlist 1")}>
                <AiFillPlayCircle className="nav-icon" color="blue" />
              </button>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <p>More Videos :</p>
          <MoreVideos category={currentVideo?.category} />
        </Col>
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header as="h3">Add New Notes</Popover.Header>
            <Popover.Body>
              <textarea
                value={notes}
                onChange={handleAddNote}
                placeholder="Add notes..."
              />
              <Button>Add Notes</Button>
            </Popover.Body>
          </Popover>
        </Overlay>
      </Row>
    </div>
  );
};

export default SingleVideoPage;
