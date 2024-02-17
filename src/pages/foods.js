import React from 'react'
import { BsFillBalloonHeartFill } from "react-icons/bs";
import s from "../styles/foods.module.css"
import { BsSortDown } from "react-icons/bs";
import Navbar from './componet/navbar';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./componet/card"
export default function foods() {
 
  return (
  
    <div>
        <Navbar/>
    <div className={s.router}><a href="/">Главная <IoIosArrowForward className={s.arrow} /></a>Все блюда</div>    
   <div className={s.food_body}>
    <h1>ВСЕ БЛЮДА <sup>1000</sup></h1>
<div className={s.actoon_page}>
<ul className={s.actiocheck}>
<h3>Все категории</h3>
<div className={s.line}></div>
<li><input type="checkbox" name="" id="" /> torti <sup>1</sup></li>
<li><input type="checkbox" name="" id="" /> torti <sup>1</sup></li>
<li><input type="checkbox" name="" id="" /> torti <sup>1</sup></li>
</ul>
<div className={s.body_card}>
    <div className={s.action_search}>
    <div className={s.card_input}>
     <CiSearch />
    <input placeholder="Поиск по названию блюда" type="text" />
    </div>
    <button>Найти</button>
    </div>
<div className={s.link}>
<div className={s.reyting}>
<BsSortDown  className={s.toggle_fill} /><h4>По рейтингу</h4>
</div>
<h4>По возрастанию цены</h4>
<h4>По убыванию цены</h4>
<h4>По новизне</h4>
</div>
<div className={s.cards}>
<Card/>
<Card/>
<Card/>


</div>
</div>
</div>


   </div>

    </div>
  )
}
