import React, { useEffect, useState } from 'react'
import s from '../../styles/Navbar.module.css'
import { SlMenu } from "react-icons/sl";
import { FaArrowLeft } from "react-icons/fa6";
import Input_error from './input_error';
import Input_error2 from './input_error2';

import { FaTelegramPlane, FaWeight } from "react-icons/fa";
import { SiVk } from "react-icons/si";
import { HiChevronDown } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { IoIosInformationCircleOutline, IoMdExit } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { FaArrowLeftLong } from "react-icons/fa6";
import url from '../host/config';
import { AiOutlineClose } from "react-icons/ai";
import { RiKey2Fill } from "react-icons/ri";
import Aos from 'aos';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  var [data, setData] = useState([])
  var [page, setPage] = useState(0)
 var [user,setUser]=useState(null)
  function getData() {
    axios.get(`${url}/api/category`).then(res => {
      setData(res.data)
      console.log(res.data)
    }).catch(err => {
      console.log("not geting");
    })
  }

  useEffect(() => { getData()
  setUser(localStorage.getItem("user"))
  }, [])

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

  function crateNewUser() {

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
      axios.post(`${url}/api/verify2`, data_send).then(res => {
        axios.post(`${url}/api/verify`, data_send).then(res => {
          console.log(res.data);
          setPage(5)
          setPhone(phone.value)
        }).catch(err => {
          console.log(err);
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
    axios.post(`${url}/api/verify/check`, send_data).then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      window.location = "/profile"
    }).catch(err => {
      console.log(err);
      code13.style = "border:1px solid red"
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
      axios.post(`${url}/api/login`, send_data).then(res => {
        console.log(res.data);
        localStorage.setItem('token',res.data.token)
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
        console.log(err);
      })
    }



  }


  return (
    <div>
      <div className={s.navbar_big}>
        <div className={s.navbar}>

          <div id='menu' className={s.navbar_menu}>
            <FaArrowLeft /> <SlMenu onClick={() => setIsOpen(true)} />
          </div>

          <div className={s.navbar_logo}>
            <a href="/"><img src="https://img.freepik.com/free-vector/creative-chef-logo-template_23-2148980377.jpg" alt="img" /></a>
          </div>
          <div className={s.navbar_line}>
            <span id='aaa'><a href="/foods" onMouseEnter={() => onmousenter1()}>Все блюда
            </a>
              <HiChevronDown style={{ fontSize: '14px' }} /></span>
            <a href="/pover">Все повара</a>
            <a href="/forCooks">Регистрация поваров</a>
            <a style={{ color: '#06c160' }} onClick={() => { document.querySelector("#modal_gl").style = "display:flex"; setPage(2) }}>Стать поваром</a>
          </div>
          <div className={s.navbar_btn}>
            <button onClick={() => openbtn()}><FiSend />Укажите адрес доставки<HiChevronDown /></button>
          </div>
          <div className={s.navbar_vxod}>
         
            {user?(
            <div  className={s.account_img} style={{background:`url(${(JSON.parse(user))[0].image})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
              <div className={s.modal_chiqish}>
                <h3>{(JSON.parse(user))[0].name?((JSON.parse(user))[0].name):((JSON.parse(user))[0].email)}</h3>
                <div className={s.line2}></div>
                <h4 onClick={()=>{localStorage.clear("user");window.location.reload()}}><IoExitOutline/>Выйти</h4>
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
            return <li><a href="#">{item.title}</a></li>
          })}
        </ul>
      </div>

      {isOpen ? (<div className={s.navbar_mobile_menu}>
        <div onClick={() => { setIsOpen(false) }} className={s.close}>
          <MdClose style={{ fontSize: '35px' }} />
        </div>
        <div className={s.openmenu}>
          <p ><a href="/glavnstr">Все блюда</a></p>
          <p><a href="/pover">Все повара</a></p>
          <p><a href="/forCooks">Регистрация поваров</a> </p> <p  ><a style={{ color: '#06c160' }} href="#">Стать поваром</a></p>
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
                <center>  <button onClick={() => { document.querySelector('#modal_gl').style = "display:none" }} style={{ marginTop: '10px', width: '30%', height: '45px' }}>Ок</button></center>

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
    </div>
  )
}