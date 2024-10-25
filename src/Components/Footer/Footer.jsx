import React from 'react'
import "./Footer.css"
import footerimg from "../../Assets/images/footerimg.png"
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";   
import navlogo from "../../Assets/images/dr-sohini-sastri-the-best-astrologer-logo.webp"      
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='top-footer'>
            <img src={footerimg} alt="" />
            <p>
            Dr Sohini Sastri’s accolades include multiple awards for being the best astrologer in India, including the prestigious title in 2018. Her unwavering dedication to her craft and unwavering commitment to client satisfaction continue to propel her towards greater heights of success and popularity.
            </p>
            <h1>Navigate</h1>
        </div>
        <div className='middle-footer'>
            <div className='contact-info'>
                <h1>Contact-info</h1>
                <div className='info1'>
                    <p><FaHeadphonesSimple /></p>
                    <h5>Call +91 9038136660</h5>
                </div>
                <div className='info1'>
                    <p><FaHeadphonesSimple /></p>
                    <h5>Call +91 9038136660</h5>
                </div>
                <div className='info1'>
                    <p><IoMdMailOpen /></p>
                    <h5>sohini.sastri@gmail.com</h5>
                </div>
                <div className='info1'>
                    <p><MdLocationOn /></p>
                    <h5>Kolkata Office: 152, S P Mukherjee Road, Abhishek Point, Kolkata, 700026</h5>
                </div>
            </div>
            <div className='usefull-links'>
                <h1>Usefull Links</h1>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Home</p>
                </div>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>About</p>
                </div>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Gallery</p>
                </div>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>FAQ</p>
                </div>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Contact</p>
                </div>
            </div>
            <div  className='specialities'>
                <h1>Specialities</h1>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Astrology</p>
                </div>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Numerology</p>
                </div>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Vastu consultation</p>
                </div>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Palmistry</p>
                </div>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Tantra</p>
                </div>
            </div>
            <div className='important'>
                <h1>Important</h1>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Best Astrologer in Kolkata</p>
                </div>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Best Astrologer in Delhi</p>
                </div>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Best Astrologer in Mumbai</p>
                </div>
                <div className='touch-icon'>
                    <h5><FaCirclePlay /></h5>
                    <p>Top Astrologer in India</p>
                </div>
            </div>
        </div>
        <div className='end-footer'>
            <div className='end-img'>
                <img src={navlogo} alt="" />
            </div>
            <p>Copyright © 2015-2024 Dr. Sohini Sastri. All rights reserved.</p>
            <div className='footer-icons'>
                <p><FaFacebookF /></p>
                <p><FaInstagram /></p>
                <p><FaTwitter /></p>
                <p><AiOutlineYoutube /></p>
                <p><FaPinterestP /></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
