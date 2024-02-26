import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from "../styles/slidder.module.css"
import 'swiper/css';
import url from "./host/config"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Cardgap from './Cardgap';
import axios from 'axios';
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
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
320: {
slidesPerView: 1,
spaceBetween: 0,
slideToClickedSlide: true,
},
920: {
slidesPerView: 1,
spaceBetween: 0,
slideToClickedSlide: true,
},
921: {
slidesPerView: 1,
spaceBetween: 0,
slideToClickedSlide: true,
},

922: {
slidesPerView: 2,
spaceBetween: 0,
slideToClickedSlide: true,
},

1362: {
slidesPerView: 2,
spaceBetween: 0,
slideToClickedSlide: true,
},
1363: {
slidesPerView: 3,
spaceBetween: 0,
slideToClickedSlide: true,
}
};
return (
<>
<Swiper
cssMode={true}
// navigation={true}
navigation={{
prevEl: '.swiper_button_prev1',
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
return <SwiperSlide className={s.slide12} ><Cardgap data1={item} /></SwiperSlide>
}))}
{data.map((item=>{
return <SwiperSlide className={s.slide12} ><Cardgap data1={item} /></SwiperSlide>
}))}
</>

<div className={s.buttons}>
<div className="swiper_button_prev1"><MdArrowBackIos className={s.b} /></div>
<div className="swiper-button-next1"><MdOutlineArrowForwardIos className={s.b} /></div>
</div>
</Swiper>

 
</>
);
}
