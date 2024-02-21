import React, { useEffect, useState } from "react";
import Card from "./componet/card";
import swip from "../styles/SwiperGl.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios";
import url from "./host/config";
const SwiperGl = (props)=> {
const [currentSlide, setCurrentSlide] = useState(0);
var [glFoods,setGlFoods]=useState([])
const slidesToShow = 2;

const showSlide = (n) => {
const slideWidth = 100 / slidesToShow;
wrapperRef.current.style.transform = `translateX(-${n * slideWidth}%)`;
setCurrentSlide(n);
};

const nextSlide = () => {

const totalSlides = Math.ceil(glFoods.length / slidesToShow);

const nextSlideIndex = currentSlide + 1;

if (nextSlideIndex < totalSlides) {
showSlide(nextSlideIndex);
} else {
showSlide(currentSlide);
}
};

const prevSlide = () => {
if (currentSlide > 0) {
showSlide(currentSlide - 1);
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
{/* <Navbar/> */}
<div className={swip.slider}>
<div className={swip.wrapper} ref={wrapperRef}>
{glFoods.map((item,key) => (
<Card data={item} key={key}/>
))}







</div>
<div className={swip.button}>
<p className={swip.prev} onClick={prevSlide}><IoIosArrowRoundBack /></p>
<p className={swip.next} onClick={nextSlide}><IoIosArrowRoundForward /></p>
</div>
</div>
</div>
);
}

export default SwiperGl
