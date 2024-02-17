import React, { useEffect, useState } from 'react'
import { BsFillBalloonHeartFill } from "react-icons/bs";
import s from "../styles/foods.module.css"
import { BsSortDown } from "react-icons/bs";
import Navbar from './componet/navbar';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./componet/card"
import url from './host/config';
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
export default function foods() {
 var [data,setData]=useState([])
 
function getData() {
    axios.get(`${url}/api/category`).then(res=>{
        setData(res.data)
        console.log(res.data);
    })
}
useEffect(()=>{
getData()
},[])


  return (
  
    <div>
        <Navbar/>
    <div className={s.router}><a href="/">Главная <IoIosArrowForward className={s.arrow} /></a>Все блюда</div>    
   <div className={s.food_body}>
    <h1>ВСЕ БЛЮДА <sup>1000</sup></h1>
<div className={s.actoon_page}>
<ul id='filter' className={s.actiocheck}>
    <div className={s.close} onClick={()=>{
        document.querySelector('#filter').style="left:-100%"
    }}><IoMdClose /></div>
<h3>Все категории</h3>
<div className={s.line}></div>
{data.map((item,key)=>{
    return <li><input type="checkbox" name="" id="" /> {item.title} <sup>{item.count}</sup></li>
})}


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
