import React from 'react'
import "./Home.css"
import { BsSuitDiamondFill } from "react-icons/bs";
import profile from "../../Assets/images/homeprofile.png"
import chakra from "../../Assets/images/chakra.png"
import { TbNorthStar } from "react-icons/tb";
import award1 from "../../Assets/images/top-rated-astrologer-kolkata.svg"
import award2 from "../../Assets/images/top-rated-astrologer-mumbai.svg"
import award3 from "../../Assets/images/top-rated-astrologer-delhi.svg"
import Credentials from '../Credentials/Credentials';
import Servicescart from '../../Reusable/Servicescart';
import Services from '../Services/Services';
import arrow2 from "../../Assets/images/arrow-devider-2.svg"
import stage1 from "../../Assets/images/home-award-1_0.webp"
import stage2 from "../../Assets/images/home-award-3.webp"
import stage3 from "../../Assets/images/home-award-2.webp"
import eye from "../../Assets/images/devin-eye.webp"
import stage4 from "../../Assets/images/home-award-4.webp"
import { GiTwirlyFlower } from "react-icons/gi";
import leadingimg from "../../Assets/images/leadingimg.png"
import best1 from "../../Assets/images/home-cover-subject-img6.1.webp"
import element1 from "../../Assets/images/element-1.webp"
import element2 from "../../Assets/images/element-2.webp"
import element3 from "../../Assets/images/element-3.webp"
import cloud from "../../Assets/images/cloud.png"
import star from "../../Assets/images/moon.png"
import orange from "../../Assets/images/orangeplanet.png"
import blackmoon from "../../Assets/images/blackmoon.png"
import { BsStars } from "react-icons/bs";
import cloth from "../../Assets/images/cloth.png"
import "animate.css"
import diamond from "../../Assets/images/roll-diamond.png"
import bgimage from "../../Assets/images/bg-image.png"


const Home = () => {

  return (
    <>
     <div className='home'>

        <section className='home-div'>
            <div className='intro'>
                <h1 >The most trusted name in the field of Astrology in India</h1>
                <p>Unlock the wisdom of the stars and gain deeper insights into your life's path.  With a blend of traditional techniques and modern insights, I offer personalized astrological consultations designed to bring alignment and balance into your life. Let the cosmos illuminate your way!</p>
                <h4>Dr. Sohini Sastri</h4>
                <div className='btn-div'>
                    <div className='book-btn'>
                        <button><p><BsSuitDiamondFill /></p>
                        Book Appointment</button>
                    </div>
                    <div className='call' >
                        <p>Call: 9163 532 538</p>
                    </div>
                </div>
            </div>
            <div className='position-img'>
                <div className='profile-img'>
                    <img src={profile} alt="" />
                    <img src={chakra} alt="" className='chakra' />
                </div>
            </div>  
        </section>
        <section className='highlights-container'>
            <div className='highlights'>
                    <p>Top rated astro palmist</p>
                    <p>Two times president’s award winner</p>
                    <p>Reliable tantra remedy</p>
                    <p>The best astrologer in Kolkata</p>
                    <p>The best astrologer in India</p>
                    <p>Vedic Astrologer</p> 
            </div>
        </section>
        <section className='award-div'>
            <img src={award1} alt="" />
            <img src={award2} alt="" />
            <img src={award3} alt="" />
        </section>

        <Credentials/>
        <Services />

        <section className='why-best animate__animated animate__slideInUp'>
            <h1>Why Dr. Sohini Sastri</h1>
            <h3>Because she is the best Astrologer in India</h3>
            <div className='arrow-img'>
                <img src={arrow2} alt="" />
            </div>
            <div className='para-service'>
                <h5>Get personalized Astrological guidance. Navigate life’s journey with cosmic wisdom tailored to you by the best astrologer in India.</h5>
                <p>Dr. Sohini Sastri firmly believes that, akin to physical health, every individual possesses spiritual well-being to nurture. Spiritual vitality plays a crucial role in shaping one’s karma, overall well-being, and connection with the universe. According to her, Astrology is not just fortune-telling; it is the means of course correction, aligning planetary energies to foster personal growth and upliftment.</p>
                <p>Dr. Sastri advises her clients to prioritize their life’s most significant aspects and address them with potent remedies, whether through astrology, numerology, or tantric practices tailored to their needs. Her teachings underscore the importance of focusing on one’s spiritual health alongside physical wellness for a harmonious and fulfilling life journey.</p>
                <div className='book-btn'>
                        <button><p><BsSuitDiamondFill /></p>
                        Book Appointment</button>
                    </div>
            </div>
        </section>    
            <section className='stage-awards-bg'>
                    <div className='stage-awards'>
                        <div className='stage-award1'>
                            <div className='stage-img1'>
                                <img src={stage1} alt="" />
                            </div>
                            <div className='stage1-content'>
                                <h3>Courtesy Visit to</h3>
                                <p className='change-color'>Smt. Droupadi Murmu</p>
                                <p>Hon. President of India</p>
                            </div>
                        </div>
                        <div className='stage-award1'>
                            <div className='stage-img1'>
                                <img src={stage2} alt="" />
                            </div>
                            <div className='stage1-content'>
                                <h3>Champion of Change, 2019</h3>
                                <p className='change-color'>Late Shri Pranab Mukherjee</p>
                                <p>13th President of India</p>
                            </div>
                        </div>
                        <div className='stage-award1'>
                            <div className='stage-img1'>
                                <img src={stage3} alt="" />
                            </div>
                            <div className='stage1-content'>
                                <h3>Champion of Change, 2021</h3>
                                <p className='change-color'>Ramnath Kobind</p>
                                <p>14th President of Indiaa</p>
                            </div>
                        </div>
                        <div className='stage-award1'>
                            <div className='stage-img1'>
                                <img src={stage4} alt="" />
                            </div>
                            <div className='stage1-content'>
                                <h3>Pride of Nation, 2022</h3>
                                <p className='change-color'>Shri Nitin Gadkari</p>
                                <p>Union Transport Minister</p>
                            </div>
                        </div>
                    </div>
            </section>
            <section className='reviews animate__animated animate__flipInX'>
                <div className='review-img'>
                    <img src={eye} alt="" />
                </div>
                <h4>Some of our Best <span>Google </span>Reviews</h4>
                <h5>Sohini Sastri Madam is God for me. Her prediction and remedies are too good. After taking remedies I got a job within 3 months. She is the Best Astrologer in India I must say.</h5>
                <h6>Abhishek Chakraborty</h6>
                <div className='review-rating'>
                    <p><GiTwirlyFlower /></p>
                    <p><GiTwirlyFlower /></p>
                    <p><GiTwirlyFlower /></p>
                    <p><GiTwirlyFlower /></p>
                    <p><GiTwirlyFlower /></p>
                </div>
        </section>
        <section className='about-leading animate__animated animate__zoomIn'>
            <div className='leading-wholediv'>
                <img className='cloud-img' src={cloud} alt="" />
                <div className='leading-content'>
                    <h1>Dr. Sohini Sastri</h1>
                    <p>Dr Sohini Sastri Is One Of The Best Astrologer In India. Dr. Sastri, stands distinguished, nominated among India’s Top 5 Astrologers by various internet polls and leading digital media platforms. Benefit from her Vedic astrological insights to correct your future’s course and illuminate your path forward with the guidance of the best in astrology. Dr. Sohini Sastri’s expertise shines brightly, offering unparalleled wisdom and foresight to those seeking direction in life’s journey.</p>
                    <div className='leading-btn'>
                        <button className='schedule-btn'><p><BsSuitDiamondFill /></p>
                        <p>SCHEDULE APPOINTMENT</p></button>
                        <button className='abt-btn'><p><BsSuitDiamondFill /></p>
                        <p>ABOUT</p></button>
                    </div>
                </div>
                <div className='leading-container'>
                    <img className='leading-img-2' src={leadingimg} alt="" />
                    <img className='orange-img' src={orange} alt="" />
                    <img className='moon-img' src={blackmoon} alt="" />
                    <img className='star-img' src={star} alt="" /> 
                </div>
                <p className='sparkle-icon'><BsStars className='star'/></p>
            </div>
        </section>
        <section className='queries'>
            <div className='bg-image'>
                <img src={bgimage} alt="" />
            </div>
            <div className='queries-content'>
                <h1>What does your birth chart TELL you?</h1>
                <h3>Consult the best astrologer In Kolkata, India Today</h3>
                <button className='appointment-btn'>
                    <p><BsSuitDiamondFill /></p>
                    Book an appoinment
                </button>
            </div>
        </section>
        <section className='best-astro animate__animated animate__pulse'>
            <div className='best-img'>
                <div className='best1-img'>
                   <img src={best1} alt="" />
                </div>
                <img className='diamand-img' src={diamond} alt="" />
            </div>
            <div className='best-content'>
                <div className='bestcontent-font'>
                    <h1>Best Astrologer and Palmist in India</h1>
                    <p>Dr. Sohini Sastri, the renowned Vedic astrologer in India, stands firm in her belief in karma. She asserts that our past actions and advocates shape our present for positive efforts to avoid future obstacles. Her vast repertoire includes numerology, palmistry, and Vastu shastra, she guides people through challenges with empathy and practical solutions. These qualities place her among the Top Astrologers In India.</p>
                    <h2>CELEBS FAVOURITE ASTROLOGER IN INDIA</h2>
                    <p>Dr. Sastri’s popularity among film town divas and stars positions her as the go-to authority for palmistry and Vedic astrological remedies, solidifying her status as the foremost expert of astrology in Kolkata, India. Her spirituality transcends materialism, as she perceives God’s presence not only in heaven but also within our world, asserting that our entire existence is imbued with divine energy. This profound understanding has earned her recognition as the best celebrity astrologer in India.</p>
                </div>
                
            </div>
        </section>
        <section className='simple-abt animate__animated animate__zoomIn'>
            <h1>Twice President Award-winning Astrologer In India</h1>
            <p>Dr. Sohini Sastri has established herself as a leading figure in the field of astrology and divine science. Her deep understanding of astrology, combined with her spiritual insights, has propelled her to significant heights. Over the years, she has been recognized with numerous prestigious awards, affirming her status as one of the most respected and trusted astrologers in India. Her journey is marked by dedication, accuracy in predictions, and a compassionate approach to guiding people through life’s challenges.</p>
            <div className='highlight-para'>
                <p>Her expertise in various disciplines, including KP astrology, Vedic astrology, palmistry, numerology, Vastu Shastra, and color therapy, underscores her holistic approach towards addressing the diverse needs of her followers. Her ability to spread positivity and provide solace to those in distress highlights the transformative power of spirituality in navigating life’s adversities.</p>
            </div>
            <p>Among the many accolades she has received, Dr Sohini Sastri’s most distinguished honour is the Champion of Change Award. In 2019, she was awarded the Champion of Change by the Honourable 13th President of India, Late Shri Pranab Mukherjee, acknowledging her contributions to astrology and her impact on society. This recognition not only highlights her expertise but also her commitment to using her knowledge for the betterment of others.</p>
            <p>In 2021, Dr Sastri was again honoured with the Champion of Change award, this time by the Honourable 14th President of India, Shri Ram Nath Kovind. Receiving this award twice from two successive Presidents is a testament to her excellence and influence in the field of astrology. These prestigious recognitions solidify her position as the best astrologer in India, trusted by countless individuals, including celebrities and public figures, for her accurate predictions and spiritual guidance.</p>
            <div className='arrow-img'>
                <img src={arrow2} alt="" />
            </div>
        </section>
        <section className='expect'>
            <h3>Here’s what you can expect</h3>
            <div className='expect-flex'>
                <div className='expect1'>
                    <h1>Powerful Remedy</h1>
                    <div className='expect-img'>
                        <img src={element1} alt="" />
                    </div>
                </div>
                <div className='expect1'>
                    <h1>Personalised Guidance</h1>
                    <div className='expect-img'>
                        <img src={element2} alt="" />
                    </div>
                </div>
                <div className='expect1'>
                    <h1>Trusted & Reliable Solutions</h1>
                    <div className='expect-img'>
                        <img src={element3} alt="" />
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>
  )
}

export default Home
