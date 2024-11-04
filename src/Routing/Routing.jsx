import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Aboutpage from '../Pages/Aboutpage'
import Contactpage from '../Pages/Contactpage'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default Routing
