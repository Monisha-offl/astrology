import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Aboutpage from '../Pages/Aboutpage'
import Contactpage from '../Pages/Contactpage'
import Gallerypage from '../Pages/Gallerypage'
import Servicespage from '../Pages/Servicespage'
import Blogpage from '../Pages/Blogpage'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />}/>
        <Route path="/gallery" element={<Gallerypage/>}/>
        <Route path='/services' element={<Servicespage />}/>
        <Route path='/blog' element={<Blogpage />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default Routing
