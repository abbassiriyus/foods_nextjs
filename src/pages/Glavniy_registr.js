import React, { useEffect, useState } from 'react'
import img1 from "../images/woman.png"
import Image from "next/image";
import n from "../styles/Glavnstr.module.css"
import s from "../styles/Navbar.module.css"
import Input_error from './componet/input_error';
import Input_error2 from './componet/input_error2';
import { IoIosInformationCircleOutline, IoMdExit } from "react-icons/io";
import axios from 'axios';
import url from './host/config';
import Aos from 'aos';
import { AiOutlineClose } from 'react-icons/ai';
export default function Glavniy_registr() {
 

  var [page, setPage] = useState(0)
 var [user,setUser]=useState(null)

  useEffect(() => {
   
    getComany()
    setTimeout(() => {
      setUser(JSON.parse(localStorage.getItem("user")))
    console.log(JSON.parse(localStorage.getItem("user")),'oneUserD');
    }, 1000);
  }, [])

var [count,setCount]=useState(0)
function getshopcar(){
  var user2=JSON.parse(localStorage.getItem('user'))

  var user1=localStorage.getItem('karzinka')
  if(user1){
axios.get(`${url()}/api/karzinka/${user2[0].id}`).then(res=>{
  var a=res.data.filternew.filter(item=>item.food)
  setCount(a.length)
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

var [company,SetCompany]=useState({
  image:'https://img.freepik.com/free-vector/creative-chef-logo-template_23-2148980377.jpg'
})
 var getComany=()=>{
  axios.get(`${url()}/api/company`).then(res=>{
    if(res.data.length>0){
      SetCompany(res.data[0])
    }
  })
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
        email: phone.value
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
      email: phone2
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
    
    var data1=new FormData()
    
    data1.append("email", email_input.value )
  axios.post(`${url()}/api/verify`,data1).then(res=>{
    phone_input.disabled=true
    email_input.disabled=true
    password_input.disabled=true
    phone.style="border:1px solid grey"
    email_div.style="border:1px solid grey"
    password_div.style="border:1px solid grey"
    setRegister(1)
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
  seb.append("email",email_input.value)
  seb.append("code",code.value)
axios.post(`${url()}/api/verify/check`,seb).then(res=>{
if(res.data.user){
localStorage.setItem("user",JSON.stringify(res.data.user))
window.location="/profile/"
}else{
seb.append("phone",phone_input.value)
seb.append("password",password_input.value)
axios.post(`${url()}/api/register`,seb, { headers: {
  Authorization: `${res.data.token}`}
}).then(res=>{
  localStorage.setItem("user",JSON.stringify(res.data.data))
window.location="/profile/"
})

}
}).catch(err=>{
  code.style="border:1px solid grey"

})

  }
  const [selectedPlace, setSelectedPlace] = useState(null);


  useEffect(() => {
   
   if(localStorage.getItem('localmap')){
   setSelectedPlace(localStorage.getItem('localmap'))
   }
  }, []);
  var [errorPassword, setErrorpassword] = useState('')
  function loginPage() {
    var phone = document.querySelector('#pp_phone')
    var phone_in = document.querySelector('#pp_phone_big')
    var phone_error = document.querySelector('#error_phone1')
    var password = document.querySelector('#pp_parol')
    var password_in = document.querySelector('#pp_parol_big')
    var password_error = document.querySelector('#error_password1')
    var send_data = {
      email: phone.value,
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
        
        localStorage.setItem('user',JSON.stringify(res.data.user))
        setTimeout(() => {
          window.location='/profile/'
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




  return (
    <div>

        {user?(<> <div className={n.qoshilish}>
<div className={n.q_soz}>
<h1 style={{fontSize:'23px'}}>НАЧНИ ГОТОВИТЬ  ВМЕСТЕ С НАМИ!</h1>
<p className={n.qoshish_p2}>Мы объединяем всех, кто любит готовить, чтобы каждый мог разместить свою продукцию и зарабатывать больше!</p>

</div>
<div className={n.q_img}>
<Image src={img1} alt="" />
</div>
</div>

<div className={n.qoshilish2}>
<div className={n.q_soz}>
<h1 style={{fontSize:'30px'}}>НАЧНИ ГОТОВИТЬ  ВМЕСТЕ С НАМИ!</h1>
<p className={n.qoshish_p2}>Мы объединяем всех, кто любит готовить, чтобы каждый мог разместить свою продукцию и зарабатывать больше!</p>

</div>
<div className={n.q_img}>
<Image src={img1} alt="" />
</div>
</div>
</>):(<>  <div className={n.qoshilish}>
<div className={n.q_soz}>
<h1>ПРИСОЕДИНЯЙТЕСЬ!</h1>
<p className={n.qoshish_p1}>— Максимально просто и прозрачно, честное слово!</p>
<p className={n.qoshish_p2}>Вы повар, кондитер или фермер? <br />
— регистрируйтесь в сервисе, публикуйте свои замечательные блюда или продукты, откликайтесь на заказы. Профит!</p>
<button onClick={() => { document.querySelector("#modal_gl").style = "display:flex"; setPage(0) }}>Зарегистрироватся</button>
</div>
<div className={n.q_img}>
<Image src={img1} alt="" />
</div>
</div>

<div className={n.qoshilish2}>
<div className={n.q_soz}>
<h1>ПРИСОЕДИНЯЙТЕСЬ!</h1>
<p className={n.qoshish_p1}>— Максимально просто и прозрачно, честное слово!</p>
<p className={n.qoshish_p2}>Вы повар, кондитер или фермер? <br />
— регистрируйтесь в сервисе, публикуйте свои замечательные блюда или продукты, откликайтесь на заказы. Профит!</p>
<div className={n.q_soz_b}>
<button onClick={() => { document.querySelector("#modal_gl").style = "display:flex"; setPage(0) }}>Зарегистрироватся</button>
</div>
</div>
<div className={n.q_img}>
<Image src={img1} alt="" />
</div>
</div></>)}

  
  


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
        </div>
      </div>









    </div>
  )
}
