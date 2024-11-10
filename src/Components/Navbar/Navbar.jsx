import React from 'react'
import "./Navbar.css"
import logo from "../../Assets/images/dr-sohini-sastri-the-best-astrologer-logo.webp"
import { GiFlatStar } from "react-icons/gi";
import { IoMdCall } from "react-icons/io";
import circle from "../../Assets/images/circleimg.png"
import { useState } from 'react';
import { MdMenuOpen } from "react-icons/md";
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [number, setnumber] = useState(false)
  const [close, setclose] = useState(false)

  const getnumber = () => {
    setnumber(!number)
  }
  function changeslide(params) {
  setclose(!close)
}
  return (
    <>
      <div className="nav">
        <div className="navbar">
          <div className="nav-logo">
            <img src={logo} alt=""/>
          </div>
          <div className={close?"navlist1":"nav-list"}>
            <div className="nav-h">
              <Link to='/'>
                <h4 className='home-i'>Home</h4>
                <p><GiFlatStar /></p>
              </Link>
          </div>
            <div className="nav-h">
              <Link to='/about'>
                <h4>About</h4>
                <p><GiFlatStar /></p>
              </Link>
              
            </div>

            <div className="nav-h2">
              <div className='nav-h'>
                <h4 className='service-drop'>Services</h4>
                <p><GiFlatStar /></p>
              </div>
              {/* <div class="dropdown-content">
                <h5>Astrology</h5>
                <h5> Numerology</h5>
                <h5>Vastu consultation</h5>
                <h5>Palmistry</h5>
                <h5>Tantra</h5>
              </div> */}
          </div>

            <div className="nav-h">
              <Link to='/gallery'>   
              <h4>Gallery</h4>
              <p><GiFlatStar /></p>
              </Link>
          </div>

            <div className="nav-h">
              <h4>Blog</h4>
              <p><GiFlatStar /></p>
          </div>

            <div className="nav-h">
              <Link to='/contact'>
                <h4>Contact</h4>
                <p><GiFlatStar /></p>
              </Link> 
          </div>
          </div>
          <div className='nav-icons'>
            <p className='menu-icon' onClick={changeslide}> <MdMenuOpen /></p>
            <div className='icon1' onClick={getnumber}>
              <img src={circle} alt="" />
              <p><IoMdCall /></p>
            </div>
            { number && 
              <div className='phn-number'>
              <p>Call:  9163 532 538</p>
            </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar
