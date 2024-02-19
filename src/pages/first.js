import React from 'react'
import c from "../styles/first.module.css"
import { TiStarFullOutline } from "react-icons/ti";
import { BiCommentDetail } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import Navbar from "../pages/componet/navbar";
// import Footer from "../pages/componet/footer"
export default function first() {
return (
<div>
<Navbar/>
<div className={c.profil}>
<div className={c.p_img}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/9a07f0427459b82fc9538e161bc764b9178b30a5/9a07f0427459b82fc9538e161bc764b9178b30a5-wc200.jpeg" alt="" />
</div>
<div className={c.p_soz}>
<div className={c.p1}>
<h1>ЧМИЛЬ СОФЬЯ СЕРГЕЕВНА</h1>
<div className={c.ball}>
<div className={c.stars}>
<TiStarFullOutline className={c.star} />
<TiStarFullOutline className={c.star} />
<TiStarFullOutline className={c.star} />
<TiStarFullOutline className={c.star} />
<TiStarFullOutline className={c.star} />
<p>4.9</p>
</div>
<div className={c.otzv}>
<p><BiCommentDetail /> 3 отзыва</p>
</div>
</div>
<button>Написать</button>
</div>
<div className={c.p2}>
<div className={c.block0}>
<p>Категории блюд</p>
<p>Торты</p>
<p>Все десерты</p>
</div>

<div className={c.block}>
<div className={c.block1}>
<p>Адрес</p>
<p>Специализация</p>
<p>Сколько лет в деле</p>
<p>Дата регистрации</p>
</div>

<div className={c.block2}>
<p><CiLocationArrow1 className={c.location} /> Тюмень, улица Салтыкова-Щедрина, 3</p>
<p>Кондитер</p>
<p>3 года</p>
<p>04 августа 2022</p>
</div>
</div>

</div>

<div className={c.p3}>
<h1>О СЕБЕ</h1>
<p>Я Софья ✌🏼 Делаю бенто торты и торты в стаканах на заказ</p>
</div>

</div>
</div>

<div className={c.profil2}>
<div className={c.p_img}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/9a07f0427459b82fc9538e161bc764b9178b30a5/9a07f0427459b82fc9538e161bc764b9178b30a5-wc200.jpeg" alt="" />
</div>
<div className={c.p_soz}>
<div className={c.p1}>
<h1>ЧМИЛЬ СОФЬЯ СЕРГЕЕВНА</h1>
<div className={c.ball}>
<div className={c.stars}>
<TiStarFullOutline className={c.star} />
<TiStarFullOutline className={c.star} />
<TiStarFullOutline className={c.star} />
<TiStarFullOutline className={c.star} />
<TiStarFullOutline className={c.star} />
<p>4.9</p>
</div>
<div className={c.otzv}>
<p><BiCommentDetail /> 3 отзыва</p>
</div>
</div>
<button>Написать</button>
</div>
<div className={c.block0}>
<p>Категории блюд</p>
<p>Торты</p>
<p>Все десерты</p>
</div>
<div className={c.p3}>
<h1>О СЕБЕ</h1>
<p>Я Софья ✌🏼 Делаю бенто торты и торты в стаканах на заказ</p>
</div>

<div className={c.p2}>


<div className={c.block}>
<div className={c.block1}>
<p>Адрес</p>
<p>Специализация</p>
<p>Сколько лет в деле</p>
<p>Дата регистрации</p>
</div>

<div className={c.block2}>
<p><CiLocationArrow1 className={c.location} /> Тюмень, улица Салтыкова-Щедрина, 3</p>
<p>Кондитер</p>
<p>3 года</p>
<p>04 августа 2022</p>
</div>
</div>

</div>



</div>
</div>




{/* <Footer/> */}
</div>
)
}
