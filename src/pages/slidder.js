

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import s from "../styles/slidder.module.css"
// Import Swiper styles
import 'swiper/css';
import url from "./host/config"
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Cardgap from './Cardgap';
import axios from 'axios';

export default function slidder() {
    
    var [data,setData]=useState([])
    
function getData() {
    axios.get(`${url()}/api/gl_otzif`).then(res=>{
setData(res.data)
    }).catch(err=>{

    })
}
useEffect(()=>{
    getData()
},[])

    const breakpoints = {
        240: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1124: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      };


  return (
    <>
      <Swiper
        cssMode={true}
        // navigation={true}
        navigation={{
            prevEl: '.swiper-button-prev1',
            nextEl: '.swiper-button-next1'
          }}
          breakpoints={breakpoints}
        mousewheel={true}
        keyboard={true}
        id={s.slidder}
        slidesPerView={3}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        loop={true}
      >
        <>
        {data.map((item=>{
        return <SwiperSlide className={s.slide12} ><Cardgap  data1={item}  /></SwiperSlide>
     }))}
        {data.map((item=>{
        return <SwiperSlide className={s.slide12} ><Cardgap  data1={item}  /></SwiperSlide>
     }))}
      </>
    
      <div className="swiper-button-prev1">Previous</div>
  <div className="swiper-button-next1">Next</div>
      </Swiper>  
      
     
    </>
  );
}
