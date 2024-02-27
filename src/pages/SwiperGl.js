import React, { useEffect, useState } from "react";
import Card from "./componet/card";
import s from "../styles/slidder.module.css"
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import axios from "axios";
import url from "./host/config";
import { Swiper, SwiperSlide } from 'swiper/react';
const SwiperGl = (props)=> {
const [currentSlide, setCurrentSlide] = useState(0);
var [glFoods,setGlFoods]=useState([])
const slidesToShow = 2;
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
1362: {
slidesPerView: 2,
spaceBetween: 0,
slideToClickedSlide: true,
},
1363: {
slidesPerView: 3,
spaceBetween: 0,
slideToClickedSlide: true,
},
2000: {
slidesPerView: 3,
spaceBetween: 0,
slideToClickedSlide: true,
}
};




function getgeFoods(){
axios.get(`${url()}/api/gl_foods`).then(res=>{
setGlFoods(res.data)
})
}
function getgeDesert(){
axios.get(`${url()}/api/gl_desert`).then(res=>{
setGlFoods(res.data)
})
}
function getgeProduct(){
axios.get(`${url()}/api/gl_product`).then(res=>{
setGlFoods(res.data)
})
}
const wrapperRef = React.createRef();
useEffect(()=>{
if(props.key1==1){
getgeFoods()
}else if(props.key1==2){
getgeDesert()
}else{
getgeProduct()
}

},[])
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

{glFoods.map((item,key)=>{
return <SwiperSlide className={s.slide12}> <Card data={item} key={key} /> </SwiperSlide>
})}

<div className={s.buttons}>
<div className="swiper_button_prev1"><MdArrowBackIos className={s.b}/> </div>
<div className="swiper-button-next1"><MdOutlineArrowForwardIos className={s.b}/></div>
</div>
</Swiper>

</div>
);
}

export default SwiperGl





