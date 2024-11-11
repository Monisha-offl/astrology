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
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24174.062026044385!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c62365b%3A0x36e8a2de4ec6a2de!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1601745330439!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        >
        </iframe>
        </section>
     </div> 
    </>
  )
}

export default Contact
