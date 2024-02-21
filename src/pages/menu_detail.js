import React, { useEffect, useState } from 'react'
import { BiCommentDetail } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuNavigation } from "react-icons/lu";
import { FaVk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Navbar from './componet/navbar';
import { TfiClose } from "react-icons/tfi";
import Footer from './componet/footer';
import { FaWhatsapp } from "react-icons/fa";
import s from "../styles/menuDetail.module.css"
export default function menu_detail() {
  var [accor,setAccor]=useState(1)
  var[data,setData]=useState([])

  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem('one')))
  },[])

  return (
    <div>
      <Navbar/>
      <div className={s.tort}>
<h2>БЕНТО КОТЫ</h2>
<div  onClick={()=>{document.querySelector('#yopil').style='display:flex'}} className={s.share1}>
<IoShareSocialOutline  /><span>Поделиться</span>
</div>
      </div>
<div className={s.cake}>
  <div className={s.cake1}>
    <div style={{background:`url(${data.image})`,        backgroundSize:'100% 100%'}} className={s.cake_img}>
      <h3 className={s.green_back}>Приготовим сегодня</h3>
    </div>
    <div className={s.cake_desc}>
<h3 >Описание и состав</h3>
<p>творожный сыр, сливочное масло, сахарная пудра, мука, яйца, сахар, какао, растительное масло, разрыхлительбисквит: ванильныйшоколадный морковныйкрасный бархат начинка: клубникамалинасмородинавишня бананы в карамелисолёная карамель Во все тортики входит кремчиз🎂 Цветовая гамма, надпись, посыпка могут быть изменены на ваш вкус 😌</p>
<h3>Условия доставки</h3>
<p>250 руб. до 20 км. от адреса изготовителя, более - по тарифам Яндекс Доставка.</p> <br />



{accor==0?(<div className={s.trans_span}>
  <h3>Условия хранения</h3>
  <p>72 часа в холодильнике</p>
  <h3>Инфо</h3>
  <div className={s.info}>
    <div className={s.ves}>
<h4>Вес</h4>
<h4>Время <br />приготовления</h4>
    </div>
    <div className={s.day}>
<p>400</p>
<p>1 <br />день</p>
    </div>
  </div>
 
  <span onClick={()=>setAccor(1)}>Скрыть</span>
</div>):(
<div className={s.trans_span}>
  <span onClick={()=>setAccor(0)}>Прочитать подробнее
</span>
</div>
)}

<div className={s.buy}>
<div className={s.price}>
<h3>1 000 ₽</h3>
<p>400</p>
</div>
<button>В корзину</button>
</div>
    </div>
    <div className={s.about_cook}>
    <div className={s.cards}>
<div className={s.card}>
<div className={s.profil}>
<img src={data.user_image} alt="" />
<div className={s.bal}>
<p className={s.p1}>{data.mark} <span><BiCommentDetail className={s.comment} /> {data.mark_org}</span></p>
<p className={s.p2}>
<FaStar className={s.star} />
<FaStar className={s.star} />
<FaStar className={s.star} />
<FaStar className={s.star} />
<FaStar className={s.star} />
</p>
<p className={s.p3}><CiLocationArrow1 className={s.location} /> 0.0 км от вас</p>
</div>
</div>
<div className={s.p_ism}>
<h1>{data.username}{data.name}</h1>
</div>
<p className={s.ism_p}>Домашний повар</p>
<div className={s.p_b}>
<button><LuNavigation /> Написать сообщение</button>
</div>
<div className={s.vbr_blyud}>
<p>Все блюда</p>
<p>Обед и ужин</p>
<p>Приготовим сегодня</p>
<p>Второе блюда</p>
<p>Русская кухня</p>
</div>

</div>
</div>
    </div>
  </div>
</div>

<div id='yopil' className={s.modal_ssilka}>
  <div  className={s.copy_ssilka}>
<div className={s.ichi}>
<div className={s.close1}>
  <h3>Поделиться</h3>
  <TfiClose onClick={()=>{document.querySelector("#yopil").style='display:none'}} style={{fontSize:'22px'}} />
</div>
<div className={s.sayt}>
<div className={s.vk}>
<FaVk />
</div>
<div className={s.instagram}>
<FaInstagram />
</div>
<div className={s.telegram}>
<FaTelegramPlane />
</div>
<div className={s.whatsapp}>
<FaWhatsapp />
</div>

</div>
<hr className={s.hr}/>
<h6 style={{fontWeight:500,fontSize:'14px'}}>Ссылка на блюдо</h6>
<input className={s.inp_value} value={'https://povarnasvyazi.ru/menu/detail/2816'} type="text" />
<div className={s.btns}>
<button id='blck' onClick={()=>{document.querySelector('#blck').style="display:none";navigator.clipboard.writeText('https://povarnasvyazi.ru/menu/detail/2816')
document.querySelector("#nn").style="display:block"
}} className={s.block}>Копировать ссылку</button>
<button id='nn'  className={s.none}>Ссылка скопирована!</button>
</div>
</div>
  </div>
</div>
<div className={s.about_c}>
 <div className={s.coment_1}>
 <div className={s.buyers}>
<h3>ОТЗЫВЫ ПОКУПАТЕЛЕЙ</h3>
<h4>2 ОТЗЫВА</h4>
  </div>
  <div className={s.star_buyers}>
<div className={s.between}>
<img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
<div className={s.stars}>
  <div className={s.name}>
    <h4>Вероника Бердникова</h4><p>19 декабря 2023</p>
  </div>
  <div className={s.star}>
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  </div>
</div>

</div>
  </div>
  <p className={s.bento} style={{marginLeft:'7%'}}>Большое спасибо за бенто, все на высшем уровне и дизайн и вкус. Морковный с карамелью - просто бомба, все оценили.</p>
 </div>
 <hr className={s.hr} />
 <div className={s.coment_1}>

  <div className={s.star_buyers}>
<div className={s.between}>
<img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
<div className={s.stars}>
  <div className={s.name}>
    <h4>Вероника Бердникова</h4><p>19 декабря 2023</p>
  </div>
  <div className={s.star}>
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  </div>
</div>

</div>
  </div>
  <p className={s.bento} style={{marginLeft:'7%'}}>Спасибо большое за тортик🤗 Ооочень вкусный и быстро доставили🔥</p>
 </div>
</div>
<Footer/>
    </div>
  )
}
