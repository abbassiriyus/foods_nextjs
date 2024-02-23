import React, { useEffect, useState } from 'react'
import s from "../styles/Dishes.module.css"
import { FiPlus } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { TbPaperclip } from "react-icons/tb";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import axios from 'axios';
import url from './host/config';
export default function dishes() {
var [page,setPage]=useState(0)
var [data,setData]=useState([])
function getData() {
axios(`${url()}/api/category`).then(res=>{
setData(res.data)
}).catch(err=>{
})
}
useEffect(()=>{
getData()
},[])
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
return (
<div>
<div className={s.dishes}>
<div className={s.yangi_card}>
<div className={s.img_i}>
<div className={s.udalitЬ}>
<div className={s.vedro} >
<FaTrash />
</div>
</div>
<img src="https://mypovar.ru/images/empty-dish.svg" alt="" />
</div>
<div className={s.c_soz}>
<h1 className={s.c_h1}><FaPen className={s.ruchka} /> <p>Редактировать</p></h1>
<h1 className={s.c_h2}>ovqatni nomi</h1>
<p className={s.c_p1}>ovqatni narx</p>
<p className={s.c_p2}>ovqatni grammmi</p>
</div>
</div>

{page==0?(
<div onClick={()=>{setPage(1)}} className={s.dishes_button} id='plus'>
<div className={s.circle}><FiPlus /></div>
<h5>Добавить блюдо</h5>
</div>
):(

<div className={s.d_i} id='inputlar'>
<h1>РЕДАКТИРОВАТЬ БЛЮДО</h1>

<div className={s.dishes_inp}>


<div className={s.inputlar1}>
<div className={s.input_s_dobavkoy}>
<div className={s.in}>
{/* <MdOutlineKeyboardArrowDown id='arrow_d' onClick={()=>{och()}} className={s.arrow_d} /> <MdOutlineKeyboardArrowUp id='arrow_u' className={s.arrow_u} onClick={()=>{yop()}} /><br /> */}

<select className={s.select} name="" id="" placeholder='Категория' >
<option className={s.option} value="1">
<p>Торты</p>
</option>
<option className={s.option} value="2">
<p>Бенто торты</p>
</option>
<option className={s.option} value="">
<p>Пирожные</p>
</option>
<option className={s.option} value="3">
<p>Шокола, конфеты, пряники</p>
</option>
<option className={s.option} value="4">
<p>Клубника в шоколаде</p>
</option>
<option className={s.option} value="5">
<p>Все десерты</p>
</option>
<option className={s.option} value="6">
<p>Закуски и гастробоксы</p>
</option>
<option className={s.option} value="7">
<p>Полезное и здоровое</p>
</option>
<option className={s.option} value="8">
<p>Все блюда</p>
</option>
<option className={s.option} value="9">
<p>Мясная гастрономия</p>
</option>
<option className={s.option} value="10">
<p>Мёд</p>
</option>
<option className={s.option} value="11">
<p>На компанию</p>
</option>
<option className={s.option} value="12">
<p>Супы</p>
</option>
<option className={s.option} value="13">
<p>Салаты</p>
</option>
<option className={s.option} value="14">
<p>Азиатская кухня</p>
</option>
<option className={s.option} value="15">
<p>Русская кухня</p>
</option>
<option className={s.option} value="16">
<p>Пироги и выпески</p>
</option>
<option className={s.option} value="17">
<p>Второе блюда</p>
</option>
<option className={s.option} value="18">
<p>Что нового</p>
</option>
<option className={s.option} value="19">
<p>Приготовим сегодня</p>
</option>
<option className={s.option} value="20">
<p>Обед и ужин</p>
</option>
<option className={s.option} value="21">
<p>Вкусно и полезно</p>
</option>
<option className={s.option} value="22">
<p>Продукты от фермеров</p>
</option>
<option className={s.option} value="23">
<p>Продукты от изготовителей</p>
</option>
<option className={s.option} value="24">
<p>Заготовки и заморозки</p>
</option>
<option className={s.option} value="25">
<p>14 февраля</p>
</option>
</select>
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

<div className={s.inp_x}>
<div className={s.i_g}>
<p><TbPaperclip /></p><a href="#">Рекомендуем форматы: jpeg, png, не более 10 файлов</a>
</div>
<div className={s.bb}>
<button className={s.b1} >Добавить</button>
<button className={s.b2} onClick={()=>setPage(0)}>Назад</button>
</div>
</div>

</div>
)}
</div>
</div>
)
}
