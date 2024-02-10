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
export default function navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function openmenu(){
    document.querySelector('#navbar_mobile_menu').style=``
  }
  return (
    <div>
      <div className={s.navbar}>

        <div id='menu' className={s.navbar_menu}>
          <FaArrowLeft /> <SlMenu onClick={()=>setIsOpen(true)}/>
        </div>

        <div className={s.navbar_logo}>
          <img src="https://img.freepik.com/free-vector/creative-chef-logo-template_23-2148980377.jpg" alt="img" />
        </div>
        <div className={s.navbar_line}>
          <a href="#" onMouseLeave={onmous}>Все блюда</a> <a href="#">Все повара</a>
          <a href="#">Регистрация поваров</a> <a style={{ color: '#06c160' }} href="#">Стать поваром</a>
        </div>
        <div className={s.navbar_btn}>
          <button>Укажите адрес доставки</button>
        </div>
        <div className={s.navbar_vxod}>
          <span>Войти</span>
        </div>
      </div>

      <div className="onmous">
        <ul>
          <li><a href="#">Торты</a></li>
          <li><a href="#">Бенто торты</a></li>
          <li><a href="#">Пирожные</a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>

      {isOpen ? (<div className={s.navbar_mobile_menu}>
        <div onClick={()=>{setIsOpen(false)}} className={s.close}>x</div>
        <div className={s.openmenu}>
       <p ><a href="#">Все блюда</a></p> <p><a href="#">Все повара</a></p>
          <p><a href="#">Регистрация поваров</a> </p> <p  ><a style={{ color: '#06c160' }} href="#">Стать поваром</a></p>

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
    </div>
  )
}
