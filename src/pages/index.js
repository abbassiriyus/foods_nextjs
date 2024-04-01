import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import s from "../styles/Glavnstr.module.css";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Input_error from './componet/input_error';
import Input_error2 from './componet/input_error2';
import img1 from "../images/woman.png"
import Image from "next/image";
import Footer from "./componet/footer.js"
import Navbar from "./componet/navbar";
import axios from "axios";
import url from "./host/config";
import Swiper from "../pages/SwiperGl.js";
import Slidder from "../pages/slidder.js"
import Swiperprofil from "../pages/Profilswiper.js"
import Head from "next/head";
import { IoIosInformationCircleOutline, IoMdExit } from "react-icons/io";
export default function index() {
var [data, setData] = useState([{}]);
var [sizUchun,setSizUchun]=useState([])
var [swiper, setSwipper] = useState(0);
var [oshpazdanTaom,setOshpazdanTaom]=useState([])
var [shirinliklar,setShirinliklar]=useState([])
var [soglom,setSoglom]=useState([])
var [page, setPage] = useState(0)
var [error_phone, setErrorphone] = useState("")


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




<div className={s.qoshilish}>
<div className={s.q_soz}>
<h1>ПРИСОЕДИНЯЙТЕСЬ!</h1>
<p className={s.qoshish_p1}>— Максимально просто и прозрачно, честное слово!</p>
<p className={s.qoshish_p2}>Вы повар, кондитер или фермер? <br />
— регистрируйтесь в сервисе, публикуйте свои замечательные блюда или продукты, откликайтесь на заказы. Профит!</p>
<button>Зарегистрироватся</button>
</div>
<div className={s.q_img}>
<Image src={img1} alt="" />
</div>
</div>

<div className={s.qoshilish2}>
<div className={s.q_soz}>
<h1>ПРИСОЕДИНЯЙТЕСЬ!</h1>
<p className={s.qoshish_p1}>— Максимально просто и прозрачно, честное слово!</p>
<p className={s.qoshish_p2}>Вы повар, кондитер или фермер? <br />
— регистрируйтесь в сервисе, публикуйте свои замечательные блюда или продукты, откликайтесь на заказы. Профит!</p>
<div className={s.q_soz_b}>
<button onClick={() => { document.querySelector("#modal_gl").style = "display:flex"; setPage(0) }}>Зарегистрироватся</button>
</div>
</div>
<div className={s.q_img}>
<Image src={img1} alt="" />
</div>
</div>

<div className={s.footer}>
<Footer/>
</div>
{page == 0 ? (
            <div className={s.form_body_gl}>
              <h3>Вход на сайт</h3>
              <div className={s.back_gl1}><span id={s.phone_1}> По телефону</span><span onClick={() => setPage(1)}>По паролю</span> </div>
              <br />
              <div id='openUserpage_phone1' className={s.input_phone_gl}>
                <input id='openUserpage_phone' placeholder="your email" defaultValue={""} type="email" />
                <div id='error_phone' style={{ position: "relative", zIndex: -1 }}>
                  <Input_error message={error_phone} />
                  <IoIosInformationCircleOutline />
                </div>
              </div>


              <button onClick={() => openPagePhone()} style={{ marginTop: '40px', width: '40%', height: '45px' }}>Отправить код</button>
            </div>) : (
              page == 1 ? (
              <div className={s.form_body_gl}>
                <h3>Вход на сайт</h3>
                <div className={s.back_gl1}><span onClick={() => setPage(0)} id={s.phone_1}> По телефону</span><span>По паролю</span> </div>
                <br />
                <div className={s.input_phone_gl} id='pp_phone_big' >
                  <input placeholder="your email" defaultValue={""} type="email" id='pp_phone' />
                  <div id='error_phone1' style={{ position: "relative", zIndex: -1, color: "red" }}>
                    <Input_error message={error_phone} />
                    <IoIosInformationCircleOutline style={{ color: "red" }} /></div>
                </div>
                <div className={s.input_phone_gl} id='pp_parol_big' >
                  <input placeholder='Пароль' id='pp_parol' type="password" />
                  <div id="error_password1" style={{ position: "relative", zIndex: -1, color: "red" }}>
                    <Input_error2 message={errorPassword} />
                    <IoIosInformationCircleOutline style={{ color: "red" }} /></div>
                </div>
                <div className={s.key_btn}>
                  <button style={{ width: '30%' }} onClick={() => { loginPage() }} >Войти</button>
                  {/* <div onClick={() => setPage(3)} className={s.rikey}>
                    <RiKey2Fill className={s.fill_key} /><span style={{ cursor: 'pointer' }} >Напомнить пароль</span>
                  </div> */}
                </div> 

                
              </div> 
            ) : (
              page == 2 ? (
              <div className={s.form_body_gl}>
                <h3 >Регистрация</h3>
                <div className={s.back_gl} onClick={() => setPage(0)}><FaArrowLeftLong /><span> Я уже зарегистрирован</span></div>
                <br />
                <div className={s.input_phone_gl} id='phone_div'>
                  <input type="text" defaultValue={'+7'}  id='phone_input' />
                  <IoIosInformationCircleOutline />
                </div>
                <div id='email_div' className={s.input_phone_gl}>
                  <input placeholder='Email' id='email_input' type="text" />
                  <IoIosInformationCircleOutline />
                </div>
                <div id='password_div' className={s.input_phone_gl}>
                  <input placeholder='Пароль' id='password_input' type="password" /><IoIosInformationCircleOutline />
                </div>

            <div className={s.kod_2} style={{display:'none'}} id='phone_code'>
            {/* <p>На указанный номер поступит звонок. <a href="#">Введите последние 4 цифры номера телефона</a> , с которого был звонок.</p> */}
            <br /><br />
          <input type="text" name="" placeholder='Код подтверждения' id="verify_code" />
         <p>
          <a onClick={()=>{sendMessage()}} href="#">Отправить СМС</a> на указанный номер</p>
        </div>
                <div className={s.line_gl}></div>



                <p>
                  Нажимая на кнопку «Зарегистрироваться», я даю согласие на обработку моих персональных данных в соответствии с <a href="https://drive.google.com/file/d/1RlOINff9vQf9p1mgHgXrz1ExtXf0ZcJM/view">политикой информационной безопасности</a>. Мы не используем данные и не присылаем рассылки
                </p>
{resgister==0?( <button onClick={()=>sendMessage()} >Зарегистрироваться</button>
              ):(<button onClick={()=>sendMessage2()} >Зарегистрироваться</button>)}
               
              </div>

            ) : (
              page == 3 ? (
              <div className={s.form_body_gl2}>
                <h3>Напомнить пароль</h3>
                <div onClick={() => setPage(1)} style={{ marginTop: '40px', marginBottom: '30px' }} className={s.back_gl}><FaArrowLeftLong /><span>Вернуться к авторизации</span> </div>
                <p style={{ textAlign: 'center', textDecoration: 'none', }}> Введите email, указанный при регистрации. Мы пришлем ссылку на изменение пароля</p>
                <br />
                <div className={s.input_phone_gl2}>
                  <input placeholder='Email' type="text" /><IoIosInformationCircleOutline />
                </div>



                <button className={s.kod_o} onClick={() => setPage(4)} >Отправить код</button>
              </div>
            ) : (
              page == 4 ? (
              <div className={s.form_body_gl}>
                <h3 style={{ textAlign: 'center' }}>Письмо отправлено</h3>
                <div style={{ marginTop: '10px', textAlign: 'center' }} className={s.back_gl2}> На указанный email было отправлено письмо со ссылкой для смены пароля. </div>
                <br />
                <center>  
                  <input type="" />
                  <button onClick={() => { document.querySelector('#modal_gl').style = "display:none" }} style={{ marginTop: '10px', width: '30%', height: '45px' }}>Ок</button></center>

              </div>
            ) : (
              page==5?(
              <div className={s.form_body_gl}>
                <h3>Вход на сайт</h3>
                <div className={s.back_gl1}><span id={s.phone_1}> По телефону</span><span onClick={() => setPage(1)}>По паролю</span> </div>
                <br />
                <div className={s.input_phone_gl}>
                  <input value={phone2} disabled type="text" />
                </div>

                <p style={{ color: 'black', width: '100%' }} className={s.strong_p}>Код подтверждения был отправлен на вашу <strong style={{ color: 'black' }}>электронную почту </strong></p>
                <div className={s.input_phone_gl} id='code13'>
                  <input placeholder='Код подтверждения' id='code12' type="number" />
                </div>
                <button onClick={() => { openPageCheck() }} style={{ marginTop: '40px', width: '40%', height: '45px' }}>Отправить код</button>
              </div>):(
              <div id='akk' className={s.akkaunt}>
  <div className={s.wht}>
    <h3>Заявка принята</h3>
    <p>Отлично, аккаунт изготовителя успешно <br /> создан! <br/>
Скорее добавляйте свои блюда, чтобы <br/> пользователи могли их заказать!</p>
<button onClick={()=>{
  document.querySelector("#modal32").style="display:none;"
  window.location="/profile/" 
}} >Продолжить</button>
  </div>
</div>)
            )

            ))))}
<Head>
        <script src="https://api-maps.yandex.ru/2.1/?apikey=49b66546-e562-4119-b7ba-9adcce7e49a0&lang=en_US" />
      </Head>
</div>
);
}