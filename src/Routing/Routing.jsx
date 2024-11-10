import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Aboutpage from '../Pages/Aboutpage'
import Contactpage from '../Pages/Contactpage'
import Gallerypage from '../Pages/Gallerypage'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />}/>
        <Route path="/gallery" element={<Gallerypage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default Routing
