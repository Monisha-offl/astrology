import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Aboutpage from '../Pages/Aboutpage'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/page2" element={<Aboutpage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default Routing
