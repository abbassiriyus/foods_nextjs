import React, { useEffect, useState } from 'react'
import Navbar from './componet/navbar'
import Footer from './componet/footer'
import { GoPlusCircle } from "react-icons/go";
import { LuMinusCircle } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import s from "../styles/basket.module.css"
import axios from 'axios';
import url from "./host/config.js"
export default function basket() {

  var [data,setData]=useState(0)

function getData() {
  var user=localStorage.getItem('user')
  if(user){ 
   axios.get(`${url()}/api/karzinka/${JSON.parse(user)[0].id}`).then(res=>{
  setData(res.data.filternew)
   })
  }
}

function minusData(id,count) {
  if(count-1==0){
    axios.delete(`${url()}/api/karzinka/${id}`).then(res=>{
    getData()
    }).catch(err=>{

    })
  }else{
    axios.put(`${url()}/api/karzinka/count/${id}`,{count:count-1}).then(res=>{
      getData()
    })
  }

}
function plusData(id,count) {
  axios.put(`${url()}/api/karzinka/count/${id}`,{ count:count+1 }).then(res=>{
    getData()
  })
}

function deleteData(id) {
     axios.delete(`${url()}/api/karzinka/${id}`).then(res=>{
      getData()
    }).catch(err=>{
      
    })
}
function deleteAll(params) {
  console.log(params);
  for (let i = 0; i < params.length; i++) {
   axios.delete(`${url()}/api/karzinka/${params[i].shopid}`).then(res=>{
    getData()
   })
  }
}

function offerZakaz(data) {
localStorage.setItem("zakazall",JSON.stringify(data))
setTimeout(() => {
  window.location="/OformleniaZakaza"
}, 100);
}

useEffect(()=>{
getData()
},[])

  return (
    <div>
        <Navbar/>
        {data==0?(<></>):(data.length==0?(<Found/>):(<>
       <div className={s.zakaz}>
    <div className={s.a_basket}>
<a href="">Главная</a><span>Корзина</span>
    </div>
    <h3 className={s.h3}>ВАШ ЗАКАЗ</h3>

{data.map((item,key)=>{
  var all=0
  for (let i = 0; i < item.food.length; i++) {
    all=all+(item.food[i].price*item.food[i].count)
  }
    return <div className={s.card_basket}>
    <div className={s.padding}>
    <div className={s.delete}>
    <div className={s.name}>
    <p style={{color:'grey',fontSize:'13px'}}>{item.ish_yonalishi}</p>
    <h3 style={{fontWeight:500}}>{item.name}</h3>
    </div>
    <RiDeleteBin5Line onClick={()=>deleteAll(item.food)} className={s.delete_bin}/>

    </div>
    <hr />
{item.food.map((item1,key1)=>{
  return <div className={s.card_img_name}>
    <div className={s.img_c}>
        <img src={item1.image} alt="" />
    </div>
    <div className={s.name_c}>
    <h3>{item1.foods_name}</h3>
    <p>{item1.weight} • {item1.price} ₽</p>
    </div>
    <div className={s.price}>
    <span></span>
    <div className={s.btn_1}>
    <GoPlusCircle onClick={()=>{plusData(item1.shopid,item1.count)}} className={s.minus}/><p>{item1.count}</p>
    <LuMinusCircle  className={s.minus} onClick={()=>{minusData(item1.shopid,item1.count)}} />
  </div>
    <RiDeleteBin5Line onClick={()=>deleteData(item1.shopid)} className={s.delete_bin}/>
    </div>
    </div>

})}
  
    <hr />
    <div className={s.price_btn}>
        <span>ИТОГО: {all} ₽</span>
        <button onClick={()=>{offerZakaz(item)}} >Оформить заказ</button>
    </div>
    </div>
        </div>
})}
 


        
 </div>  
        </>))}

 <Footer/>

    </div>
  )
}
