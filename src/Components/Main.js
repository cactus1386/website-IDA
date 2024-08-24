import React from "react";
import "../font/font.css";
import "../CSS/Main.css";
import pic from "../Assets/7.png";
import "https://kit.fontawesome.com/6c2a0de8a3.js";
import { Navbar, Nav } from "react-bootstrap";

function Slider() {
  return (
    <>
      <div class="col-md-12 bgc">
        <div dir="ltr">
          <Navbar
            className="custom-navbar navbar-expand-md shadow navdis rounded fontv"
            expand="md"
            style={{ height: "80px" }}
          >
            <Navbar.Toggle aria-controls="basicNav" />
            <Navbar.Collapse
              id="basicNav"
              className="justify-content-center custom-navbar  rounded"
            >
              <Nav className="nav-links fontv">
                <Nav.Link href="#home">home</Nav.Link>
                <Nav.Link href="#about">about</Nav.Link>
                <Nav.Link href="#skills">skills</Nav.Link>
                <Nav.Link href="#Contactme">contact</Nav.Link>
                <Nav.Link href="https://github.com/ARS6666">github</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div class="container" id="home">
          <div class="pt-3 col-md-12">
            <div className="row bg-light bordrer ">
              <div className="col-md-3">
                <img src={pic} class="pic picbg" />
              </div>
              <div className="col-md-8" dir="ltr">
                <div className="text-container">
                  <span class="fontv text5">Arshia Ghasemzade</span>
                  <br />
                  <div class="d-flex justify-content-center">
                    <span class="text3 fontv">ui designer</span>
                  </div>
                  <div class="d-flex justify-content-center">
                    <span class="text3 fontv">graphic designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" id="about">
          <div class="pt-4 col-md-12 " dir="ltr">
            <div className=" bg-light  bordrer ">
              <div class=" wavebg">
                <div class="border-bottom border-dark p-2">
                  <span class="fontv text3 p-4 ">About</span>
                </div>
                <div class=" ">
                  <h5 class="text-center fontv pt-4 p-3 ws col-md-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis. Lorem
                    ipsum doloaar sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida. Risus commodo viverra
                    maecenas accumsan lacus vel facilisis. Lorem ipsum doloaar
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" id="skills">
          <div class="pt-4 col-md-12 " dir="ltr">
            <div className=" bg-light  bordrer ">
              <div class=" skillbg">
                <div class="p-2 text-center text-dark">
                  <span class="fontv text3 p-4">Skills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" id="Contactme">
          <div class="pt-4 col-md-12 pb-4" dir="ltr">
            <div className=" bg-light  bordrer ">
              <div class=" usbg">
                <div class="border-bottom border-dark p-2 text-center">
                  <span class="fontv text5 p-4 ">Contact</span>
                </div>
                <div class="text-center">
                  <div class="pt-5">
                    <span class="text3 fontv">
                      email : arsprogramming123@gmail.com
                    </span>
                  </div>
                  <div class="pt-4">
                    <span class="text3 fontv">
                      phone number : +98 9915910538
                    </span>
                  </div>
                  <div class="pt-4">
                    <span class="text3 fontv">
                      and you can text me in{" "}
                      <a href="https://t.me/AAARSARS">
                        <i class="fa fa-telegram"></i>
                      </a>{" "}
                      &{" "}
                      <a href="https://wa.me/qr/OEMAPGESEVUNA1" class="hre">
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>.
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className=" text-dark bg-light  fontv border-top">
          <div class="linkb p-2" dir="ltr" style={{ paddingBottom: "0" }}>
            <div class="col-md-12  d-flex justify-content-center">
              ©All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Slider;
