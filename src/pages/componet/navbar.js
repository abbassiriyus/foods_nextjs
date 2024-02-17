import React, { useEffect, useState } from 'react'
import s from '../../styles/Navbar.module.css'
import { SlMenu } from "react-icons/sl";
import { FaArrowLeft } from "react-icons/fa6";
import { FaTelegramPlane, FaWeight } from "react-icons/fa";
import { SiVk } from "react-icons/si";
import { HiChevronDown } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { IoIosInformationCircleOutline, IoMdExit } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { FaArrowLeftLong } from "react-icons/fa6";
import url from '../host/config';
import { AiOutlineClose } from "react-icons/ai";
import { RiKey2Fill } from "react-icons/ri";
import Aos from 'aos';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
   var [data,setData]=useState([])
   var [page,setPage]=useState(0)

  function getData() {
    axios.get(`${url}/api/category`).then(res=>{
      setData(res.data) 
      console.log(res.data)
    }).catch(err=>{
      console.log("not geting");
    })
  }

  useEffect(()=>{getData()},[])

  useEffect(() => {
    Aos.init();
  })

function openmenu(){
    document.querySelector('#navbar_mobile_menu').style=``
  }

  function onmousenter1(){
    document.querySelector('#onmouse').style=`display:block;`
  }
  function onmous1(){
    document.querySelector('#onmouse').style=`display:none;`
  }

  function yop(){
    document.querySelector('#navbar_modalbig').style=`display:none;`
  }
  function och(){
    document.querySelector('#navbar_modalbig').style=`display:flex;`
  }
  function openModla (){ 
    document.querySelector("#none").style=`display:block`
    document.querySelector("#dddddd").style=`display:none`
    document.querySelector('#bir').style=`color: #06c160;    `
    document.querySelector('#ikki').style=`color:blue`
  }
  function leftModla(){
    document.querySelector("#none").style=`display:none`
    document.querySelector("#dddddd").style=`display:block`
    document.querySelector('#bir').style=`color:blue`
    document.querySelector('#ikki').style=`color: #06c160;    `
  }
  function openbtn(){

    document.querySelector('#openbtn1').style=`display:flex`
    document.querySelector('#openbtn2_big').style=`display:flex`

  
  }
  function close_modal(){
    document.querySelector('#openbtn1').style=`display:none`
    document.querySelector('#openbtn2_big').style=`display:none`
  }
  function mapyop(){
    document.querySelector('#openbtn_map').style=`display:none`
  }
  function adres(){
    document.querySelector('#openbtn_map').style=`display:flex`
    document.querySelector('#openbtn1').style=`display:none`
    document.querySelector('#openbtn2_big').style=`display:none`
  }
  // function openbtn2_big(){
  //   document.querySelector('#openbtn2_big').style
  // }

  function inpoch(){
    const a=document.querySelector('#inpoch').value
    if(a.length>0){
      document.querySelector('#inpoch_btn').style=`background-color:#06c160`
    }else{
      document.querySelector('#inpoch_btn').style=`background-color:#efefef;`
    }
  }
  const [isOpen2, setIsOpen2] = useState(false)
  return (
    <div>
      <div className={s.navbar_big}>
      <div className={s.navbar}>

        <div id='menu' className={s.navbar_menu}>
          <FaArrowLeft /> <SlMenu onClick={()=>setIsOpen(true)}/>
        </div>

        <div className={s.navbar_logo}>
          <a href="/"><img src="https://img.freepik.com/free-vector/creative-chef-logo-template_23-2148980377.jpg" alt="img" /></a>
        </div>
        <div className={s.navbar_line}>
          <span id='aaa'><a href="/foods" onMouseEnter={()=> onmousenter1()}>Все блюда
          </a>
          <HiChevronDown style={{fontSize:'14px'}} /></span> 
           <a href="/pover">Все повара</a>
          <a href="/forCooks">Регистрация поваров</a> 
          <a style={{ color: '#06c160' }} onClick={()=>{document.querySelector("#modal_gl").style="display:flex";setPage(2)}}>Стать поваром</a>
        </div>
        <div className={s.navbar_btn}>
          <button onClick={()=> openbtn()}><FiSend />Укажите адрес доставки<HiChevronDown /></button>
        </div>
        <div className={s.navbar_vxod}>
          <span onClick={()=>{document.querySelector("#modal_gl").style="display:flex";setPage(0)}}><IoMdExit style={{fontSize:'25px'}} />Войти</span>
        </div>
      </div>
      </div>

<div className={s.openbtn2_big} id='openbtn2_big' style={{display:"none"}} >
      <div id='openbtn1' style={{display:"none"}} className={s.openbtn1}>
        <div className={s.button_close_gl1} onClick={()=>{
          document.querySelector('#openbtn2_big').style="display:none"
          document.querySelector('#openbtn1').style="display:none"

        }} ><MdClose style={{fontSize:'30px'}} /></div>
        <div className={s.obtn}>
           <h3 onClick={()=> close_modal()}>Укажите адрес доставки</h3>
        <button onClick={()=> adres()}>Выбрать дом и улицу</button>
        </div>
      </div>
</div>


      <div id='openbtn_map' className={s.openbtn_map}>
        <div className={s.openbtn_map2}>
          <div className={s.openbtn_map3}>
            <div className={s.openbtn_map3_df}>
              <h2>Введите адрес доставки</h2>
              <span onClick={()=> mapyop()} ><IoMdClose style={{fontSize:'20px',cursor: 'pointer;'
}} /></span>
            </div>
            <div className={s.openbtn_map3_df2}>
              <input id='inpoch' placeholder='Введите адрес' type="text" onKeyUp={()=> inpoch()} />
              <button id='inpoch_btn'>Ок</button>
            </div>
            <div className={s.openbtn_map3_map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5994.922998991916!2d69.35282709072807!3d41.29882294560782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef594c08ad48d%3A0xb08a62f6608102ad!2z0KLRg9C30LXQu9GMLTEsINCi0LDRiNC60LXQvdGCLCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1707746865702!5m2!1sru!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
        </div>
      </div>
      


      <div id='onmouse' className={s.onmous} onMouseLeave={()=> onmous1()} >
        <ul>
{data.map((item,key)=>{
 return <li><a href="#">{item.title}</a></li>
})}  
        </ul>
      </div>
 
      {isOpen ? (<div className={s.navbar_mobile_menu}>
        <div onClick={()=>{setIsOpen(false)}} className={s.close}>
        <MdClose style={{fontSize:'35px'}} />
        </div>
        <div className={s.openmenu}>
       <p ><a href="/glavnstr">Все блюда</a></p> 
       <p><a href="/pover">Все повара</a></p>
          <p><a href="/forCooks">Регистрация поваров</a> </p> <p  ><a style={{color:'#06c160'}} href="#">Стать поваром</a></p>
          <div className={s.app}>
            <div className={s.tg}>
           <a href="#"><FaTelegramPlane /></a> 
           <a href="#"><SiVk /></a> 
            </div>
            <div className={s.apps}>
           <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png" alt="img" /></a> 
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="img" /></a>
            </div>
            </div>      
       </div>
        
      </div>) : (<div >
      </div>)}
   <div id='navbar_modalbig' className={s.navbar_modalbig}>
      <div className={s.navbar_modal2}>
        <div className={s.nav_modal2}>
          <div className={s.vxdod_df}>
            <h2>Вход на сайт</h2><span onClick={()=> yop()}><MdClose style={{fontSize:'35px'}}  /></span>
          </div>
          <div className={s.phone_df}>
            <p id='bir' onClick={()=>leftModla()}>По телефону</p><p id='ikki' onClick={()=>openModla()}>По паролю</p>
          </div>
          
           <div className={s.parol} style={{display:'none'}} id='none'>
       
        <div className={s.open2}>
          
          <div className={s.modal_inp}>
            <input placeholder='Телефон' type="text" value="" />
            <input placeholder='Парол' type="text" value="" />
          </div>
          <div className={s.modal_btn}>
            <button>Отправить код</button>
          </div>
        </div>
        
      </div> 
      <div className={s.bbbb} id='dddddd' style={{display:'block'}} >
      <div >
      
      </div>
          <div className={s.modal_inp}>
            <input placeholder='Телефон' type="text" value="" />
          </div>
          <div className={s.modal_btn}>
            <button>Отправить код</button>
          </div>
          
      </div>
        </div>
      </div>
</div>



<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" style={{display:'none'}} className={s.modal_gl} id="modal_gl">


<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  className={s.form_gl}>

  <div className={s.button_close_gl} onClick={()=>{document.querySelector('#modal_gl').style="display:none"}}><AiOutlineClose /></div>
  {page==0?(
  <div className={s.form_body_gl}>
<h3>Вход на сайт</h3>
<div className={s.back_gl1}><span id={s.phone_1}> По телефону</span><span onClick={()=>setPage(1)}>По паролю</span> </div>
<br />
<div className={s.input_phone_gl}>
<input value="+7" type="text" /><IoIosInformationCircleOutline />
</div>


<button style={{marginTop:'40px',width:'40%',height:'45px'}}>Отправить код</button>
</div>):(page==1?(
<div className={s.form_body_gl}>
<h3>Вход на сайт</h3>
<div className={s.back_gl1}><span onClick={()=>setPage(0)} id={s.phone_1}> По телефону</span><span>По паролю</span> </div>
<br />
<div className={s.input_phone_gl}>
<input type="text" /><IoIosInformationCircleOutline />
</div>
<div className={s.input_phone_gl}>
  <input placeholder='Пароль' type="password" /><IoIosInformationCircleOutline />
</div>
<div className={s.key_btn}>
<button style={{width:'30%'}} >Войти</button>
<div onClick={()=>setPage(3)} className={s.rikey}>
<RiKey2Fill className={s.fill_key}/><span style={{cursor:'pointer'}} >Напомнить пароль</span>
</div>
</div>
</div>
):(page==2?(
<div className={s.form_body_gl}>
<h3 >Регистрация</h3>
<div className={s.back_gl}  onClick={()=>setPage(0)}><FaArrowLeftLong /><span> Я уже зарегистрирован</span></div>
<br />
<div className={s.input_phone_gl}>
<input type="text" /><IoIosInformationCircleOutline />
</div>
<div className={s.input_phone_gl}>
  <input placeholder='Email' type="text" /><IoIosInformationCircleOutline />
</div>
<div className={s.input_phone_gl}>
  <input placeholder='Пароль' type="password" /><IoIosInformationCircleOutline />
</div>
<div className={s.line_gl}></div>
<p>
Нажимая на кнопку «Зарегистрироваться», я даю согласие на обработку моих персональных данных в соответствии с <a href="https://drive.google.com/file/d/1RlOINff9vQf9p1mgHgXrz1ExtXf0ZcJM/view">политикой информационной безопасности</a>. Мы не используем данные и не присылаем рассылки

</p>
<button>Зарегистрироваться</button>
</div>

):(page==3?(
  <div className={s.form_body_gl}>
  <h3>Напомнить пароль</h3>
  <div onClick={()=>setPage(1)} style={{marginTop:'40px',marginLeft:'5%'}} className={s.back_gl}><FaArrowLeftLong /><span>Вернуться к авторизации</span> </div>
  <p className={s.p_style}>Введите email, указанный при регистрации. Мы пришлем ссылку на изменение пароля</p>
  <br />
  <div className={s.input_phone_gl}>
  <input value="+7" type="text" /><IoIosInformationCircleOutline />
  </div>
  
  
  <button style={{marginTop:'40px',width:'40%',height:'45px'}}>Отправить код</button>
  </div>
):(
  <div className={s.form_body_gl}>
  <h3>Вход на сайт</h3>
  <div className={s.back_gl1}><span id={s.phone_1}> По телефону</span><span onClick={()=>setPage(1)}>По паролю</span> </div>
  <br />
  <div className={s.input_phone_gl}>
  <input value="+7" type="text" /><IoIosInformationCircleOutline />
  </div>
  
  
  <button style={{marginTop:'40px',width:'40%',height:'45px'}}>Отправить код</button>
  </div>
))))}


</div>
</div>
    </div>
  )
}