import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Swiperhome.css';

import disaward1 from "../../Assets/images/disaward1.png"
import disaward2 from "../../Assets/images/disaward2.png"
import disaward3 from "../../Assets/images/disaward3.png"
import disaward4 from "../../Assets/images/disaward4.png"
import disaward5 from "../../Assets/images/disaward5.png"
import disaward6 from "../../Assets/images/disaward6.png"
import disaward7 from "../../Assets/images/disaward7.png"
import disaward8 from "../../Assets/images/disaward8.png"


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
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
        <div className='award-des'>
            <div className='award-img'>
              <img src={disaward1} alt="" />
            </div>
            <div className='award-para'>
                  <h1>Grand Ph.D in astrolgy</h1>
                  <p>Dr. Sohini Sastri’s remarkable achievement of receiving the Grand Ph.D. in Astrology from the National American University stands as a testament to her exceptional contributions to the field. As the sole astrologer honored with this prestigious award, Dr. Sastri’s recognition highlights her profound expertise, dedication, and influence in astrology. Her work not only elevates the standards of astrological practice but also inspires peers and enthusiasts globally.</p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='award-des'>
            <div className='award-img'>
              <img src={disaward2} alt="" />
            </div>
            <div className='award-para'>
                  <h1>Brand Ambassador of International Vedic Astrology Federation, USA</h1>
                  <p>Dr. Sohini Sastri’s acknowledgement by the International Vedic Astrology Federation, USA, as their brand ambassador is a testament to her dedication and expertise in the field. Her commitment to building and promoting the IVAF brand showcases her passion for Vedic astrology and its global significance. This recognition not only highlights her achievements but also underscores the importance of her contributions to the broader community of astrology enthusiasts worldwide. Dr. Sohini Sastri is widely regarded as one of the best astrologers in the field, and her appointment as brand ambassador further solidifies her reputation.”</p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='award-des'>
            <div className='award-img'>
              <img src={disaward3} alt="" />
            </div>
            <div className='award-para'>
                  <h1>DLitt in Astrology</h1>
                  <p>Dr. Sohini Sastri’s acknowledgement of the honorary DLitt award from the National American University, sanctioned by the esteemed Board of Overseas, stands as a testament to her unparalleled success in the realm of astrology. She is honoured with this distinguished honour, highlighting her commitment to the profession and her deep experience.</p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='award-des'>
            <div className='award-img'>
              <img src={disaward4} alt="" />
            </div>
            <div className='award-para'>
                  <h1>"Best Astrologer in the World" by the Astrological Association of Great Britain</h1>
                  <p>Dr. Sohini Sastri’s recognition as the “Best Astrologer in the World” by the Astrological Association of Great Britain is a testament to her unparalleled expertise and profound contributions to astrology. Her dedication, expertise, and perceptions have not only brought her recognition on a global scale but also cemented her status as a leading light in the field of astrological sciences.</p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='award-des'>
            <div className='award-img'>
              <img src={disaward5} alt="" />
            </div>
            <div className='award-para'>
                  <h1>Indian Women's History Museum Foundation</h1>
                  <p>Dr. Sohini Sastri’s acknowledgement of the Indian Women’s History Museum Foundation is a testament to her remarkable contributions as a distinguished astrologer, philanthropist, and life coach. Her dedication to her craft and her commitment to empowering others have left an indelible mark on Indian society, making her a beacon of inspiration for generations to come.</p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='award-des'>
            <div className='award-img'>
              <img src={disaward6} alt="" />
            </div>
            <div className='award-para'>
                  <h1>The Global Book of Excellence, England</h1>
                  <p>Dr. Sohini Sastri’s remarkable achievement in being honoured with the prestigious ‘Global Book of Excellence’, England, award for her contributions to the field of astrology is a testament to her unparalleled expertise and dedication. Among thousands of nominees worldwide, she is the singular recipient in the astrology segment for her exceptional talent and profound impact on her field. Dr. Sastri’s work not only enriches the discipline of astrology but also inspires countless individuals worldwide, cementing her legacy as a true pioneer in her field.</p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='award-des'>
            <div className='award-img'>
              <img src={disaward7} alt="" />
            </div>
            <div className='award-para'>
                  <h1>The Inspiring Indian Women Award 2024</h1>
                  <p>Acknowledgement for Dr. Sohini Sastri’s receipt of ‘The Inspiring Indian Women Award 2024’ from the Honourable MP, UK, Bob Blackman, CBE, Padmashree, at the historic Houses of Parliament in London as a distinguished astrologer, life coach, and advocate for women empowerment underscores her invaluable contributions to society. Her dedication to guiding individuals towards self-discovery and empowerment, particularly women, resonates deeply, inspiring countless others to pursue their dreams and embrace their potential. This recognition serves as a testament to her unwavering commitment to uplifting others and fostering positive change in the world.</p>
              </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
        <div className='award-des'>
            <div className='award-img'>
              <img src={disaward8} alt="" />
            </div>
            <div className='award-para'>
                  <h1>Grand Ph.D in astrolgy</h1>
                  <p>Dr. Sohini Sastri’s remarkable achievement of receiving the Grand Ph.D. in Astrology from the National American University stands as a testament to her exceptional contributions to the field. As the sole astrologer honored with this prestigious award, Dr. Sastri’s recognition highlights her profound expertise, dedication, and influence in astrology. Her work not only elevates the standards of astrological practice but also inspires peers and enthusiasts globally.</p>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
