import React from 'react'
import s from "../styles/dishes.module.css"
import Footer from "../pages/Footer.js"
import { FiPlus } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { HiOutlinePaperClip } from "react-icons/hi";
export default function dishes() {
function och(){
document.querySelector("#werwe").style = "display: block;"
document.querySelector("#arrow_d").style="display:none"
document.querySelector("#arrow_u").style="display:block"
}
function yop(){
document.querySelector("#werwe").style = "display: none;"
document.querySelector("#arrow_d").style = "display:block"
document.querySelector("#arrow_u").style = "display: none"
}
function ochadi(){
document.querySelector("#d_i").style = "display:block"
}
function yopadi(){
document.querySelector("#d_i").style = "display:none"
}
return (
<div>

<div className={s.dishes}>
<div className={s.dishes_button}  onClick={()=>ochadi()} >
<div className={s.circle}><FiPlus /></div>
<h5>Добавить блюдо</h5>
</div>
<div className={s.d_i} id='d_i'>
<h1>РЕДАКТИРОВАТЬ БЛЮДО</h1>
<div className={s.dishes_inp}>
<div className={s.inputlar1}>
<div className={s.input_s_dobavkoy}>
<div className={s.in}>
<input placeholder='Категория' className={s.inputlar_0} style={{border:'none',outline:'none'}} type="text" /> 
<MdOutlineKeyboardArrowDown id='arrow_d' onClick={()=>{och()}} className={s.arrow_d} /> <MdOutlineKeyboardArrowUp id='arrow_u' className={s.arrow_u} onClick={()=>{yop()}} /><br />
</div>
<div className={s.inp1_sozlari} id="werwe">
<p>Торты</p>
<p>Бенто торты</p>
<p>Пирожные</p>
<p>Шокола, конфеты, пряники</p>
<p>Клубника в шоколаде</p>
<p>Все десерты</p>
<p>Закуски и гастробоксы</p>
<p>Полезное и здоровое</p>
<p>Все блюда</p>
<p>Мясная гастрономия</p>
<p>Мёд</p>
<p>На компанию</p>
<p>Супы</p>
<p>Салаты</p>
<p>Азиатская кухня</p>
<p>Русская кухня</p>
<p>Пироги и выпески</p>
<p>Второе блюда</p>
<p>Что нового</p>
<p>Приготовим сегодня</p>
<p>Обед и ужин</p>
<p>Вкусно и полезно</p>
<p>Продукты от фермеров</p>
<p>Продукты от изготовителей</p>
<p>Заготовки и заморозки</p>
<p>14 февраля</p>
</div>
</div>
<input placeholder='Название блюда' className={s.inputlar_11} type="text" /><br />
<textarea placeholder='Описание и состав' className={s.inputlar_2} type="text" /><br />
<input placeholder='Количество порций' className={s.inputlar_1} type="text" /><br />
<input placeholder='Вес (примерно:300г)' className={s.inputlar_1} type="text" /><br />
<input placeholder='Время приготовления' className={s.inputlar_1} type="text" /><br />
<textarea placeholder='Условия хранения' className={s.inputlar_2} type="text" /><br />
</div>
<div className={s.liniya}></div>
<div className={s.inputlar2}>
<input placeholder='Калорийность' className={s.inputlar_1} type="text" /><br />
<input placeholder='Белки, г' className={s.inputlar_1} type="text" /><br />
<input placeholder='Жиры, г' className={s.inputlar_1} type="text" /><br />
<input placeholder='Углеводы, г' className={s.inputlar_1} type="text" /><br />
<div className={s.input_a}>
<a href="#" className={s.inp_a}>Как рассчитать калорийность и БЖУ?</a><br />
</div>
<input placeholder='Упаковка' className={s.inputlar_1} type="text" /><br />
<input placeholder='Цена, р' className={s.inputlar_1} type="text" /><br />
<div className={s.liniya2}></div>
<div className={s.inp2_sozlari}>
<div className={s.inp2_s_p1}>
<p className={s.s_p1}>Вкусовые <br /> предпочтения:</p><br />
</div>
<div className={s.inp2_s_p3}>
<p className={s.inp2_s_p12}>Вегитарианское</p>
<p className={s.inp2_s_p2}>Без сахара</p>
<p className={s.inp2_s_p2}>Без лактозы</p>
<p className={s.inp2_s_p2}>Без глютена</p>
<p className={s.inp2_s_p2}>Без орехов и бабов</p>
<p className={s.inp2_s_p2}>Острое</p>
</div>
</div>
</div>
</div>
<div className={s.d_chiqish_b}>
<div className={s.liniya3}>
</div>
<div className={s.b_a}>
<HiOutlinePaperClip className={s.b_i} /> <a href="#">Рекомендуем форматы: jpeg, png, не более 10 файлов</a> <br />
</div>
<div className={s.d_b}>
<button className={s.button1}>Добавить</button>
<button className={s.button2} onClick={()=>yopadi()}>Назад</button>
</div>
</div>
</div>


</div>
<Footer></Footer>
</div>
)
}
