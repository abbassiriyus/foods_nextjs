import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import s from "../styles/Glavnstr.module.css";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import img1 from "../images/woman.png"
import Image from "next/image";
import Footer from "../pages/Footer.js"
export default function glavnstr() {
var [data, setData] = useState([
{
img: "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/af944830ed2445956672f8103d2f0a78e8b3b185/af944830ed2445956672f8103d2f0a78e8b3b185-wc800.png",
img_profil:
"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136-wc200.jpeg",
title: "1Шах-плов",
name: "Хатира Мамедова",
star: "star",
star_bal: "5.0",
kommment: "komentariy",
yonalish: "Домашний повар",
narxi: "2 200₽",
zakaz_b: "Заказть",
},
{
img: "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/af944830ed2445956672f8103d2f0a78e8b3b185/af944830ed2445956672f8103d2f0a78e8b3b185-wc800.png",
img_profil:
"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136-wc200.jpeg",
title: "2Шах-плов",
name: "Хатира Мамедова",
star: "star",
star_bal: "5.0",
kommment: "komentariy",
yonalish: "Домашний повар",
narxi: "2 200₽",
zakaz_b: "Заказть",
},
{
img: "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/af944830ed2445956672f8103d2f0a78e8b3b185/af944830ed2445956672f8103d2f0a78e8b3b185-wc800.png",
img_profil:
"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136-wc200.jpeg",
title: "3Шах-плов",
name: "Хатира Мамедова",
star: "star",
star_bal: "5.0",
kommment: "komentariy",
yonalish: "Домашний повар",
narxi: "2 200₽",
zakaz_b: "Заказть",
},
{
img: "https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/af944830ed2445956672f8103d2f0a78e8b3b185/af944830ed2445956672f8103d2f0a78e8b3b185-wc800.png",
img_profil:
"https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136-wc200.jpeg",
title: "4Шах-плов",
name: "Хатира Мамедова",
star: "star",
star_bal: "5.0",
kommment: "komentariy",
yonalish: "Домашний повар",
narxi: "2 200₽",
zakaz_b: "Заказть",
},
]);
var [swiper, setSwipper] = useState(0);
function plus() {
if (swiper + 1 === data.length) {
setSwipper(0);
} else {
setSwipper(swiper + 1);
}
console.log(swiper);
}
function minus() {
if (swiper === 0) {
setSwipper(data.length - 1);
} else {
setSwipper(swiper - 1);
}
console.log(swiper);
}

const [xopen, setXopen] = useState(false);

function svgxopen() {
setXopen(true);
}
function svgxclose() {
setXopen(false);
}

return (
<div onClick={svgxclose}>
<div className={s.header}>
<div className={s.h_h1}>
<h1>Привет!</h1>
</div>
<div className={s.head}>
<div className={s.h_soz}>
<h1 className={s.h_h2}>У НАС ЕСТЬ <br /> ЧТО ПОЕСТЬ!</h1>
<p className={s.h_p1}>Тебе не нужно покупать продукты, готовить и мыть посуду. Наслаждайся вкусной едой без лишних забот!
</p>
<button className={s.h_button}>Выбрать блюда</button>
<p className={s.h_p2}>Вы повар? — <span className={s.h_span1}>давайте с нами!</span>
</p>
<span className={s.h_span2}>Регистрация займет всего 3 минуты</span>
</div>
<div className={s.h_swip_img}>
<div className={s.swiper}>
<img
className={s.swiper_img}
src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/af944830ed2445956672f8103d2f0a78e8b3b185/af944830ed2445956672f8103d2f0a78e8b3b185-wc800.png"
alt=""
/>
<div className={s.s_i}>
<FaArrowLeft
className={s.strelka}
onClick={() => {
minus();
}}
/>
<FaArrowRight
className={s.strelka}
onClick={() => {
plus();
}}
/>
</div>
<div className={s.s_profil}>
<img
className={s.prifil_foto}
src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d37c0db7585d7fbbbfcad7b6c4c91359fa3e6158/d37c0db7585d7fbbbfcad7b6c4c91359fa3e6158-wc200.jpeg"
alt=""
/>
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
<p className={s.main_p}>Тебе не нужно покупать продукты, готовить и мыть посуду. Наслаждайся вкусной едой без лишних забот!
</p>
<div className={s.inp}>
<div className={s.inpu}>
<div className={s.m_search}>
<IoIosSearch />
</div>
<input className={s.input} onChange={svgxopen} type="text" placeholder="Поиск по названию блюд" /> {xopen ? (
<div className={s.exit}>
<IoCloseOutline />
</div>
) : (
<div></div>
)}
</div>
<button className={s.m_button}>Найти</button>
</div>
</div>

<div className={s.cardlar}>
<h1 className={s.jison}>Подборки для тебя</h1>
<div className={s.cards}>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/71e6ad25f30896a44011eb4cab9ddffa4bca0ab9/71e6ad25f30896a44011eb4cab9ddffa4bca0ab9.png" alt="" />
<div className={s.c_soz}>
<p>Поздравить любимых</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/f50f8d5d335448478cd45cbbe6888a08d15590df/f50f8d5d335448478cd45cbbe6888a08d15590df.jpg" alt="" />
<div className={s.c_soz}>
<p>Обед и ужин</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/71e6ad25f30896a44011eb4cab9ddffa4bca0ab9/71e6ad25f30896a44011eb4cab9ddffa4bca0ab9.png" alt="" />
<div className={s.c_soz}>
<p>Хватит на всех</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/2b881fff2138d01622475ab4b594ab4b5ffa70a7/2b881fff2138d01622475ab4b594ab4b5ffa70a7.png" alt="" />
<div className={s.c_soz}>
<p>Блюда и десерты</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/0989e7042e45cca52adda3588aa40be5ac6030f9/0989e7042e45cca52adda3588aa40be5ac6030f9.png" alt="" />
<div className={s.c_soz}>
<p>Приготовь сам</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/a4d06f7ed40a57602e464315f274fd160082d73c/a4d06f7ed40a57602e464315f274fd160082d73c.png" alt="" />
<div className={s.c_soz}>
<p>Быстрая доставка</p>
</div>
</div>
</div>
</div>
<div className={s.cardlar}>
<h1 className={s.jison}>Блюда от поваров</h1>
<div className={s.cards}>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b77ff6a04d10c1b8d1249dc60da936fb5ff81e0a/b77ff6a04d10c1b8d1249dc60da936fb5ff81e0a.jpg " alt="" />
<div className={s.c_soz}>
<p>Поздравить любимых</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/2649fdc8eb56e80bcf523218048bb0affabb4020/2649fdc8eb56e80bcf523218048bb0affabb4020.jpg" alt="" />
<div className={s.c_soz}>
<p>Обед и ужин</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e14e527bc3f09db87338dbbecfe33c994cb795f5/e14e527bc3f09db87338dbbecfe33c994cb795f5.jpg" alt="" />
<div className={s.c_soz}>
<p>Хватит на всех</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/16f150985ea7cf4d43ec517a76b4c35dd79d27f6/16f150985ea7cf4d43ec517a76b4c35dd79d27f6.jpg" alt="" />
<div className={s.c_soz}>
<p>Блюда и десерты</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e2c3a105e28ddaa95f34e3697f6fef36f51614b5/e2c3a105e28ddaa95f34e3697f6fef36f51614b5.jpg" alt="" />
<div className={s.c_soz}>
<p>Приготовь сам</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/97b88a8a5979f6b643b98cd863511d5ef62b992f/97b88a8a5979f6b643b98cd863511d5ef62b992f.png" alt="" />
<div className={s.c_soz}>
<p>Быстрая доставка</p>
</div>
</div>
</div>
</div>
<div className={s.cardlar}>
<h1 className={s.jison}>Десерты от кондитеров</h1>
<div className={s.cards}>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d3c61ecf6a924d2d2350d59f1135a15624663ff5/d3c61ecf6a924d2d2350d59f1135a15624663ff5.png" alt="" />
<div className={s.c_soz}>
<p>Поздравить любимых</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d82a5900f749addeb331f33344ad58cfbbd3231e/d82a5900f749addeb331f33344ad58cfbbd3231e.png" alt="" />
<div className={s.c_soz}>
<p>Обед и ужин</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/19f54320dfa7b08c4fdb3243ec959c2804a73657/19f54320dfa7b08c4fdb3243ec959c2804a73657.png" alt="" />
<div className={s.c_soz}>
<p>Хватит на всех</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/792fc30f5d19c573afdb94a929ec7ba1e5c5c926/792fc30f5d19c573afdb94a929ec7ba1e5c5c926.png" alt="" />
<div className={s.c_soz}>
<p>Блюда и десерты</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/0ed1a3f5c8964e69e52493498722a729db2a7f82/0ed1a3f5c8964e69e52493498722a729db2a7f82.png" alt="" />
<div className={s.c_soz}>
<p>Приготовь сам</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d5b7c7133f1529324be79f43af2354ecb13e116d/d5b7c7133f1529324be79f43af2354ecb13e116d.png" alt="" />
<div className={s.c_soz}>
<p>Быстрая доставка</p>
</div>
</div>
</div>
</div>
<div className={s.cardlar}>
<h1 className={s.jison}>Полезные продукты</h1>
<div className={s.cs}>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/dd3f833cf4d66bcb802959720bda31fa6eafcb49/dd3f833cf4d66bcb802959720bda31fa6eafcb49.jpg" alt="" />
<div className={s.c_soz}>
<p>Продукты от производителей</p>
</div>
</div>
<div className={s.c}>
<img className={s.card_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/58d4bd30689df4da54e15e1d1f3a1c66001e3b2a/58d4bd30689df4da54e15e1d1f3a1c66001e3b2a.png" alt="" />
<div className={s.c_soz}>
<p>Продукты от фермеров</p>
</div>
</div>

</div>
</div>

{/* <div className={s.cardlar_katta}>
<h1>ПОПУЛЯРНЫЕ БЛЮДА</h1>
<div className={s.c_k}>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>
</div> */}


<div className={s.qoshilish}>
<div className={s.q_soz}>
<h1>ПРИСОЕДИНЯЙТЕСЬ!</h1>
<p className={s.qoshish_p1}>— Максимально просто и прозрачно, честное слово!</p>
<p className={s.qoshish_p2}>Вы повар, кондитер или фермер? <br />
— регистрируйтесь в сервисе, публикуйте свои замечательные блюда или продукты, откликайтесь на заказы. Профит!</p>
<button>Зарегистрироватся</button>
</div>
<div className={s.q_img}>
<Image src={img1} alt="" />
</div>
</div>

<div className={s.qoshilish2}>
<div className={s.q_soz}>
<h1>ПРИСОЕДИНЯЙТЕСЬ!</h1>
<p className={s.qoshish_p1}>— Максимально просто и прозрачно, честное слово!</p>
<p className={s.qoshish_p2}>Вы повар, кондитер или фермер? <br />
— регистрируйтесь в сервисе, публикуйте свои замечательные блюда или продукты, откликайтесь на заказы. Профит!</p>
<div className={s.q_soz_b}>
<button>Зарегистрироватся</button>
</div>
</div>
<div className={s.q_img}>
<Image src={img1} alt="" />
</div>
</div>

<Footer></Footer>

</div>
);
}
