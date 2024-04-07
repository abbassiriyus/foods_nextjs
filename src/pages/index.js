import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import s from "../styles/Glavnstr.module.css";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Loading from "./loading"
import Footer from "./componet/footer.js"
import Navbar from "./componet/navbar";
import axios from "axios";
import url from "./host/config";
import Swiper from "../pages/SwiperGl.js";
import Slidder from "../pages/slidder.js"
import Swiperprofil from "../pages/Profilswiper.js"
import Head from "next/head";
import Glavniy_registr from "./Glavniy_registr";
export default function index() {
var [data, setData] = useState([{}]);
var [sizUchun,setSizUchun]=useState([])
var [swiper, setSwipper] = useState(0);
var [oshpazdanTaom,setOshpazdanTaom]=useState([])
var [shirinliklar,setShirinliklar]=useState([])
var [soglom,setSoglom]=useState([])



function plus() {
if (swiper + 1 === data.length) {
setSwipper(0);
} else {
setSwipper(swiper + 1);
}
}
function minus() {
if (swiper === 0) {
setSwipper(data.length - 1);
} else {
setSwipper(swiper - 1);
}
}
function getSizUchun() {
axios.get(`${url()}/api/siz_uchun`).then(res=>{
setSizUchun(res.data)
axios.get(`${url()}/api/oshpazdan_taom`).then(res1=>{
setOshpazdanTaom(res1.data)
axios.get(`${url()}/api/shirinliklar`).then(res2=>{
setShirinliklar(res2.data)
axios.get(`${url()}/api/soglom`).then(res3=>{
setSoglom(res3.data)
})
})
})
}).catch(err=>{

})
}
function getheaderCarousel() {
axios.get(`${url()}/api/userprog/header`).then(res=>{
setData(res.data)

})
.catch(err=>{
})
}

const [xopen, setXopen] = useState(false);

function svgxopen() {
setXopen(true);
}
function svgxclose() {
setXopen(false);
}



useEffect(()=>{
getheaderCarousel()
getSizUchun();

},[])





return (
<div onClick={svgxclose}>
<Head>
        <script src="https://api-maps.yandex.ru/2.1/?apikey=49b66546-e562-4119-b7ba-9adcce7e49a0&lang=en_US" />
      </Head>
<Navbar/>
<div className={s.header} >
<div className={s.h_h1} >
<h1>Привет!</h1>
</div>
<div className={s.head} >
<div className={s.h_soz} >
<h1 className={s.h_h2} style={{ paddingTop:'30px' }}>У НАС ЕСТЬ <br /> ЧТО ПОЕСТЬ!</h1>
<p className={s.h_p1}>Тебе не нужно покупать продукты, готовить и мыть посуду. Наслаждайся вкусной едой без лишних забот!
</p>
<a href="/foods/"><button className={s.h_button}>Выбрать блюда</button></a>
<p className={s.h_p2}>Вы повар? — <span className={s.h_span1}>давайте с нами!</span>
</p>
<span className={s.h_span2}>Регистрация займет всего 3 минуты</span>
</div>
<div className={s.h_swip_img}>
    {data[0] && data[swiper]?(<div className={s.swiper}>
<img
className={s.swiper_img}
src={data[swiper].image}
alt=""
/>
<div className={s.s_i}>
<FaArrowLeft
className={s.strelka}
onClick={() => {
minus();
}}
/>
<FaArrowRight
className={s.strelka}
onClick={() => {
plus();
}}
/>
</div>
<div className={s.s_profil}>
<img
className={s.prifil_foto}
src={(data[swiper].user_image)}
alt=""
/>
<div className={s.s_p_g_s}>
<div className={s.nomi}>
<p className={s.nazvanie_bluda}>{data[swiper].foods_name}</p>
<p className={s.stoimost}>{data[swiper].price} ₽</p>
</div>
<div className={s.s_p_i_s1}>
<div onClick={()=>{window.location=`/oneuser/${data[swiper].user_id}/`}} className={s.s_infa}>
<p className={s.sotuvchi}>{data[swiper].name}</p>
<div className={s.bal}>
{['','','','',''].map((item,key)=>{
if(key<data[swiper].mark){
return <FaStar className={s.star} /> 
}else{
return <FaStar className={s.star1} /> 
}
})}
<p className={s.bal2}>{data[swiper].mark}</p>
<BiCommentDetail className={s.kometariy} />
<p className={s.tets_123}>{data[swiper].mark_org}</p>
</div>
<p className={s.kakoypovar}>{data[swiper].ish_yonalishi_title}</p>
</div>
<div className={s.s_button}>
<button onClick={()=>{window.location=`/menudetail/${data[swiper].food_id}/`}} >Заказать</button>
</div>
</div>
</div>
</div>
</div>):(<></>)}

</div>
</div>
</div>
<div className={s.main}>
<h1>БЛЮДА ОТ ДОМАШНИХ ПОВАРОВ И КОНДИТЕРОВ</h1>
<p className={s.main_p}>Тебе не нужно покупать продукты, готовить и мыть посуду. Наслаждайся вкусной едой без лишних забот!
</p>
<div className={s.inp}>
<div className={s.inpu}>
<div className={s.m_search}>
<IoIosSearch />
</div>
<input className={s.input} onChange={svgxopen} type="text" placeholder="Поиск по названию блюд" /> {xopen ? (
<div className={s.exit}>
<IoCloseOutline />
</div>
) : (
<div></div>
)}
</div>
<button className={s.m_button} onClick={()=>{ window.location="/foods/" }}>Найти</button>
</div>
</div>

<div className={s.cardlar}>
<h1 className={s.jison}>Подборки для тебя</h1>
<div className={s.cards}>
{sizUchun.map((item,key)=>{
return <div  onClick={()=>{localStorage.setItem('category',item.id);window.location="/foods/"}}  key={key} className={s.c}>
<img className={s.card_img} src={item.image} alt="" />
<div className={s.c_soz}>
<p >{item.title}</p>
</div>
</div>

})}

</div>
</div>
<div className={s.cardlar}>
<h1 className={s.jison}>Блюда от поваров</h1>
<div className={s.cards}>
{oshpazdanTaom.map((item,key)=>{
return <div  onClick={()=>{localStorage.setItem('category',item.id);window.location="/foods/"}}  key={key} className={s.c}>
<img className={s.card_img} src={item.image} alt="" />
<div className={s.c_soz}>
<p>{item.title}</p>
</div>
</div>
})}


</div>
</div>
<div className={s.cardlar}>
<h1 className={s.jison}>Десерты от кондитеров</h1>
<div className={s.cards}>
{shirinliklar.map((item,key)=>{
return <div  onClick={()=>{localStorage.setItem('category',item.id);window.location="/foods/"}}  key={key} className={s.c}>
<img className={s.card_img} src={item.image} alt="" />
<div className={s.c_soz}>
<p>{item.title}</p>
</div>
</div>
})}


</div>
</div>
<div className={s.cardlar}>
<h1 className={s.jison}>Полезные продукты</h1>
<div className={s.cards}>
{soglom.map((item,key)=>{
return <div key={key} onClick={()=>{localStorage.setItem('category',item.id);window.location="/foods/"}} className={s.c}>
<img className={s.card_img} src={item.image} alt="" />
<div className={s.c_soz}>
<p>{item.title}</p>
</div>
</div>
})}



</div>
</div>


<div className={s.swiper1}>
<h1>ПОПУЛЯРНЫЕ БЛЮДА</h1>
<Swiper key1="1" />
</div>

<div className={s.swiper2}>
<h1>ПОПУЛЯРНЫЕ ДЕСЕРТЫ</h1>
<Swiper key1="2" />
</div>

<div className={s.swiper3}>
<h1>ПОПУЛЯРНЫЕ ПРОДУКТЫ</h1>
<Swiper key1="3"/>
</div>


<div className={s.swipergap}>
<h1>ОТЗЫВЫ</h1>
<Slidder/>
</div>

<div className={s.swiperprofil}>
<h1>ПОПУЛЯРНЫЕ ПОВАРА И КОНДИТЕРЫ</h1>
<Swiperprofil/>
</div>

<Glavniy_registr/>


<div className={s.footer}>
<Footer/>
</div>
{/*  */}
<Head>
        <script src="https://api-maps.yandex.ru/2.1/?apikey=49b66546-e562-4119-b7ba-9adcce7e49a0&lang=en_US" />
      </Head>
</div>
);
}