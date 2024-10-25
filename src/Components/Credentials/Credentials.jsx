import React from 'react'
import "./Credentials.css"
import disaward1 from "../../Assets/images/disaward1.png"

const Credentials = () => {
  return (
    <>
     <div className='credentials'>
        <div className='credentials-h'>
            <p>Why Dr. Sohini Shastri is</p>
            <h3>The Best Astrologer in India</h3>
        </div>
        <div className='award-des'>
            <div className='award-img'>
                <img src={disaward1} alt="" />
            </div>
            <div className='award-para'>
                <h1>Grand Ph.D in astrolgy</h1>
                <p>Dr. Sohini Sastri’s remarkable achievement of receiving the Grand Ph.D. in Astrology from the National American University stands as a testament to her exceptional contributions to the field. As the sole astrologer honored with this prestigious award, Dr. Sastri’s recognition highlights her profound expertise, dedication, and influence in astrology. Her work not only elevates the standards of astrological practice but also inspires peers and enthusiasts globally.</p>
            </div>
        </div>
     </div> 
    </>
  )
}

export default Credentials
