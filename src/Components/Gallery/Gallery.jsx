import React from 'react'
import "./Gallery.css"
import arrow2 from "../../Assets/images/arrow-devider-2.svg"
import regimg1 from "../../Assets/images/awardsrgcimg1.png"
import regimg2 from "../../Assets/images/awardsregimg2.png"
import regimg3 from "../../Assets/images/awardsregimg3.png"
import regimg4 from "../../Assets/images/awardsregimg4.png"
import celebimg1 from "../../Assets/images/celebimg1.png"
import celebimg2 from "../../Assets/images/celebimg2.png"
import celebimg3 from "../../Assets/images/celebimg3.png"
import celebimg4 from "../../Assets/images/celebimg4.png"
import socialimg1 from "../../Assets/images/socialimg1.png"
import socialimg2 from "../../Assets/images/socialimg2.png"
import socialimg3 from "../../Assets/images/socialimg3.png"
import pujaimg1 from "../../Assets/images/pujaimg1.png"
import pujaimg2 from "../../Assets/images/pujaimg2.png"
import pujaimg3 from "../../Assets/images/pujaimg3.png"
import pujaimg4 from "../../Assets/images/pujaimg4.png"

const Gallery = () => {
  return (
    <>
     <div className='gallery'>
        <section className='gallery-intro'>
            <div className='gallery-h'>
            <h1>GALLERY</h1>
            </div>
        </section>
        <section className='awards-recognitions'>
            <div className='awards-rcog-h'>
                <h1>Awards & Recognitions</h1>
                <img src={arrow2} alt="" className='gallery-arrow'/>
                <p>Received from Horonable Ministers on various occations and from various platforms</p>
            </div>
                <div className='awards-rcogimages'>
                    <img src={regimg1} alt="" className='regimg1'/>
                    <img src={regimg2} alt="" className='regimg1'/>
                    <img src={regimg3} alt="" className='regimg1'/>
                    <img src={regimg4} alt="" className='regimg1'/>
                </div>
                <button className='loadmore-btn'>LOAD MORE</button>
        </section>
        <section className='celeb-association'>
            <div className='awards-rcog-h'>
                <h1>Association with Celebs</h1>
                <img src={arrow2} alt="" className='gallery-arrow'/>
                <p>Attending functions, event and get together with nations most influential people</p>
            </div>
                <div className='awards-rcogimages'>
                    <img src={celebimg1} alt="" className='regimg1'/>
                    <img src={celebimg2} alt="" className='regimg1'/>
                    <img src={celebimg3} alt="" className='regimg1'/>
                    <img src={celebimg4} alt="" className='regimg1'/>
                </div>
                <button className='loadmore-btn'>LOAD MORE</button>
        </section>
        <section className='celeb-association'>
            <div className='awards-rcog-h'>
                <h1>Social Activities</h1>
                <img src={arrow2} alt="" className='gallery-arrow'/>
                <p>In Association with Kolkata Police</p>
            </div>
                <div className='awards-rcogimages'>
                    <img src={socialimg1} alt="" className='regimg1'/>
                    <img src={socialimg2} alt="" className='regimg1'/>
                    <img src={socialimg3} alt="" className='regimg1'/>
                </div>
        </section>
        <section className='puja-bg'>
            <div className='awards-rcog-h'>
                <h1>Puja & Spiritual Anushthan</h1>
                <img src={arrow2} alt="" className='gallery-arrow'/>
                <div className='stars-h'>
                    
                </div>
            </div>
                <div className='awards-rcogimages'>
                    <img src={pujaimg1} alt="" className='regimg1'/>
                    <img src={pujaimg2} alt="" className='regimg1'/>
                    <img src={pujaimg3} alt="" className='regimg1'/>
                    <img src={pujaimg4} alt="" className='regimg1'/>
                </div>
                <button className='loadmore-btn'>LOAD MORE</button>
        </section>
        </div> 
    </>
  )
}

export default Gallery
