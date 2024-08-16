import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Navbar.css";
import img from "../Assets/IDA.png";

const CustomNavbar = () => {
  return (
    <Navbar
      className="custom-navbar navbar-expand-md shadow navdis"
      expand="md"
      style={{ height: "80px" }}
    >
      <Navbar.Brand href="/">
        <img src={img} height="60" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basicNav" />
      <Navbar.Collapse
        id="basicNav"
        className="justify-content-center custom-navbar  rounded"
      >
        <Nav className="nav-links fontv">
          <Nav.Link href="/">خانه</Nav.Link>
          <Nav.Link href="/products">محصولات</Nav.Link>
          <Nav.Link href="/services">سرویس ها</Nav.Link>
          <Nav.Link href="/about">درباره ما</Nav.Link>
          <Nav.Link href="/contact">تماس با ما</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
