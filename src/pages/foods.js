import React from 'react'
import s from "../styles/foods.module.css"
import Navbar from './componet/navbar'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
export default function foods() {
  return (
    <div>
        <Navbar/>
    <div className={s.router}><a href="/">Главная <IoIosArrowForward className={s.arrow} /></a>Все блюда</div>    
   <div className={s.food_body}>
    <h1>ВСЕ БЛЮДА <sup>1000</sup></h1>
<div className={s.actoon_page}>
<ul className={s.actiocheck}>
<h3>ВСЕ БЛЮДА1000</h3>
<li><input type="checkbox" name="" id="" /> torti <sup>1</sup></li>
<li><input type="checkbox" name="" id="" /> torti <sup>1</sup></li>
<li><input type="checkbox" name="" id="" /> torti <sup>1</sup></li>
</ul>
<div className={s.body_card}>
    <div className={s.action_search}>
    <div className={s.card_input}>
     <CiSearch />
    <input type="text" />
    </div>
    <button>Найти</button>
    </div>

</div>
</div>


   </div>

    </div>
  )
}
