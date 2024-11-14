import React from 'react'
import "./About.css"
import aboutpage from "../../Assets/images/about-cover-subject-img1-1.webp"
import arch from '../../Assets/images/arch.png'
import starsparkle from '../../Assets/images/aboutsparkle.png'
import service1 from "../../Assets/images/service1.png"
import service2 from "../../Assets/images/service-numero.webp"
import service3 from "../../Assets/images/service-palmistry.webp"
import service4 from "../../Assets/images/service-tantra.webp"
import arrow from "../../Assets/images/arrow-devider.svg"
import meetbest from "../../Assets/images/meetbest.png"
import design from '../../Assets/images/design.png'
import yearlyawards from "../../Assets/images/yearlyawards.png"
import prologo from "../../Assets/images/pro-logo.png"
import Swiperabout from "../../Components/Swiperabout/Swiperabout"

const About = () => {
  return (
    <>
     <div className='about'>
        <section className='about-intro-wholediv'>
            <div className='aboutpage-image'>
              <img src={aboutpage} alt="" className='aboutimg' />
              <img src={arch} alt="" className='archimage'/>
              <img src={starsparkle} alt="" className='starsparkle'/>
            </div>
            <div className='about-inro-content'>
                <p>Home/ About</p>
                <h1>Dr. Sohini Sastri</h1>
                <h2>The Best Astrologer & Palmist in India</h2>
                <p>Dr. Sohini Sastri, renowned as the best astrologer in India, is a celebrated figure in the world of astrology. Based in Kolkata, she is also recognized as the best celebrity astrologer in the country. With a profound knowledge of Vedic astrology, Dr Sastri has guided countless individuals, including high-profile celebrities, towards a path of success and fulfilment.</p>
                <p>Dr. Sastri’s academic journey is as illustrious as her career. She holds a Doctorate in Astrology, reflecting her deep dedication and expertise in the field. Her exceptional contributions to the field were further acknowledged when she was awarded an honorary DLitt in Astrology by the National American University, USA. In recognition of her unparalleled expertise, the Astrological Association of Great Britain honoured her with the title of “Best Astrologer in the World.”</p>
                <p>Beyond her professional achievements, Dr. Sohini Sastri is a compassionate life coach and philanthropist. She has dedicated her life to helping others navigate challenges and achieve their dreams through the ancient wisdom of astrology. Her deep insights and holistic approach have made her a trusted advisor to many, solidifying her reputation as the leading astrologer in Kolkata and India.</p>
                <h5>Her insightful consultations have received widespread recognition nationwide, profoundly impacting the lives of those who turn to her for guidance.</h5>
                <button className='achievements-btn'>ACHIEVEMENTS</button>
            </div>
        </section>
        <section className='servicetypes'>
          <div className='types-images-flex'>
            <div className='services-type1'>
              <img src={service1} alt="" className='about-serviceimg'/>
              <img src={arrow} alt="" className='about-servicearrow'/>
              <h2>Astrology</h2>
            </div>
            <div className='services-type1'>
              <img src={service2} alt="" className='about-serviceimg'/>
              <img src={arrow} alt="" className='about-servicearrow'/>
              <h2>Numerology</h2>
            </div>
            <div className='services-type1'>
              <img src={service3} alt="" className='about-serviceimg'/>
              <img src={arrow} alt="" className='about-servicearrow'/>
              <h2>Palmistry</h2>
            </div>
            <div className='services-type1'>
              <img src={service4} alt="" className='about-serviceimg'/>
              <img src={arrow} alt="" className='about-servicearrow'/>
              <h2>Tantra</h2>
            </div>
          </div>
          <div className='servicetypes-content'>
            <div className='service-content1'>
              <p>Dr. Sohini Sastri’s expertise transcends the boundaries of Vedic astrology, covering an extensive array of fields that solidify her position as a leading astrologer to consult. Her skills encompass vital areas such as career advice, marriage counseling, business guidance, educational planning, legal issue resolution, love relationship consultations, Vaastu concerns, and issues related to partnerships. This wide-ranging knowledge allows her to provide thorough and comprehensive astrological services to her clients. </p>
            </div>
            <div className='service-content2'>
              <p>As a recognized member of several esteemed organizations, including the Asian Astrologer of Congress, the Astrological Research Project, and the Astro Medical Research Center, Dr. Sastri’s significant contributions to the field have received broad recognition. Her work has been widely published in various reputable magazines, underscoring her authority and impact in the realm of astrology. Dr. Sastri’s commitment and proficiency have established her as a key figure in the astrological community.</p>
            </div>
          </div>
        </section>
        <section className='meet-best-wholediv'>
            <div className='meet-best-image'>
              <img src={meetbest} alt="" className='meetbest-img'/>
            </div>
            <div className='meetbest-content'>
                <h2>Meet the Best Astrologer:</h2>
                <h1>Dr. Sohini Sastri</h1>
                <p>An Award-Winning Vedic and KP Astrologer</p>
                <p>Two-time winner of the esteemed President’s Award, Dr. Sohini Sastri is a beacon of inspiration for many within her sphere and beyond. Her accomplishments in Vedic astrology and its related fields are extraordinary, especially in a profession that has historically favored men. Despite the obstacles that women frequently encounter in this arena, Dr. Sastri has distinguished herself as a prominent figure, overcoming barriers and establishing new benchmarks for excellence.</p>
                <p>A significant reason for her widespread acclaim and respect is her exceptional ability to communicate. She strongly advocates for the importance of listening, viewing it as an essential skill that everyone should endeavor to refine. Proficient listening not only aids in grasping others’ viewpoints but also cultivates deeper relationships and clearer interactions. Dr. Sastri’s commitment to enhancing her listening abilities has undeniably contributed to her achievements and her ability to engage with clients meaningfully. This has earned her the distinction of being the Best Astrologer in India.</p>
            </div>
        </section>
        <section className='additional-info'>
          <div className='additional-info-wholediv'>
            <img src={design} alt="" className='design'/>
            <div className='add-info-content'>
              <div className='add-info-content1'>
                <p>In addition to her expertise in Vedic Astrology, Dr. Sohini Sastri specializes in KP Astrology, gaining recognition for her innovative and highly precise forecasts. Her methodology merges the foundational principles of Vedic Astrology with contemporary KP Astrology techniques, resulting in an impressive accuracy rate of 99%. This distinctive fusion of approaches sets her apart from her contemporaries and has garnered her a dedicated following.</p>
              </div>
              <div className='add-info-content2'>
                <p>Moreover, her proficiency extends to palmistry, where she utilizes a distinctive method for analyzing Thumb Chakra, Finger Chakra, and Palm Chakra readings. This holistic approach to palmistry enriches the depth and accuracy of her insights, further solidifying her reputation as one of India’s most esteemed astrologers. Her diverse skill set and unwavering dedication to her profession continue to inspire and guide numerous individuals in search of clarity and direction in their lives.</p>
              </div>
            </div>
            <button className='book-appnmt-btn'>BOOK-APPOINTMENT</button>
          </div>
        </section>
        <section className='yearly-awards'>
          <div className='yearly-awards-head'>
            <p>Achievements & Recognitions of the</p>
            <h1>Best Astrologer in India</h1>
          </div>
          <img src={yearlyawards} alt="" className='yearlyawards-img' />
          <button className='view-btn'>VIEW ALL</button>
        </section>

  <div className='abttop12'>
  <div className='Aboutheader12'>
    <div className='aboutinner12'>
      <div className='ableft12'>
      </div>
     
    </div>
  </div>
  <div className='Aboutheader13'>
      <div className='aboutinner13'>
        <div className='ableft1234'>
         <div className='ableft124'>
         <Swiperabout/>
        </div>
      </div>
      <div className='abright1234'>
      <div className='abright12'>
        <img src={prologo} alt="" className='pro-logo'/>
      </div>
        <h1>The Problem Solver</h1>
        <p>Beyond astrological predictions, Dr. Sohini Sastri, the best astrologer in Mumbai, has facilitated miraculous transformations through spiritual interventions, effectively removing negative energies and providing profound relief to her clients. Her compassionate counseling sessions empower clients to navigate through life’s challenges with optimism and resilience.</p>
        <h4>With a vast clientele spanning the nation, Dr. Sohini Sastri boasts an unparalleled satisfaction rate, with 99.99% of her clients returning for her trusted guidance. Renowned for her honesty and integrity, she has become the go-to astrologer for Bollywood celebrities and common individuals alike.</h4>
        <button className='call-btn'>BOOK A CALL</button>        
      </div>
    </div>
  </div>
  </div>

  <div className='abttop'>
  <div className='Aboutheader'>
    <div className='aboutinner'>
      <div className='ableft'>
      </div>
      <div className='abright'>
        <img src={prologo} alt="" className='pro-logo'/>
      </div>
    </div>
  </div>
  <div className='Aboutheader1'>
      <div className='aboutinner1'>
        <div className='ableft123'>
         <div className='ableft12'>
         <Swiperabout/>
        </div>
      </div>
      <div className='abright123'>
        <h1>The Problem Solver</h1>
        <p>Beyond astrological predictions, Dr. Sohini Sastri, the best astrologer in Mumbai, has facilitated miraculous transformations through spiritual interventions, effectively removing negative energies and providing profound relief to her clients. Her compassionate counseling sessions empower clients to navigate through life’s challenges with optimism and resilience.</p>
        <h4>With a vast clientele spanning the nation, Dr. Sohini Sastri boasts an unparalleled satisfaction rate, with 99.99% of her clients returning for her trusted guidance. Renowned for her honesty and integrity, she has become the go-to astrologer for Bollywood celebrities and common individuals alike.</h4>
        <button className='call-btn'>BOOK A CALL</button>        
      </div>
    </div>
  </div>
  </div>
        {/* <section className='problem-solver-wholediv'>
        <div className='ch'>
        <div className='set'>
        </div>
         <div className='pp'>
         <div className='problem-solving-content1'>
          <div className='problem-solver-logo'>
          </div>
          </div>
          <div className='problem-solving-content2'>

            <div className='problem-solver-para'>
              <h1>The Problem Solver</h1>
              <p>Beyond astrological predictions, Dr. Sohini Sastri, the best astrologer in Mumbai, has facilitated miraculous transformations through spiritual interventions, effectively removing negative energies and providing profound relief to her clients. Her compassionate counseling sessions empower clients to navigate through life’s challenges with optimism and resilience.</p>
              <h4>With a vast clientele spanning the nation, Dr. Sohini Sastri boasts an unparalleled satisfaction rate, with 99.99% of her clients returning for her trusted guidance. Renowned for her honesty and integrity, she has become the go-to astrologer for Bollywood celebrities and common individuals alike.</h4>
              <button className='call-btn'>BOOK A CALL</button>
            </div>
          </div>
         </div>
        </div>
        </section> */}
        </div> 
    </>
  )
}

export default About
