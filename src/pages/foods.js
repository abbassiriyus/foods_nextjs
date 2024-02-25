import React, { useEffect, useState } from 'react'
import s from "../styles/Foods.module.css"
import { GrUpdate } from "react-icons/gr";
import { BsSortDown } from "react-icons/bs";
import { GoChevronUp } from "react-icons/go";
import { HiChevronDown } from "react-icons/hi";
import Navbar from './componet/navbar';
import { CiSearch } from "react-icons/ci";
import { LuArrowDownUp } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./componet/card"
import Footer from "../pages/componet/footer"
import url from './host/config';
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import { BsSliders2 } from "react-icons/bs";
export default function foods() {
var [data,setData]=useState([])
var [glFoods,setGlFoods]=useState([])
 var[acor,setAcor] = useState(0)




 function search1() {
    if(acor==0 ){
        setAcor(1)
        document.querySelector('#oq1').style="display:block"
    }
    else{
        setAcor(0)
        document.querySelector('#oq1').style="display:none"
    }
 }

var [advantages,setAdvantages]=useState([])
function getAdvantages() {
    axios.get(`${url()}/api/advantages`).then(res=>{
setAdvantages(res.data)
    })
}

function getData() {
    axios.get(`${url()}/api/category`).then(res=>{
        getAdvantages()
        setData(res.data)
        setTimeout(() => {
    for (let i=0; i < res.data.length; i++) {
        if(res.data[i].id==localStorage.getItem("category")){
            document.querySelectorAll("#filtercheck")[i].checked=true
        }
        }
   }, 1000);
    })
}

function filterData2(){
    var data1=document.querySelectorAll("#filtercheck2")
    localStorage.removeItem("category")
    var bosilgan=[]
    for (let i = 0; i < data1.length; i++) {
        if(data1[i].checked){
       bosilgan.push(advantages[i]) 
        }
    }
axios.get(`${url()}/api/food_advantages`).then(res2=>{
    var ney=[]
    for (let i = 0; i < res2.data.length; i++) {
        res2.data[i].push=false
    for (let j = 0; j < bosilgan.length; j++) {
        if(bosilgan[j].id==res2.data[i].advantages_id){
            res2.data[i].push=true
        }
    }
    if(res2.data[i].push){
     ney.push(res2.data[i])
    }
    }

    axios.get(`${url()}/api/foods`).then(res=>{
    var tayyor=[]
    if(ney.length==0){
    tayyor=res.data
    }else{
       for (let i = 0; i < res.data.length; i++) {
         res.data[i].qosh=false
         console.log(res.data[i]);
       for (let j = 0; j < ney.length; j++) {
        if(ney[j].food_id==res.data[i].id){
            res.data[i].qosh=true
        }
       }
       if(res.data[i].qosh){
        tayyor.push(res.data[i])
        }
    }
    }
    setGlFoods(tayyor)
    })
})
}

function filterData(){
var data1=document.querySelectorAll("#filtercheck")
localStorage.removeItem("category")
var bosilgan=[]
for (let i = 0; i < data1.length; i++) {
    if(data1[i].checked){
   bosilgan.push(data[i]) 
    }
}
axios.get(`${url()}/api/foods`).then(res=>{
var tayyor=[]
if(bosilgan.length==0){
tayyor=res.data
}else{
   for (let i = 0; i < res.data.length; i++) {
     res.data[i].qosh=false
     console.log(res.data[i]);
   for (let j = 0; j < bosilgan.length; j++) {
    if(bosilgan[j].id==res.data[i].category_id){
        res.data[i].qosh=true
    }
   }
   if(res.data[i].qosh){
    tayyor.push(res.data[i])
    }

}
}


setGlFoods(tayyor)

    })

}

function sortReting() {
    console.log("Salom");
    var a=[...glFoods]
    a.sort(function(a, b){
        return b.mark-a.mark;
    });
 
 
    setGlFoods(a)

}
function sortSena() {
    console.log("Salom");
    var a=[...glFoods]
    a.sort(function(a, b){
        return a.price-b.price;
    });
    console.log(a);
  setTimeout(() => {
    setGlFoods(a)
  }, 10);
}

function sortSenaRever() {
    console.log("Salom");
    var a=[...glFoods]
    a.sort(function(a, b){
        return b.price-a.price;
    });
    setGlFoods(a)
}

function sorttime() {
    console.log("Salom");
    var a=[...glFoods]
    console.log(new Date('2024-02-21T06:05:13.724Z'));
    a.sort(function(a, b){
        return new Date(b.time_update) - new Date(a.time_update);
    });
    setGlFoods(a)
}


useEffect(()=>{
getData()
getgeFoods()
},[])

function getgeFoods(){
        var logd=localStorage.getItem('category')
        console.log(logd);
        if(logd){

        axios.get(`${url()}/api/foods`).then(res=>{
            console.log(res.data,"asdasd");
    
        setGlFoods(res.data.filter(item=>item.category_id==logd))


        }).catch(err=>{
    
        })
        }else{
        axios.get(`${url()}/api/foods`).then(res=>{
            setGlFoods(res.data) })
            }
        
   
    }
  return (
  
    <div>
        <Navbar/>
    <div className={s.router}><a href="/">Главная <IoIosArrowForward className={s.arrow} /></a>Все блюда</div>    
   <div className={s.food_body}>
    <h1>ВСЕ БЛЮДА <sup>1000</sup></h1>
    <div  className={s.filter_} >
      <div id='oq1' className={s.oq}>
      <button onClick={()=>{sortReting()}} >По рейтингу</button><br />
      <button onClick={()=>{sortSenaRever()}}>По возрастанию цены</button><br />
      <button onClick={()=>{sortSena()}}>По убыванию цены</button>
      <button onClick={()=>{sorttime()}}>По новизне</button>
      </div>
<div className={s.t_filter}>
<div onClick={()=>{
        document.querySelector('#filter').style="left:0px"
    }}  className={s.bs_slider}><BsSliders2  /></div><h3>Фильтр</h3>
</div>
<div  onClick={()=>{search1()}} className={s.search_w}>
<LuArrowDownUp /><h3>По новизне</h3>
</div>
    </div>
<div className={s.actoon_page}>
<ul id='filter'  className={s.actiocheck}>
    <div className={s.close} onClick={()=>{
        document.querySelector('#filter').style="left:-130%"
    }}><IoMdClose /></div>
<h3>Все категории</h3>
<div className={s.line}></div>
{data.map((item,key)=>{
    return <li key={key}><input  onChange={()=>{filterData()}} type="checkbox" name="" id="filtercheck" /> {item.title} <sup>{item.count}</sup></li>
    // 
})}


<div className={s.line}></div>
          
              <div   className={s.kota_kategoriya2}>
                <p style={{color:"black"}}>Специализация</p></div>
            {/* <IoIosArrowUp /> */}
            <div className={s.l}>
              <div  className={s.yopil_kateg}>
              {advantages.map((item,key)=>{
    return <li key={key}><input  onChange={()=>{filterData2()}} type="checkbox" name="" id="filtercheck2" /> {item.title} <sup>{item.count}</sup></li>
    // 
})}

              </div>
            </div>

            <div className={s.line}></div>
            <div className={s.loko}>
              <div className={s.primen}>
                <span>Применить</span>
              </div>
              <div  className={s.kategoriya_button}>
                <div  className={s.perevarot}><GrUpdate /></div>
                <span>Сбросить фильтр</span>
              </div>
            </div>











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
<div onClick={()=>{sortReting()}} className={s.reyting}>
<BsSortDown  className={s.toggle_fill} /><h4>По рейтингу</h4>
</div>
<h4 onClick={()=>{sortSenaRever()}}  >По возрастанию цены</h4>
<h4  onClick={()=>{sortSena()}} >По убыванию цены</h4>
<h4 onClick={()=>{sorttime()}}>По новизне</h4>
</div>
<div className={s.cards}>
{/* <Card/>
<Card/>
<Card/> */}
{glFoods.map((mangaItem ,key) => (
  <Card key={key} data={mangaItem}/>
))}



</div>
</div>
</div>


   </div>
<div className={s.footer}>
<Footer/>

</div>
    </div>
  )
}
