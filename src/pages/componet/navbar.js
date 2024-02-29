import React, { useEffect, useState } from 'react'
import s from '../../styles/Navbar.module.css'
import { VscDeviceCamera } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

import { LuUnlink } from "react-icons/lu";
import { SlMenu } from "react-icons/sl";
import { FaLocationArrow } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import Input_error from './input_error';
import Input_error2 from './input_error2';
import { FaTelegramPlane, FaWeight } from "react-icons/fa";
import { SiVk } from "react-icons/si";
import { HiChevronDown } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { IoIosInformationCircleOutline, IoMdExit } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { FaArrowLeftLong } from "react-icons/fa6";
import url from '../host/config';
import { AiOutlineClose } from "react-icons/ai";
import { RiKey2Fill } from "react-icons/ri";
import Aos from 'aos';
import { FaCartShopping } from "react-icons/fa6";
import { LuChefHat } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiChatsDuotone } from "react-icons/pi";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  var [data, setData] = useState([])
  var [ish_yonalishi, setishYonalishi] = useState([])

  var [page, setPage] = useState(0)
 var [user,setUser]=useState(null)
  function getData() {
    axios.get(`${url()}/api/category`).then(res => {
      for (let i = 0; i < res.data.length; i++) {
      res.data[i].push=false
      }
      setData(res.data)
    axios.get(`${url()}/api/ishyonalishi`).then(res1 => {
      setishYonalishi(res1.data)
    }).catch(err => {
    })
    }).catch(err => {
    })
  }

  useEffect(() => {
    getData()
  setUser(localStorage.getItem("user"))
  }, [])

var [count,setCount]=useState(0)
function getshopcar(){
  var user=localStorage.getItem('user')
  var user1=localStorage.getItem('karzinka')
  if(user1){
axios.get(`${url()}/api/karzinka/${(JSON.parse(user))[0].id}`).then(res=>{
  setCount(res.data.count)
})
  }
}
useEffect(()=>{
    setInterval(() => {
      getshopcar()
    }, 1000);
})

  useEffect(() => {
    Aos.init();
  })


  function onmousenter1() {
    document.querySelector('#onmouse').style = `display:block;`
  }
  function NavbarDropdavnButton() {
    document.querySelector('#onmouse').style = `display:none;`
  }
  function openbtn() {

    document.querySelector('#openbtn1').style = `display:flex`
    document.querySelector('#openbtn2_big').style = `display:flex`


  }
  function close_modal() {
    document.querySelector('#openbtn1').style = `display:none`
    document.querySelector('#openbtn2_big').style = `display:none`
  }
  function mapyop() {
    document.querySelector('#openbtn_map').style = `display:none`
  }
  function adres() {
    document.querySelector('#openbtn_map').style = `display:flex`
    document.querySelector('#openbtn1').style = `display:none`
    document.querySelector('#openbtn2_big').style = `display:none`
  }
  function inpoch() {
    const a = document.querySelector('#inpoch').value
    if (a.length > 0) {
      document.querySelector('#inpoch_btn').style = `background-color:#06c160`
    } else {
      document.querySelector('#inpoch_btn').style = `background-color:#efefef;`
    }
  }

  
  var [error_phone, setErrorphone] = useState("")
  var [phone2, setPhone] = useState(7)

  function openPagePhone() {
    var phone = document.querySelector('#openUserpage_phone')
    var phone1 = document.querySelector('#openUserpage_phone1')
    var phone_error = document.querySelector('#error_phone')
    var code_phone = document.querySelector('#error_phone')

    if ((phone.value).length < 3) {
      phone1.style = "border:1px solid red"
      phone_error.style = "position:relative;z-index:2"
      setErrorphone("номер телефона слишком маленький")
    } else {
      var data_send = {
        phone: phone.value
      }
      axios.post(`${url()}/api/verify2`, data_send).then(res => {
        axios.post(`${url()}/api/verify`, data_send).then(res => {
          setPage(5)
          setPhone(phone.value)
        }).catch(err => {
          phone1.style = "border:1px solid red"
          phone_error.style = "position:relative;z-index:2"
          setErrorphone("Номер был введен неверно")
        })
      }).catch(err => {
        phone1.style = "border:1px solid red"
        phone_error.style = "position:relative;z-index:2;color:red"
        setErrorphone("Вы не зарегистрированы")
      })
    }
  }

  function openPageCheck() {
    var code = document.querySelector("#code12")
    var code13 = document.querySelector("#code13")

    var send_data = {
      code: code.value,
      phone: phone2
    }
    axios.post(`${url()}/api/verify/check`, send_data).then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      window.location = "/profile"
    }).catch(err => {
      code13.style = "border:1px solid red"
    })

  }

var [resgister,setRegister]=useState(0)
  function sendMessage() {
    var phone =document.querySelector("#phone_div")
    var phone_input=document.querySelector("#phone_input")
    var email_div=document.querySelector("#email_div")
    var email_input=document.querySelector("#email_input")
    var password_div=document.querySelector("#password_div")
    var password_input=document.querySelector("#password_input")

  if((phone_input.value).length>7 && (password_input.value).length>7 && (email_input.value).includes('@gmail.com')){
    phone_input.disabled=true
    email_input.disabled=true
    password_input.disabled=true
    phone.style="border:1px solid grey"
    email_div.style="border:1px solid grey"
    password_div.style="border:1px solid grey"
    setRegister(1)
    var data=new FormData()
    data.append("phone", phone_input.value )
  axios.post(`${url()}/api/verify`,data).then(res=>{
    document.querySelector('#phone_code').style="display:block"
  })
  }else{
if((phone_input.value).length<8){
  phone.style="border:1px solid red"
}
if((password_input.value).length<8){
  password_div.style="border:1px solid red"
}
if(!(email_input.value).includes('@gmail.com')){
  email_div.style="border:1px solid red"
}
  }
  }
function sendMessage2() {
  var phone_input=document.querySelector("#phone_input")
  var email_input=document.querySelector("#email_input")
  var password_input=document.querySelector("#password_input")
  var code=document.querySelector('#verify_code')
  var seb=new FormData()
  seb.append("phone",phone_input.value)
  seb.append("code",code.value)
axios.post(`${url()}/api/verify/check`,seb).then(res=>{
if(res.data.user){
localStorage.setItem("user",JSON.stringify(res.data.user))
window.location="/profile"
}else{
seb.append("email",email_input.value)
seb.append("password",password_input.value)
axios.post(`${url()}/api/register`,seb, { headers: {
  Authorization: `${res.data.token}`}
}).then(res=>{
  localStorage.setItem("user",JSON.stringify(res.data.data))
window.location="/profile"
})

}
}).catch(err=>{
  code.style="border:1px solid grey"

})

  }

  var [errorPassword, setErrorpassword] = useState('')
  function loginPage() {
    var phone = document.querySelector('#pp_phone')
    var phone_in = document.querySelector('#pp_phone_big')
    var phone_error = document.querySelector('#error_phone1')
    var password = document.querySelector('#pp_parol')
    var password_in = document.querySelector('#pp_parol_big')
    var password_error = document.querySelector('#error_password1')
    var send_data = {
      phone: phone.value,
      password: password.value
    }
    if ((phone.value).length < 3) {
      phone_in.style = "border:1px solid red"
      phone_error.style = "position:relative;z-index:2"
      setErrorphone("номер телефона слишком маленький")
      if ((password.value).length > 2) {
        password_in.style = "border:1px solid gray"
        password_error.style = "position:relative;z-index:-1"
        setErrorpassword("Пароль телефона слишком маленький")
      }
    } else if ((password.value).length < 3) {
      password_in.style = "border:1px solid red"
      password_error.style = "position:relative;z-index:2"
      setErrorpassword("Пароль телефона слишком маленький")
      if ((phone.value).length > 2) {
        phone_in.style = "border:1px solid gray"
        phone_error.style = "position:relative;z-index:-1"
        setErrorphone("Пароль телефона слишком маленький")
      }
    } else {
      axios.post(`${url()}/api/login`, send_data).then(res => {
        localStorage.setItem('token',res.data.token)
        console.log(res.data.user);
        localStorage.setItem('user',JSON.stringify(res.data.user))
        setTimeout(() => {
          window.location='/profile'
        }, 100);
      }).catch(err => {
        phone_in.style = "border:1px solid red"
        phone_error.style = "position:relative;z-index:2"
        setErrorphone("Номер телефона или пароль не совпадают")
        password_in.style = "border:1px solid red"
        password_error.style = "position:relative;z-index:2"
        setErrorpassword("Номер телефона или пароль не совпадают")
      })
    }



  }

function sendpover() {
// document.querySelector("#auto").style="display:none"
// document.quaerySelector("#akk").style="display:flex"
  var user_me=JSON.parse(localStorage.getItem("user"))
var send_data=new FormData()
send_data.append('user_id',user_me[0].id)
send_data.append('deskription',document.querySelector('#ocebya').value)
send_data.append('expertise',document.querySelector('#expertise123').value)
send_data.append('place',document.querySelector('#place123').value)
send_data.append('ish_yonalishi',document.querySelector('#ish_yonalishi123').value)
send_data.append('is_prepared',document.querySelector('#is_prepared123').value)

var document1= new FormData()
document1.append('user_povar_id',user_me[0].id)
document1.append('file', document.querySelector("#document123").files[0])

var document2= new FormData()
document2.append('user_povar_id',user_me[0].id)
document2.append('file', document.querySelector("#document1232").files[0])

var diploma= new FormData()
diploma.append('user_povar_id',user_me[0].id)
diploma.append('file', document.querySelector("#diploma123").files[0])

var user =new FormData()

if(document.querySelector("#send_prefil_image").files[0]){
user.append("image",document.querySelector("#send_prefil_image").files[0])
}else{
user.append("image",user_me[0].image)
}
user.append("phone",user_me[0].phone)
user.append("password",user_me[0].password)
user.append("email",document.querySelector("#imayyefamiliya").value)
user.append("name",document.querySelector("#email_put_profle").value)
axios.post(`${url()}/api/user_povar`,send_data).then(res=>{
axios.post(`${url()}/api/document`,document1).then(res2=>{
  axios.post(`${url()}/api/document`,document2).then(res3=>{
    axios.post(`${url()}/api/diploma`,diploma).then(res4=>{
axios.put(`${url()}/api/users_pover_put/${user_me[0].id}`,user).then(res=>{
     for (let i = 0; i < data.length; i++) {
   if(data[i].push){
  var yubdata=new FormData() 
  yubdata.append("user_id",user_me[0].id)
  yubdata.append("category_id",data[i].id)
axios.post(`${url()}/api/user_category`,yubdata).then(res=>{

}).catch(err=>{

})}}
  window.location="/profile"  
})

 
    })
  })
})
})

}

function sellectdatachange(key,check) {
  var a=[...data]
  a[key].push=check
  console.log(a);
  setData(a)
}
  return (
    <div>
      <div className={s.navbar_big}>
        <div className={s.navbar}>

          <div id='menu' className={s.navbar_menu}>
            <FaArrowLeft />
             <SlMenu onClick={() => setIsOpen(true)} />
          </div>

          <div className={s.navbar_logo}>
            <a href="/">
              <img src="https://img.freepik.com/free-vector/creative-chef-logo-template_23-2148980377.jpg" alt="img" /></a>
          </div>
          <div className={s.navbar_line}>
            <span id='aaa'><a href="/foods" onMouseEnter={() => onmousenter1()}>Все блюда
            </a>
              <HiChevronDown style={{ fontSize: '14px' }} /></span>
            <a href="/pover">Все повара</a>
            {/* <a href="/forCooks">Регистрация поваров</a> */}
    {user?((JSON.parse(user))[0].pover?
    ( <a href='/zakazi' style={{ color: '#06c160' }}>Мои заказы</a>):( 
      <a style={{  color: '#06c160' }} onClick={() => { document.   querySelector("#modal32").style = "display:flex"; }}>Стать поваром</a>)
       ):(
       <a style={{  color: '#06c160' }} onClick={() => { document.   querySelector("#modal_gl").style = "display:flex"; setPage(2) }}>Стать поваром</a>
       )}
          </div>
          <div className={s.navbar_btn}>
            <button onClick={() => openbtn()}><FiSend />Укажите адрес доставки<HiChevronDown /></button>
          </div> 
          {count==0?(<></>):(<a href='/basket' className={s.shopcar}><FaCartShopping className={s.shopcaricons} /><sup>{count}</sup></a>)} 
          <div className={s.navbar_vxod}>
         
            {user?(
            <div  className={s.account_img} onMouseEnter={()=>{document.querySelector('#modal_chiqish').style="display:block"}} 
            style={{background:`url(${(JSON.parse(user))[0].image})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
              <div id='modal_chiqish' style={{display:'none'}} onMouseLeave={()=>{document.querySelector('#modal_chiqish').style="display:none"}} className={s.modal_chiqish}>
              <a href="/profile">  <h3>{(JSON.parse(user))[0].name?((JSON.parse(user))[0].name):((JSON.parse(user))[0].email)}</h3></a>
                <div className={s.line2}></div>
                <h4 onClick={()=>{document.querySelector('#modal_chiqish').style="display:none"; localStorage.clear("user");window.location.reload()}}><IoExitOutline/>Выйти</h4>
              </div>
            </div>
            ):(
              <span onClick={() => { document.querySelector("#modal_gl").style = "display:flex"; setPage(0) }}><IoMdExit style={{ fontSize: '25px' }} />Войти</span> 
            )}
           
          </div>
        </div>
      </div>

      <div className={s.openbtn2_big} id='openbtn2_big' style={{ display: "none" }} >
        <div id='openbtn1' style={{ display: "none" }} className={s.openbtn1}>
          <div className={s.button_close_gl1} onClick={() => {
            document.querySelector('#openbtn2_big').style = "display:none"
            document.querySelector('#openbtn1').style = "display:none"

          }} ><MdClose style={{ fontSize: '30px' }} /></div>
          <div className={s.obtn}>
            <h3 onClick={() => close_modal()}>Укажите адрес доставки</h3>
            <button onClick={() => adres()}>Выбрать дом и улицу</button>
          </div>
        </div>
      </div>


      <div id='openbtn_map' className={s.openbtn_map}>
        <div className={s.openbtn_map2}>
          <div className={s.openbtn_map3}>
            <div className={s.openbtn_map3_df}>
              <h2>Введите адрес доставки</h2>
              <span onClick={() => mapyop()} ><IoMdClose style={{
                fontSize: '20px', cursor: 'pointer;'
              }} /></span>
            </div>
            <div className={s.openbtn_map3_df2}>
              <input id='inpoch' placeholder='Введите адрес' type="text" onKeyUp={() => inpoch()} />
              <button id='inpoch_btn'>Ок</button>
            </div>
            <div className={s.openbtn_map3_map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5994.922998991916!2d69.35282709072807!3d41.29882294560782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef594c08ad48d%3A0xb08a62f6608102ad!2z0KLRg9C30LXQu9GMLTEsINCi0LDRiNC60LXQvdGCLCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1707746865702!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
        </div>
      </div>



      <div id='onmouse' className={s.onmous} onMouseLeave={() => NavbarDropdavnButton()} >
        <ul>
          {data.map((item, key) => {
            return <li onClick={()=>{localStorage.setItem('category',item.id);window.location="/foods"}} key={key}><a href="#">{item.title}</a></li>
          })}
        </ul>
      </div>

      {isOpen ? (<div className={s.navbar_mobile_menu}>
        <div onClick={() => { setIsOpen(false) }} className={s.close1}>
          <MdClose style={{ fontSize: '35px',marginTop:'10px' }} />
          <img src="https://img.freepik.com/free-vector/creative-chef-logo-template_23-2148980377.jpg" alt="" />
          <span style={{fontSize:'17px',paddingRight:'30px'}}>Войти</span>
        </div>
        <div className={s.openmenu}>
          <p ><a href="/glavnstr">Все блюда</a></p>
          <p><a href="/pover">Все повара</a></p>
          <p  ><a style={{ color: '#06c160',marginBottom:'20px' }} href="#">Стать поваром</a></p>
          <hr style={{color:'grey',width:'95%',marginTop:'10px'}} />
      <div className={s.centre_app}>
      <div className={s.app}>
            <div className={s.tg}>
              <a href="#"><FaTelegramPlane style={{color:'gray',fontSize:'25px'}} /></a>
              <a href="#"><SiVk style={{color:'gray',fontSize:'25px'}} /></a>
            </div>
        
<div className={s.reklama}>
<div className={s.app_store}>
<div className={s.ap_i}>
<FaApple className={s.apple}/>
</div>
<div className={s.ap_soz}>
<p className={s.ap_p1}>Download on the</p>
<p className={s.ap_p2}>App Store</p>
</div>
</div>
<div className={s.google_play}>
<div className={s.gp_i}>
<FaGooglePlay className={s.google}/>

</div>
<div className={s.gp_soz}>
<p className={s.gp_p1}>GET IT ON</p>
<p className={s.gp_p2}>Google Play</p>
</div>
</div>
</div>
            </div>
          </div>
      </div>

      </div>) : (<div >
      </div>)}




      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" style={{ display: 'none' }} className={s.modal_gl} id="modal_gl">


        <div data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" className={s.form_gl}>

          <div className={s.button_close_gl} onClick={() => { document.querySelector('#modal_gl').style = "display:none" }}><AiOutlineClose /></div>
          {page == 0 ? (
            <div className={s.form_body_gl}>
              <h3>Вход на сайт</h3>
              <div className={s.back_gl1}><span id={s.phone_1}> По телефону</span><span onClick={() => setPage(1)}>По паролю</span> </div>
              <br />
              <div id='openUserpage_phone1' className={s.input_phone_gl}>
                <input id='openUserpage_phone' defaultValue="+7" type="text" />
                <div id='error_phone' style={{ position: "relative", zIndex: -1 }}>
                  <Input_error message={error_phone} />
                  <IoIosInformationCircleOutline />
                </div>
              </div>


              <button onClick={() => openPagePhone()} style={{ marginTop: '40px', width: '40%', height: '45px' }}>Отправить код</button>
            </div>) : (page == 1 ? (
              <div className={s.form_body_gl}>
                <h3>Вход на сайт</h3>
                <div className={s.back_gl1}><span onClick={() => setPage(0)} id={s.phone_1}> По телефону</span><span>По паролю</span> </div>
                <br />
                <div className={s.input_phone_gl} id='pp_phone_big' >
                  <input type="text" id='pp_phone' defaultValue="+7" />
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
                  <div onClick={() => setPage(3)} className={s.rikey}>
                    <RiKey2Fill className={s.fill_key} /><span style={{ cursor: 'pointer' }} >Напомнить пароль</span>
                  </div>
                </div> 

                
              </div> 
            ) : (page == 2 ? (
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

            ) : (page == 3 ? (
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
            ) : (page == 4 ? (
              <div className={s.form_body_gl}>
                <h3 style={{ textAlign: 'center' }}>Письмо отправлено</h3>
                <div style={{ marginTop: '10px', textAlign: 'center' }} className={s.back_gl2}> На указанный email было отправлено письмо со ссылкой для смены пароля. </div>
                <br />
                <center>  
                  <input type="" />
                  <button onClick={() => { document.querySelector('#modal_gl').style = "display:none" }} style={{ marginTop: '10px', width: '30%', height: '45px' }}>Ок</button></center>

              </div>
            ) : (
              <div className={s.form_body_gl}>
                <h3>Вход на сайт</h3>
                <div className={s.back_gl1}><span id={s.phone_1}> По телефону</span><span onClick={() => setPage(1)}>По паролю</span> </div>
                <br />
                <div className={s.input_phone_gl}>
                  <input value={phone2} disabled type="text" />
                </div>

                <p style={{ color: 'black', width: '100%' }} className={s.strong_p}>На указанный номер поступит звонок. Введите последние <strong style={{ color: 'black' }}>4 цифры номера телефона</strong> , с которого был звонок</p>
                <div className={s.input_phone_gl} id='code13'>
                  <input placeholder='Код подтверждения' id='code12' type="number" />
                </div>
                ashed changes
                <button onClick={() => { openPageCheck() }} style={{ marginTop: '40px', width: '40%', height: '45px' }}>Отправить код</button>
                <span>Отправить СМС на указанный номер</span>

              </div>
            )

            ))))}




        </div>
      </div>


      <div className={s.modal_stat}  id='modal32' >
        <div id='auto' style={{margin:'auto'}}>
<div className={s.form_stat}>
<div className={s.df_form}>
<div className={s.inp_1}>
<h1 className={s.s_h1}>СТАТЬ ПОВАРОМ</h1>

<MdClose onClick={()=>{
  document.querySelector("#modal32").style="display:none;"
  
}} style={{ fontSize: '30px',position:'absolute',top:'40px',right:'10%' }}/>
<h3 className={s.form_h3}>Расскажите о себе*</h3>

<div className={s.input}>
<input placeholder='Фамилия и имя' id='imayyefamiliya' type="text" />
<input placeholder='Email' id='email_put_profle' type="text" />
<textarea placeholder='О себе' name="" id="ocebya" cols="30" rows="10"></textarea>

<select name="" id="ish_yonalishi123">
{ish_yonalishi.map((item,key)=>{
  return <option value={item.title}>{item.title}</option>
})}  

</select>
</div>
<h3 className={s.form_h3}>Выберите категории меню*</h3>
<div className={s.df_zakaz}>
<div className={s.zakaz_check}>

{data.map((item,key)=>{
  return <div className={s.check}>
<input type="checkbox" onChange={(e)=>{sellectdatachange(key,e.target.checked)}} name="" id="" />
<h4>{item.title}</h4>
</div>
})
}


</div>

</div>

<h3 style={{marginTop:'20px',marginBottom:'20px'}} className={s.form_h3}>Где Вы готовите*</h3>
<input className={s.input1} type="text" id='place123' placeholder='adress' />
<div className={s.location}>
<FaLocationArrow   style={{color:'#06c160',fontSize:'20px',marginTop:'15px',marginLeft:'10px'}}/>
<input type="text" id='is_prepared123' placeholder='
Укажите адрес кухни' />

</div>
<a href="">Пример фото с кухней!</a>

<div className={s.input}>
  <h3  style={{marginTop:'20px',marginBottom:'20px'}} className={s.form_h3}>С какого года в деле</h3>
<input placeholder='С какого года в деле' id='expertise123' type="text" />

</div>


<div className={s.input}>
  <h3  style={{marginTop:'20px',marginBottom:'20px'}} className={s.form_h3}>Подтверждение личности</h3>
<p style={{fontSize:'17px',fontWeight:400}}> Чтобы покупатели могли Вам доверять - прикрепите <strong>фото или скан паспорта</strong> и отправьте заявку на модерацию (его увидит только администратор сервиса во избежании случаев мошенничества).</p>

<div className={s.link}>
  <input id='document123'  type="file" />
<LuUnlink  style={{color:'#06c160',fontSize:'22px'}}/>
  <span>Прикрепите фото лица с паспортом</span>
</div>
</div>


<div className={s.input}>
  <h3  style={{marginTop:'20px',marginBottom:'20px'}} className={s.form_h3}>Санитарная книжка</h3>
<p style={{fontSize:'17px',fontWeight:400}}> Если есть санитарная книжка — прикрепите ее фото, это выделит Вас среди других изготовителей.</p>

<div className={s.link}>
<input id='document1232' type="file" />
<LuUnlink  style={{color:'#06c160',fontSize:'22px'}}/>
  <span>Прикрепите фото санитарной книжки</span>
</div>
</div>



<div className={s.input}>
  <h3  style={{marginTop:'20px',marginBottom:'20px'}} className={s.form_h3}>У Вас есть сертификаты? Супер!</h3>
<p style={{fontSize:'17px',fontWeight:400}}>Вы проходили специализированные курсы или может у Вас профессиональное кулинарное образование? Это только большой плюс!</p>

<div className={s.link}>
<input id='diploma123' type="file" />
<LuUnlink   style={{color:'#06c160',fontSize:'22px',opacity:0.9}}/>
  <span>Прикрепите фото сертификата или диплома</span>
</div>
</div>

<div className={s.btn}>

<center><button onClick={()=>sendpover()}  >Отправить заявку</button>
<p><strong>Внимание! </strong>* - Поля обязательные к заполнению.</p></center>
</div>

</div>

<div className={s.png}>
<div  className={s.foto}>
 
 <div className={s.camera}> 
 <div>
 <input type="file"  id="send_prefil_image" className={s.input_dfi}  />
 
  <center>
   <VscDeviceCamera style={{fontSize:'50px'}} /></center> 
 <br/>
 
 <h5>Добавить фотку профиля</h5></div>
 </div>
 
 </div>

<div className={s.spn}>
  {/* <span> <br />
  </span> */}

  <span>Рекомендуем форматы:</span><br/>
  <span>jpeg,png,не более 10 MB</span>
</div>

 {/* <span >
 </span> */}
</div>

</div>
</div>
</div>

{/*  */}

<div id='akk' className={s.akkaunt}>
  <div className={s.wht}>
    <h3>Заявка принята</h3>
    <p>Отлично, аккаунт изготовителя успешно <br /> создан! <br/>
Скорее добавляйте свои блюда, чтобы <br/> пользователи могли их заказать!</p>
<button>Продолжить</button>
  <GrClose onClick={()=>{
  document.querySelector("#modal32").style="display:none;"
  
}}  className={s.whtclose} />
  </div>
</div>



{/*  */}


</div>
  



<div className={s.navbar_tegi}>
<div className={s.n_1}>
<div className={s.n_t2}>
<div className={s.blyuda}>
<p><LuChefHat className={s.b_i} /> <br /> <span>Все блюда</span></p>
</div>
<div className={s.blyuda}>
<p><IoBagHandleOutline className={s.b_i} /> <br /> <span>Мои заказы</span></p>
</div>
<div className={s.blyuda}>
<p><CiUser className={s.b_i} /> <br /> <span>Профил</span></p>
</div>
<div className={s.blyuda}>
<p><PiChatsDuotone className={s.b_i} /> <br /> <span>Чаты</span></p>
</div>
</div>
</div>
</div>





    </div>
  )
}