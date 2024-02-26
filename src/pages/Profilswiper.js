// import React, { useState } from "react";

// import ProfilCard from "../pages/profilcard";
// import swip from "../styles/Swipergap.module.css";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { IoIosArrowRoundBack } from "react-icons/io";
// const SwiperGl = () => {
// const [currentSlide, setCurrentSlide] = useState(0);
// const slidesToShow = 2;
// const manga = [
// {
// id: 2,
// image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
// title: "1"
// },
// {
// id: 2,
// image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
// title: "2"
// },
// {
// id: 2,
// image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
// title: "3"
// },
// {
// id: 2,
// image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
// title: "4"
// },
// {
// id: 2,
// image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
// title: "5"
// },
// {
// id: 2,
// image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
// title: "6"
// },
// {
// id: 2,
// image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
// title: "7"
// },
// {
// id: 2,
// image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
// title: "8"
// },
// {
// id: 2,
// image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
// title: "9"
// },
// {
// id: 2,
// image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
// title: "10"
// },
// {
// id: 2,
// image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
// title: "11"
// }
// ];

// const showSlide = (n) => {
// const slideWidth = 100 / slidesToShow;
// wrapperRef.current.style.transform = `translateX(-${n * slideWidth}%)`;
// setCurrentSlide(n);
// };

// const nextSlide = () => {
// const totalSlides = Math.ceil(manga.length / slidesToShow);
// const nextSlideIndex = currentSlide + 1;

// if (nextSlideIndex < totalSlides) {
// showSlide(nextSlideIndex);
// } else {
// showSlide(currentSlide);
// }
// };

// const prevSlide = () => {
// if (currentSlide > 0) {
// showSlide(currentSlide - 1);
// }
// };
// const wrapperRef = React.createRef();

// return (
// <div>
// {/* <Navbar/> */}
// <div className={swip.slider}>
// <div className={swip.wrapper} ref={wrapperRef}>
// {manga.map((mangaItem,key) => (
// <ProfilCard key={key} />
// ))}
// </div>
// <div className={swip.button} style={{marginTop:'20px'}}>
// <p className={swip.prev} onClick={prevSlide}><IoIosArrowRoundBack /></p>
// <p className={swip.next} onClick={nextSlide}><IoIosArrowRoundForward /></p>
// </div>
// </div>
// </div>
// );
// }

// export default SwiperGl

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from "../styles/slidder.module.css"
import ProfilCard from "../pages/profilcard";
import 'swiper/css';
import url from "./host/config"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
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
1081: {
slidesPerView: 2,
spaceBetween: 0,
slideToClickedSlide: true,
},
1082: {
slidesPerView: 3,
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
<div>
<Swiper
cssMode={true}
navigation={{
prevEl:'.swiper_button_prev1',
nextEl:'.swiper-button-next1'
}}
breakpoints={breakpoints}
mousewheel={true}
keyboard={true}
id={s.slidder}
slidesPerView={3}
modules={[Navigation,Pagination,Mousewheel,Keyboard]}
className="mySwiper"
loop={true}
>

{data.map((item,key)=>{
return <SwiperSlide className={s.slide12}><ProfilCard data={item} key={key} /> </SwiperSlide>
})}

<div className={s.buttons}>
<div className="swiper_button_prev1"><MdArrowBackIos className={s.b}/> </div>
<div className="swiper-button-next1"><MdOutlineArrowForwardIos className={s.b}/></div>
</div>
</Swiper>
</div>
);
}
