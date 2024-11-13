import React from 'react'
import "./Servicescomp.css"
import servicesintro from "../../Assets/images/servicesintro.png"
import serviceslogo from "../../Assets/images/serviceslogo.png"
import meditation from "../../Assets/images/meditationimg.png"
import astrologyimg from "../../Assets/images/astrologyimg.png"
import numerologyimg from "../../Assets/images/numerologyimg.png"
import palmistryimg from "../../Assets/images/palmistryimg.png"
import tantraimg from "../../Assets/images/tantraimg.png"
import bestlogo from "../../Assets/images/bestlogo.png"
import Swiperabout from "../Swiperabout/Swiperabout"
import bestcelebimg from "../../Assets/images/bestcelebimg.png"

const Servicescomp = () => {
  return (
    <>
     <div className='servicespage'>
        <section className='services-intro'>
            <div className='services-wholediv'>
                <div className='services-left'> 
                    <img src={serviceslogo} alt="" className='serviceslogo'/>
                    <div className='sohini-quote'>  
                        <p>"We all have certain roles to play for the sake of mankind and those who are privileged should always stretch their hands towards those who are in need."</p>
                        <h5>Dr. Sohini Sastri</h5>
                    </div>
                </div>
            </div>
                <img src={servicesintro} alt="" className='servicesintro' />
        </section>
        <section className='meditation'>
            <p>Home/Services</p>
        </section>
        <div className='servicesdiv-flex'>
            <section className='astrology'>
                <div className='astrology-left'>
                    <img src={astrologyimg} alt="" className='astrology-img' />
                </div>
                <div className='astrology-content'>
                    <h1>Astrology</h1>
                    <p>According to the traditional Hindu system of astrology in India, the word “Jyotisha” came from Sanskrit “jyótis” meaning “light, the heavenly body”. In India, the astrological analysis is mainly based on the theories of Hindu astrology. This field of knowledge especially the Jyotish Vidya, the science of light is ancient and has existed since the Vedic era.</p>
                    <p>It is all about the celestial and astral patterns, which define a person’s fate on the basis of Vedic Astrology. The theory states that all things in this world and beyond are inter-connected. A person’s destiny is determined by his karma that rules his past, present and future and runs in a cyclic form. </p>
                    <button className='learnmore-button'>LEARN MORE</button>
                </div>
            </section>
            <section className='numerology'>
                <div className='numerology-content'>
                    <h1>Numerology</h1>
                    <p>According to the science of numerology, it is a belief that there’s a mystical link between the events happening around you and the numbers that correspond to your name or date of birth. As stated by the best astrologer in Kolkata, this particular stream of science opines that numbers together, form a universal language, which actually, in turn, confirms the truth of a person’s life.</p>
                    <p>These numbers determine the momentum of your ‘Life Path” and are valid as the natural elements – air, water, fire, and earth surrounding you, or even the topographies and climatic conditions. Each and every individual has a unique Life Path number, which is also the most important aspect of his natal chart. </p>
                    <button className='learnmore-button'>LEARN MORE</button>
                </div>
                <div className='numerology-left'>
                    <img src={numerologyimg} alt="" className='astrology-img' />
                </div>
            </section>
            <section className='palmistry'>
                <div className='palmistry-left'>
                    <img src={palmistryimg} alt="" className='astrology-img' />
                </div>
                <div className='palmistry-content'>
                    <h1>Palmistry</h1>
                    <p>Since the ancient times, people have been curious about knowing the fate and understanding the destiny of the people. It is this spirit of inquiry, which gave birth to the world of predictive sciences or the various services of astrology. Palmistry, also known as Chiromancy, is an inherent part of the predictive science of astrology. It is truly surprising how a person’s hands can be so insightful. Each line on the palms of a person speaks of certain traits and events that will occur in the individual’s life or has had occurred in the past and the present state of mind.</p>
                    <p>Just like no two persons will have the same fingerprint, same the palm lines are also very intricate. The study is actually very complicated and any person without a palmistry practitioner cannot decipher the hidden codes randomly and also interpretations cannot be thrown in any general direction as such. </p>
                    <button className='learnmore-button'>LEARN MORE</button>
                </div>
            </section>
            <section className='tantra'>
                <div className='tantra-content'>
                    <h1>Tantra</h1>
                    <p>Dr. Sohini Sastri has helped to solve numerous problems of her clients and fulfill fulfill their desire using her expertise over Tantra. The motto behind the service is to help one, so that he/ she can live a happy and blessed life ahead. Dr. Sohini Sastri, the best astrologer in India, has vast experience and knowledge in this domain and she has achieved huge success in terms of helping people through Tantra.</p>
                    <p>Through the various means of Tantra services, one can link with a person’s mind and body, so that he can control the person’s thought, every move, even body language. It is a perfect way to control a person without harming anyone in the process.</p>
                    <button className='learnmore-button'>LEARN MORE</button>
                </div>
                <div className='tantra-left'>
                    <img src={tantraimg} alt="" className='astrology-img' />
                </div>
            </section>
        </div>
        <section className='bestpresident-award'>
            <div className='president-left'>
                <div className='president-left-h'>
                    <h1>Why</h1>
                    <img src={bestlogo} alt="" className='bestlogo'/>
                </div>
                <p>Two time President’s Award winner Dr. Sohini Sastri, acclaimed as the best astrologer in India, stands out for providing exceptional solutions to life’s complexities. With over two decades of experience in Vedic astrology, she offers comprehensive guidance on various crucial matters such as marriage, career, legal issues, and more. Beyond astrology, her expertise spans diverse areas including business, education, and relationships. As a respected member of prestigious astrological institutions and with her works widely recognized in leading publications, Dr. Sohini Sastri’s unmatched insights and unwavering commitment make her the foremost choice for those seeking effective and lasting solutions to their problems.</p>
                <button className='book-button'>BOOK A CALL</button>
            </div>
            <div className='president-right'>
                <Swiperabout />
                {/* <img src={bestcelebimg} alt="" className='bestcelebimg'/> */}
            </div>
        </section>
        
        </div> 
    </>
  )
}

export default Servicescomp
