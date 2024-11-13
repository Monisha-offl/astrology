import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Swiperabout.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import celebritiespic1 from "../../Assets/images/celebritiespic1.png"
import celebritiespic2 from "../../Assets/images/celebritiespic2.png"
import celebritiespic3 from "../../Assets/images/celebritiespic3.png"
import celebritiespic4 from "../../Assets/images/celebritiespic4.png"


export default function App() {
  return (
    <>
    <div className='aboutswiper'>
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
            <img src={celebritiespic1} alt="" className='celebritiespic1'/>
            </SwiperSlide>
            <SwiperSlide>
            <img src={celebritiespic2} alt="" className='celebritiespic1'/>
            </SwiperSlide>
            <SwiperSlide>
            <img src={celebritiespic3} alt="" className='celebritiespic1'/>
            </SwiperSlide>
            <SwiperSlide>
            <img src={celebritiespic4} alt="" className='celebritiespic1'/>
            </SwiperSlide>
        </Swiper>
    </div>    
    </>
  );
}