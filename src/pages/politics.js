import React from 'react'
import s from "../styles/politics.module.css"
import { BsApple } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";  


export default function politics() {
  return (
    <div>
      <main className={s.politics_page}>
<div className={s.router_page}>
  <a href='' className={s.link1}>Главная</a>
  <p className={s.link}>Условия использования сервиса и реквизиты компании</p>
</div>
<div className={s.politics_body}>
  <div className={s.politics_text}>
    <h2>УСЛОВИЯ ИСПОЛЬЗОВАНИЯ СЕРВИСА И РЕКВИЗИТЫ КОМПАНИИ</h2>
    <a href="#">Политика конфиденциальности и обработки персональных данных</a><br />
    <a href="#">Пользовательское соглашение</a><br />
    <a href="#">О компании</a>
<p><strong>Повар на связи</strong> — это сервис заказа блюд от проверенных домашних поваров и кондитеров.

Все повара, представленные на сервисе, проходят проверку: наша команда дегустирует блюда, запрашивает фотографии кухни, изучает аккаунты в социальных сетях.

Кондитеры могут приготовить десерты с индивидуальным дизайном и начинкой - оформите заказ на понравившийся десерт и уточните пожелания в чате. Забрать заказ можно самостоятельно или оформить доставку.</p>
<div className={s.svyaz}>

<h5 > <span>©2024</span> Повар на связи</h5>

 <div className={s.email_contact}>
  <p style={{color: '#06c160'}}>
support@povarnasvyazi.ru</p>
<span style={{color:' #06c160'}}>Условия использования сервиса и информация о компании</span>
 </div>
  </div>
  </div>

<div data-aos="fade-left" className={s.rectangle}>
  <div className={s.asos_page}>
<h5><span>Cкачай мобильное приложение <br /></span> Повар на связи</h5>
<div className={s.image}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Download_on_the_App_Store_Badge_IT_RGB_blk.svg/2560px-Download_on_the_App_Store_Badge_IT_RGB_blk.svg.png" alt="" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Download_on_the_App_Store_Badge_IT_RGB_blk.svg/2560px-Download_on_the_App_Store_Badge_IT_RGB_blk.svg.png" alt="" />
</div>
{/* <div className={s.svyaz_2} id='svyaz_none'>

<h5 > <span>©2024</span> Повар на связи</h5>

 <div className={s.email_contact}>
  <p style={{color: '#06c160'}}>
support@povarnasvyazi.ru</p>
<span style={{color:' #06c160'}}>Условия использования сервиса и информация о компании</span>
 </div>
  </div> */}
<div className={s.icons}>
{/* <BiLogoTelegram />  */}

</div>
</div>
</div>
</div>
<div className={s.svyaz_2}>

<h5 > <span>©2024</span> Повар на связи</h5>

 <div className={s.email_contact_2}>
  <p style={{color: '#06c160'}}>
support@povarnasvyazi.ru</p>
<span style={{color:' #06c160'}}>Условия использования сервиса и информация о компании</span>
 </div>
  </div>
</main>




    </div>
  )
}

