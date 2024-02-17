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
const manga = [
{
id: 2,
image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
title: "1"
},
{
id: 2,
image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
title: "2"
},
{
id: 2,
image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
title: "3"
},
{
id: 2,
image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
title: "4"
},
{
id: 2,
image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
title: "5"
},
{
id: 2,
image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
title: "6"
},
{
id: 2,
image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
title: "7"
},
{
id: 2,
image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
title: "8"
},
{
id: 2,
image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
title: "9"
},
{
id: 2,
image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
title: "10"
},
{
id: 2,
image:"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/6bbd891bef83916b60c2363036f72f149dfa24b1/6bbd891bef83916b60c2363036f72f149dfa24b1-wc800.jpeg",
title: "11"
}
];

const showSlide = (n) => {
const slideWidth = 100 / slidesToShow;
wrapperRef.current.style.transform = `translateX(-${n * slideWidth}%)`;
setCurrentSlide(n);
};

const nextSlide = () => {
const totalSlides = Math.ceil(manga.length / slidesToShow);
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
axios.get(`${url}/api/gl_foods`).then(res=>{
setGlFoods(res.data)
})
}
function getgeDesert(){
axios.get(`${url}/api/gl_desert`).then(res=>{
setGlFoods(res.data)
})
}
function getgeProduct(){
axios.get(`${url}/api/gl_product`).then(res=>{
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

setTimeout(() => {
console.log(glFoods,"ovqat");
}, 1000);

},[])
return (
<div>
{/* <Navbar/> */}
<div className={swip.slider}>
<div className={swip.wrapper} ref={wrapperRef}>
{glFoods.map((mangaItem) => (
<Card data={mangaItem}/>
))}
{glFoods.map((mangaItem) => (
<Card data={mangaItem}/>
))}
{glFoods.map((mangaItem) => (
<Card data={mangaItem}/>
))}
{glFoods.map((mangaItem) => (
<Card data={mangaItem}/>
))}
{glFoods.map((mangaItem) => (
<Card data={mangaItem}/>
))}
{glFoods.map((mangaItem) => (
<Card data={mangaItem}/>
))}
{glFoods.map((mangaItem) => (
<Card data={mangaItem}/>
))}
{glFoods.map((mangaItem) => (
<Card data={mangaItem}/>
))}
{glFoods.map((mangaItem) => (
<Card data={mangaItem}/>
))}
{glFoods.map((mangaItem) => (
<Card data={mangaItem}/>
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
