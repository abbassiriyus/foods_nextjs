import React from 'react'
import Navbar from '../pages/componet/navbar';
import s from "../styles/Politics.module.css"
export default function politics() {
  return (
    <div>
      <Navbar/>
      <main class={s.politics_page}>
<div class={s.router_page}>
  <a style={{color: '#06c160'}} href='' class={s.link}>Главная 
</a>
  <p class={s.link}>Условия использования сервиса и реквизиты компании</p>
</div>
<div class={s.politics_body}>
  <div class={s.politics_text}>
    <h2>УСЛОВИЯ ИСПОЛЬЗОВАНИЯ СЕРВИСА И РЕКВИЗИТЫ КОМПАНИИ</h2>
    <a href="#">Политика конфиденциальности и обработки персональных данных</a><br />
    <a href="#">Пользовательское соглашение</a><br />
    <a href="#">О компании</a>
<p><strong>Повар на связи</strong> — это сервис заказа блюд от проверенных домашних поваров и кондитеров.
Все повара, представленные на сервисе, проходят проверку: наша команда дегустирует блюда, запрашивает фотографии кухни, изучает аккаунты в социальных сетях.
Кондитеры могут приготовить десерты с индивидуальным дизайном и начинкой - оформите заказ на понравившийся десерт и уточните пожелания в чате. Забрать заказ можно самостоятельно или оформить доставку.</p>
<div class={s.svyaz}>
 <h5 style={{marginTop: '100px'}}> <span>©2024</span> Повар на связи</h5>
 <div class={s.email_contact}>
  <p style={{color: '#06c160'}}>
support@povarnasvyazi.ru</p>
<span style={{color: '#06c160'}}>Условия использования сервиса и информация о компании</span>
 </div>
  </div>
  </div>

<div data-aos="fade-left" class={s.rectangle}>
  <div class={s.asos_page}>
<p>Cкачай мобильное приложение <strong>Повар на связи</strong> </p>
<div class={s.image}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Download_on_the_App_Store_Badge_IT_RGB_blk.svg/2560px-Download_on_the_App_Store_Badge_IT_RGB_blk.svg.png" alt="" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Download_on_the_App_Store_Badge_IT_RGB_blk.svg/2560px-Download_on_the_App_Store_Badge_IT_RGB_blk.svg.png" alt="" />
</div>
<div class={s.icons}>
</div>
</div>
</div>
</div>
</main>
    </div>
  )
}

