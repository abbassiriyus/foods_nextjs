// import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// export default class navbar extends Component {
//   render() {
//     return (
//       <div>
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">
//           <img src="https://img.freepik.com/free-vector/creative-chef-logo-template_23-2148980377.jpg" alt="image" /></Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//                         <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//             <NavDropdown.Item href="#action3">Все блюда
// </NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//               Блюда и десерты
//               </NavDropdown.Item>

//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>


//       </div>
//     )
//   }
// }




import React, { useState } from 'react'
import s from '../styles/Navbar.module.css'
import { SlMenu } from "react-icons/sl";
import { FaArrowLeft } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiVk } from "react-icons/si";
import { HiChevronDown } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { IoMdExit } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
  }
  function yy(){
    document.querySelector('#openbtn1').style=`display:none`
    document.querySelector('#openbtn2_big').style=`display:none`
  }
  function mapyop(){
    document.querySelector('#openbtn_map').style=`display:none`
  }
  function adres(){
    document.querySelector('#openbtn_map').style=`display:flex`
    document.querySelector('#openbtn1').style=`display:none`
  }
  // function openbtn2_big(){
  //   document.querySelector('#openbtn2_big').style
  // }
  const [isOpen2, setIsOpen2] = useState(false)
  return (
    <div>
      <div className={s.navbar_big}>
      <div className={s.navbar}>

        <div id='menu' className={s.navbar_menu}>
          <FaArrowLeft /> <SlMenu onClick={()=>setIsOpen(true)}/>
        </div>

        <div className={s.navbar_logo}>
          <a href="#"><img src="https://img.freepik.com/free-vector/creative-chef-logo-template_23-2148980377.jpg" alt="img" /></a>
        </div>
        <div className={s.navbar_line}>
         <span id='aaa'><a href="#" onMouseEnter={()=> onmousenter1()}>Все блюда
          </a><HiChevronDown style={{fontSize:'14px'}} /></span> 
           <a href="#">Все повара</a>
          <a href="#">Регистрация поваров</a> 
          <a style={{ color: '#06c160' }} href="#">Стать поваром</a>
        </div>
        <div className={s.navbar_btn}>
          <button onClick={()=> openbtn()}><FiSend />Укажите адрес доставки<HiChevronDown /></button>
        </div>
        <div className={s.navbar_vxod}>
          <span onClick={()=> och()}><IoMdExit style={{fontSize:'25px'}}/>Войти</span>
        </div>
      </div>
      </div>

      <div id='openbtn1' className={s.openbtn1}>
        <div className={s.obtn}>
           <h3 onClick={()=> yy()}>Укажите адрес доставки</h3>
        <button onClick={()=> adres()}>Выбрать дом и улицу</button>
        </div>
       
      </div>

      <div id='openbtn2_big' className={s.openbtn2_big} onClick={()=> openbtn2_big()}>
      <div id='openbtn2' className={s.openbtn2}>
        <div className={s.obtn2}>
           <h3 onClick={()=> yy()}>Укажите адрес доставки</h3>
        <button>Выбрать дом и улицу</button>
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
              <input placeholder='Введите адрес' type="text" />
              <button>Ок</button>
            </div>
            <div className={s.openbtn_map3_map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5994.922998991916!2d69.35282709072807!3d41.29882294560782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef594c08ad48d%3A0xb08a62f6608102ad!2z0KLRg9C30LXQu9GMLTEsINCi0LDRiNC60LXQvdGCLCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1707746865702!5m2!1sru!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
        </div>
      </div>
      


      <div id='onmouse' className={s.onmous} onMouseLeave={()=> onmous1()} >
        <ul>
          <li><a href="#">Торты</a></li>
          <li><a href="#">Бенто торты</a></li>
          <li><a href="#">Пирожные</a></li>
          <li><a href="#">Шоколад, конфеты, пряники</a></li>
          <li><a href="#">Клубника в шоколаде</a></li>
          <li><a href="#">Все десерты</a></li>
          <li><a href="#">Закуски и гастробоксы</a></li>
          <li><a href="#">Полезное и здоровое</a></li>
          <li><a href="#">Все блюда</a></li>
          <li><a href="#">Мясная гастрономия</a></li>
          <li><a href="#">Мёд</a></li>
          <li><a href="#">На компанию</a></li>
          <li><a href="#">Супы</a></li>
          <li><a href="#">Салаты</a></li>
          <li><a href="#">Пироги и выпечкаАзиатская кухня</a></li>
          <li><a href="#">Вторые блюда</a></li>
          <li><a href="#">Приготовим сегодня</a></li>
          <li><a href="#">Обед и ужин</a></li>
          <li><a href="#">Вкусное и полезное</a></li>
          <li><a href="#">Продукты от фермеров</a></li>
          <li><a href="#">Продукты от изготовителей</a></li>
          <li><a href="#">Заготовки и заморозка</a></li>
          <li><a href="#">14 февраля</a></li>
        </ul>
      </div>
 
      {isOpen ? (<div className={s.navbar_mobile_menu}>
        <div onClick={()=>{setIsOpen(false)}} className={s.close}>x</div>
        <div className={s.openmenu}>
       <p ><a href="#">Все блюда</a></p> <p><a href="#">Все повара</a></p>
          <p><a href="#">Регистрация поваров</a> </p> <p  ><a style={{color:'#06c160'}} href="#">Стать поваром</a></p>

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


        {/* <div id='navbar_modalbig' className={s.navbar_modalbig}>
      <div className={s.navbar_modal2}>
        <div className={s.nav_modal2}>
          <div className={s.vxdod_df}>
            <h2>Вход на сайт</h2><span onClick={()=> yop()}><MdClose style={{fontSize:'35px'}}  /></span>
          </div>
          <div className={s.phone_df}>
            <p>По телефону</p><p onClick={()=>setIsOpen2(true)}>По паролю</p>
          </div>
          
          {isOpen2 ? (<div className={s.parol}>
        <div onClick={()=>{setIsOpen2(false)}} className={s.close}>x</div>
        <div className={s.open2}>
          <span>oxshamadi</span>
          <div className={s.modal_inp}>
            <input placeholder='Телефон' type="text" value="" />
            <input placeholder='Парол' type="text" value="" />
          </div>
          <div className={s.modal_btn}>
            <button>Отправить код</button>
          </div>
        </div>
        
      </div>) : (<div >
       tel
      </div>)}
          <div className={s.modal_inp}>
            <input placeholder='Телефон' type="text" value="" />
          </div>
          <div className={s.modal_btn}>
            <button>Отправить код</button>
          </div>
          
        </div>
      </div>
</div> */}
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
      <div className="bbbb" id='dddddd' style={{display:'block'}} >
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

    </div>
  )
}
