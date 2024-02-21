import React from 'react'
import c from "../styles/First.module.css"
import { TiStarFullOutline } from "react-icons/ti";
import { BiCommentDetail } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import Navbar from "../pages/componet/navbar";
import Footer from "../pages/componet/footer"
export default function first() {
return (
<div>
<Navbar/>

<div className={c.slka}>
<div className={c.s_p}>
<a href="#" className={c.a1}>Главная <MdKeyboardArrowRight /></a>
<a href="#" className={c.a1}>Все повора <MdKeyboardArrowRight /></a>
<p>Чмиль Софья Сергеевна</p>
</div>
<p className={c.s_p1}><FiShare2 /> Поделиться</p>
</div>

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
<p className={c.s_p12}><BiCommentDetail /> 3 отзыва</p>
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
<div className={c.p3_hp}>
<h1>О СЕБЕ</h1>
<p className={c.s_p2}><FiShare2 /> Поделиться</p>
</div>
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

<div className={c.menu}>
<h1>МЕНЮ</h1>
<div className={c.m_c}>
<div className={c.card}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/9b35e2d2ad323a495a31468ed1aba63d3904cbbd/9b35e2d2ad323a495a31468ed1aba63d3904cbbd-wc800.jpeg" alt="" />
<div className={c.c_soz}>
<h1>ТОРТ В СТАКАНЕ CAKE TO GO</h1>
<div className={c.c_s}>
<div className={c.c_s1}>
<span>400 ₽</span>
<p>200 - 250 гр</p>
</div>
<button>В корзину</button>
</div>
</div>
</div>
<div className={c.card}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b8456795007d6b533200e5610784f9a3a36479da/b8456795007d6b533200e5610784f9a3a36479da-wc800.jpeg" alt="" />
<div className={c.c_soz}>
<h1>Бенто торты</h1>
<div className={c.c_s}>
<div className={c.c_s1}>
<span>900 ₽</span>
<p>300 - 400 гр</p>
</div>
<button>В корзину</button>
</div>
</div>
</div>
</div>
</div>

<div className={c.comment}>
<h1 className={c.c_h1}>ОТЗЫВЫ ПОКУПАТЕЛЕЙ</h1>
<div className={c.c_c}>
<div className={c.c_profil}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e6868eda5d3d9c2f45d06b961421328c9b8c71dc/e6868eda5d3d9c2f45d06b961421328c9b8c71dc-wc100.png" alt="" />
<div className={c.b}>
<h1>Повар на Связи</h1>
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
</div>
</div>
<p>Все хорошо, вкусно, буду рекомендовать знакомым (отзыв от покупателя через телефонное интервью)</p>
</div>

<div className={c.c_c}>
<div className={c.c_profil}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/1c2b6d68926d61a2a859ceaaca0c3e2f290730e9/1c2b6d68926d61a2a859ceaaca0c3e2f290730e9-wc100.jpeg" alt="" />
<div className={c.b}>
<h1>Евгения</h1>
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
</div>
</div>
<p>Спасибо очень вкусно получилось. Прямо как я представляла. Очень редко такое встретишь, что то всегда не так со вкусом, а тут идеально ☺️ спасибо 🙏🏻</p>
</div>

<div className={c.c_c}>
<div className={c.c_profil}>
<img src="https://povarnasvyazi.ru/images/empty-cook.svg" alt="" />
<div className={c.b}>
<h1>Елена</h1>
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
<TiStarFullOutline className={c.star2} />
</div>
</div>
<p>Спасибо большое! Теперь буду у Вас на каждый месяц заказывать, съели все тортик нереально вкусный! Но я успела сфоткаться, уря</p>
</div>

</div>

<div className={c.kuxnya}>
<h1>МОЯ КУХНЯ</h1>
<div className={c.img_k}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b101ac9a75baba379214d6eb55dd20cc5f87a728/b101ac9a75baba379214d6eb55dd20cc5f87a728-wc400.jpeg" alt="" />
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b101ac9a75baba379214d6eb55dd20cc5f87a728/b101ac9a75baba379214d6eb55dd20cc5f87a728-wc400.jpeg" alt="" />
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b101ac9a75baba379214d6eb55dd20cc5f87a728/b101ac9a75baba379214d6eb55dd20cc5f87a728-wc400.jpeg" alt="" />
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b101ac9a75baba379214d6eb55dd20cc5f87a728/b101ac9a75baba379214d6eb55dd20cc5f87a728-wc400.jpeg" alt="" />
</div>
</div>


<Footer/>
</div>
)
}
