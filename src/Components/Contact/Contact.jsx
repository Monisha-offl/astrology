import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <>
     <div className='contact'>
        <section className='contact-welcome-note'>
            <div className='contact-bg'>
                <h1>CONTACT US</h1>
                <h2>Fill up the form below & Our team will call back soon</h2>
            </div>
        </section>
        <section className='contact-info-details'>
            <div className='contact-navigate-head'>
                <p className='navigate-contact'>Home/ Contact</p>
                <h1 className='contact-text'>CONTACT US</h1>
            </div>
            <div className='info-wholediv'> 
            <div className='contact-left'>
                <div className='c-info1'>
                    <h2>EMAIL</h2>
                    <p className='highlight-contact'>sohini.sastri@gmail.com</p>
                </div>
                <div className='c-info1'> 
                    <h2>PHONE</h2>
                    <p className='highlight-contact'>+91 903 813 6660</p>
                    <p className='highlight-contact'>+91 916 353 2538</p>
                </div>
                <div className='c-info1'>
                    <h2>HEAD OFFICE</h2>
                    <p className='address'>The Golden Residency,
                        25A, S. P. Mukherjee Road,
                        2nd Floor, Bhawanipore,
                        Kolkata – 700025</p>
                </div>
                <div className='c-info1'>
                    <h2>DELHI CHAMBER</h2>
                    <p className='address'>G – 1230, Basement,
                        Chittaranjan Park,
                        Delhi, 110019</p>
                </div>
            </div>
            <div className='contact-right'>
                <input type="text" placeholder='NAME*' />
                <div className='info-div'>
                    <input type="text" placeholder='COUNTRY CODE*' />
                    <input type="text" placeholder='MOBILE*' />
                </div>
                <input type="text" placeholder='EMAIL ADDRESS' />
                <input type="text" placeholder='SUBJECT*' />
                <textarea name="" id="" placeholder='MEESAGE'></textarea>
                <div className='cntct-btn-div'>
                <button className='contact-submit'>SUBMIT</button>  
                </div>
            </div>
            </div>
            
        </section>
        <section className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7371.306734195414!2d88.345629!3d22.517185000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027735f24df659%3A0x933d4fccb54d8213!2sDr.%20Sohini%20Sastri%20-%20Best%20Astrologer%20In%20India!5e0!3m2!1sen!2sin!4v1731322334727!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
     </div> 
    </>
  )
}

export default Contact
