import React from "react";
import { Nav } from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiFillPlayCircle,
  AiFillClockCircle,
} from "react-icons/ai";

const Sidebar = () => {

  return (
    <div className="container" >
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/">
          <AiOutlineHome className="nav-icon" color="blue" />
          <span style={{ color: "blue" }}>Home</span>
        </Nav.Link>
        <Nav.Link href="/explore" >
          <AiOutlineSearch className="nav-icon" />
          Explore
        </Nav.Link>
        <Nav.Link href="/playlist">
          <AiFillPlayCircle className="nav-icon" />
          Plalists
        </Nav.Link>
        <Nav.Link href="/watchLater">
          <AiFillClockCircle className="nav-icon" />
          Watch Later
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
