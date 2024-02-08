import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import s from"../styles/Glavnstr.module.css"
import { IoIosSearch } from "react-icons/io";
export default function glavnstr() {
var [data,setData]=useState([
{
img : "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/af944830ed2445956672f8103d2f0a78e8b3b185/af944830ed2445956672f8103d2f0a78e8b3b185-wc800.png",
img_profil : "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136-wc200.jpeg",
title : "1Шах-плов",
name : "Хатира Мамедова",
star : "star",
star_bal : "5.0",
kommment : "komentariy",
yonalish : "Домашний повар",
narxi : "2 200₽",
zakaz_b : "Заказть"
},
{
img : "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/af944830ed2445956672f8103d2f0a78e8b3b185/af944830ed2445956672f8103d2f0a78e8b3b185-wc800.png",
img_profil : "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136-wc200.jpeg",
title : "2Шах-плов",
name : "Хатира Мамедова",
star : "star",
star_bal : "5.0",
kommment : "komentariy",
yonalish : "Домашний повар",
narxi : "2 200₽",
zakaz_b : "Заказть"
},
{
img : "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/af944830ed2445956672f8103d2f0a78e8b3b185/af944830ed2445956672f8103d2f0a78e8b3b185-wc800.png",
img_profil : "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136-wc200.jpeg",
title : "3Шах-плов",
name : "Хатира Мамедова",
star : "star",
star_bal : "5.0",
kommment : "komentariy",
yonalish : "Домашний повар",
narxi : "2 200₽",
zakaz_b : "Заказть"
},
{
img : "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/af944830ed2445956672f8103d2f0a78e8b3b185/af944830ed2445956672f8103d2f0a78e8b3b185-wc800.png",
img_profil : "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136-wc200.jpeg",
title : "4Шах-плов",
name : "Хатира Мамедова",
star : "star",
star_bal : "5.0",
kommment : "komentariy",
yonalish : "Домашний повар",
narxi : "2 200₽",
zakaz_b : "Заказть"
},
])

var [swiper,setSwipper]=useState(0)
function plus() {
if(swiper+1===data.length){
setSwipper(0)
}else{
setSwipper(swiper+1)
}
console.log(swiper);
}
function minus() {
if(swiper===0){
setSwipper(data.length-1)
}else{
setSwipper(swiper-1)
}
console.log(swiper);
}
return (
<div>
<div className={s.header}>
<div className= {s.h_h1}>
<h1>Привет!</h1>
</div>
<div className={s.head}>
<div className={s.h_soz}>
<h1 className={s.h_h2}>У НАС ЕСТЬ <br /> ЧТО ПОЕСТЬ!</h1>
<p className={s.h_p1}>Тебе не нужно покупать продукты, готовить и мыть посуду. Наслаждайся вкусной едой без лишних забот!</p>
<button className={s.h_button}>Выбрать блюда</button>
<p className={s.h_p2}>Вы повар? — <span className={s.h_span1}>давайте с нами!</span></p>
<span className={s.h_span2}>Регистрация займет всего 3 минуты</span>
</div>
<div className={s.h_swip_img}>
<div className={s.swiper}>
<img className={s.swiper_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/af944830ed2445956672f8103d2f0a78e8b3b185/af944830ed2445956672f8103d2f0a78e8b3b185-wc800.png" alt="" />
<div className={s.s_i}>
<FaArrowLeft className={s.strelka} onClick={()=>{minus()}} />
<FaArrowRight className={s.strelka} onClick={()=>{plus()}} />
</div>
<div className={s.s_profil}>
<img className={s.prifil_foto} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136-wc200.jpeg" alt="" />
<div className={s.s_p_g_s}>
<div className={s.nomi}>
<p className={s.nazvanie_bluda}>{data[swiper].title}</p>
<p className={s.stoimost}>{data[swiper].narxi}</p>
</div>
<div className={s.s_p_i_s1}>
<div className={s.s_infa}>
<p className={s.sotuvchi}>{data[swiper].name}</p>
<div className={s.bal}>
<FaStar className={s.star} />
<FaStar className={s.star} />
<FaStar className={s.star} />
<FaStar className={s.star} />
<FaStar className={s.star} />
<p className={s.bal2}>{data[swiper].star_bal}</p>
<BiCommentDetail className={s.kometariy} />
</div>
<p className={s.kakoypovar}>{data[swiper].yonalish}</p>
</div>
<div className={s.s_button}>
<button>{data[swiper].zakaz_b}</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div className={s.main}>
<h1>БЛЮДА ОТ ДОМАШНИХ ПОВАРОВ И КОНДИТЕРОВ</h1>
<p className={s.main_p}>Тебе не нужно покупать продукты, готовить и мыть посуду. Наслаждайся вкусной едой без лишних забот!</p>
<div className={s.inp}>
<div className={s.inpu}>
<div  className={s.m_search}>
<IoIosSearch />
</div>
<input className={s.input} type="text" placeholder='Поиск по названию блюд' />
</div>
<button className={s.m_button}>Найти</button>
</div>

</div>


</div>
)
}

