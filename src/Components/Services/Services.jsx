import React from 'react'
import "./Services.css"
import service1 from "../../Assets/images/service1.png"
import service2 from "../../Assets/images/service-numero.webp"
import service3 from "../../Assets/images/service-palmistry.webp"
import service4 from "../../Assets/images/service-tantra.webp"
import Servicescart from '../../Reusable/Servicescart'

const Services = () => {

    const service = [
        {
            img: service1,
            title: "Astrology",
            description: "Unlock celestial guidance for your destiny. Gain insights and clarity on life’s journey through expert astrology services tailored just for you."
        },
        {
            img: service2,
            title: "Numerology",
            description: "Decode the numbers of your life’s path. Explore personality traits, destiny, and potential through personalized numerology guidance and ancient wisdom."
        },
        {
            img: service3,
            title: "Palmistry",
            description: "Delve into the ancient wisdom of palmistry to reveal your destiny and potential. Explore the intricate lines of your palms for insights into your past, present, and future."
        },
        {
            img: service4,
            title: "Tantra",
            description: "Embark on a journey of spiritual awakening and self-discovery through tantra. Experience profound healing, connection, and empowerment with authentic tantric practices and guidance."
        },
    ]

  return (
    <>
     <div className='services1'>
        <div className='services1-h'>
            <h1>Our Best Astrology Services</h1>
        </div>
        <div className='service-content animate__animated animate__zoomIn'>
            <Servicescart servicesdata= {service} />
        </div>
        </div> 
    </>
  )
}

export default Services
