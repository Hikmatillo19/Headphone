import './Latest.scss'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import redHP from '../../assets/img/redHeadphone.png'
import blueHP from '../../assets/img/blueHeadphone.png'
import beigeHP from '../../assets/img/beigeHeadphone.png'
function Latest() {
    return (
        <section className='latest'>
            <h2 className='latest__h2'>
                Our Latest
                colour collection 2021
            </h2>     

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={redHP} alt="" /></SwiperSlide>
                <SwiperSlide><img src={blueHP} alt="" /></SwiperSlide>
                <SwiperSlide><img src={beigeHP} alt="" /></SwiperSlide>
            </Swiper>

            
        </section>
    )
}

export default Latest