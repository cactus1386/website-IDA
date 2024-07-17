import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Navbar.css';
import img from '../Assets/IDA.png';

const CustomNavbar = () => {
    return (
        <Navbar className="custom-navbar navbar-expand-md shadow" expand="md" style={{ height: '80px' }}>
            <Navbar.Brand href="/ida-ltd">
                <img
                    src={img}
                    height="60"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav className="nav-links fontv">
                    <Nav.Link href="/ida-ltd">خانه</Nav.Link>
                    <Nav.Link href="/ida-ltd/products">محصولات</Nav.Link>
                    <Nav.Link href="/ida-ltd/services">سرویس ها</Nav.Link>
                    <Nav.Link href="/ida-ltd/about">درباره ما</Nav.Link>
                    <Nav.Link href="/ida-ltd/contact">تماس با ما</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
