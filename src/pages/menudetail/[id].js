import React, { useEffect, useState } from 'react'
import { BiCommentDetail } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuNavigation } from "react-icons/lu";
import { FaVk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Navbar from '../componet/navbar';
import { TfiClose } from "react-icons/tfi";
import Footer from '../componet/footer';
import { FaWhatsapp } from "react-icons/fa";
import s from "../../styles/menuDetail.module.css"
import url from "../host/config"
import { useRouter } from 'next/router'
import axios from 'axios';
export default function menu_detail() {
var [accor,setAccor]=useState(1)
var [data,setData]=useState([])
var [food,setFood]=useState([])
var [user,setUser]=useState({})
var [commnet,setCommnet]=useState([])

var router=useRouter()
function getData() {
axios.get(`${url()}/api/foods/${router.query.id}`).then(res=>{
 setFood(res.data.food)
setUser(res.data.user)
for (let i = 0; i < res.data.comment.length; i++) {
 
  var date = new Date(res.data.comment[i].time_update)
var formattedDate = date.toLocaleDateString("ru-RU", { day: '2-digit', month: 'long', year: 'numeric' });
res.data.comment[i].date=formattedDate
}
setCommnet(res.data.comment)

 console.log(res.data);
  }).catch(err=>{
    alert(err)
  })
}

function buyOne(food_id) {
  var user=localStorage.getItem('user')
  console.log(user);
if(user){
var send_data=new FormData()
send_data.append("user_ca_id",JSON.parse(user)[0].id)
send_data.append("food_id",food_id)
send_data.append("count",1)
localStorage.setItem("karzinka",1)
axios.post(`${url()}/api/karzinka`,send_data).then(res=>{
  }).catch(err=>{
  })
}else{
  alert('Вы не зарегистрированы')
}
}

function sendMessage() {
  
  var userone=user.id
  var twouser=localStorage.getItem('user')
if(twouser){
axios.get(`${(url())}/api/room`).then(res=>{
var usertwo=(JSON.parse(twouser))[0].id
var test=false
for (let i = 0; i < res.data.length; i++) {
  if((res.data[i].user1==userone && res.data[i].user2==usertwo) || (res.data[i].user2==userone && res.data[i].user1==usertwo) ){
window.location="/profile/"
test=true
  }
}
if(!test){
  var data1=new FormData()
  data1.append('user1',userone)
  data1.append('user2',usertwo)
axios.post(`${url()}/api/room`,data1).then(res=>{
  alert('Проверьте окно чата')
window.location="/profile/"
})
}
  })
}else{
  alert('Вы не зарегистрированы')
}

  



}


var [page_window,setPageWindow]=useState("")
  useEffect(()=>{
if(router.query.id){
  getData()   
  setPageWindow(window.location.href)
}  
},[router])

  return (
    <div>
      <Navbar/>
      <div className={s.tort}>
<h2>{food.foods_name}</h2>
<div  onClick={()=>{document.querySelector('#yopil').style='display:flex'}} className={s.share1}>
<IoShareSocialOutline  /><span>Поделиться</span>
</div>
      </div>
      {user.pover?(<div className={s.cake}>
  <div className={s.cake1}>
    <div style={{background:`url(${food.image})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition:'center'}} className={s.cake_img}>
      <h3 className={s.green_back}>Приготовим сегодня</h3>
    </div>
    <div className={s.cake_desc}>
<h3 >Описание и состав</h3>
<p>{food.description}</p>
<h3>Условия доставки</h3>
<p>{food.dastafka_us}</p> <br />



{accor==0?(<div className={s.trans_span}>
  <h3>Условия хранения</h3>
  <p>{food.preparation_time} часа в холодильнике</p>
  <h3>Инфо</h3>
  <div className={s.info}>
    <div className={s.ves}>
<h4>Вес</h4>
<h4>Время <br />приготовления</h4>
    </div>
    <div className={s.day}>
<p>{food.weight}</p>
<p>{food.preparation_time/24 && (food.preparation_time/24).toFixed(0)} <br />день</p>
    </div>
  </div>
 
  <span onClick={()=>setAccor(1)}>Скрыть</span>
</div>):(
<div className={s.trans_span}>
  <span onClick={()=>setAccor(0)}>Прочитать подробнее
</span>
</div>
)}

<div className={s.buy}>
<div className={s.price}>
<h3>{food.price} ₽</h3>
<p>{food.weight}</p>
</div>
<button onClick={()=>buyOne(food.id)}>В корзину</button>
</div>
    </div>
    <div className={s.about_cook}>
    <div className={s.cards}>
<div className={s.card}>
<div className={s.profil}>
<img src={user.image} alt="" />
<div className={s.bal}>
<p className={s.p1}>{user.mar && (user.mark).toFixed(1)} <span><BiCommentDetail className={s.comment} /> {user.mark_org}</span></p>
<p className={s.p2}>
  {['','','','',''].map((item,key)=>{
    if(user.mark>key){
    return <FaStar key={key} className={s.star} />
    }else{
      return <FaStar key={key} className={s.star}  style={{color:'gray'}} />
    }
  })}

</p>
<p className={s.p3}><CiLocationArrow1 className={s.location} /> 0.0 км от вас</p>
</div>
</div>
<div className={s.p_ism}>
<h1>{user.username} {user.name}</h1>
</div>
<p className={s.ism_p}>{user.pover?user.pover.ish_yonalishi:""}</p>
<div className={s.p_b}>
<button onClick={()=>{sendMessage()}}><LuNavigation /> Написать сообщение</button>
</div>
<div className={s.vbr_blyud}>
<p onClick={()=>{window.location="/foods"}} >Все блюда</p>
{user.category.map((item,key)=>{
  return <p onClick={()=>{
    localStorage.setItem("category", item.id)
    setTimeout(() => {
      window.location="/foods/"
    }, 100);
  }} key={key} >{item.title}</p>
})}
</div>

</div>
</div>
    </div>
  </div>
</div>):(<></>)}



<div id='yopil' className={s.modal_ssilka}>
  <div  className={s.copy_ssilka}>
<div className={s.ichi}>
<div className={s.close1}>
  <h3>Поделиться</h3>
  <TfiClose onClick={()=>{document.querySelector("#yopil").style='display:none'}} style={{fontSize:'22px'}} />
</div>
<div className={s.sayt}>
<div className={s.vk}>
<FaVk />
</div>
<div className={s.instagram}>
<FaInstagram />
</div>
<div className={s.telegram}>
<FaTelegramPlane />
</div>
<div className={s.whatsapp}>
<FaWhatsapp />
</div>

</div>
<hr className={s.hr}/>
<h6 style={{fontWeight:500,fontSize:'14px'}}>Ссылка на блюдо</h6>
<input className={s.inp_value} value={ page_window } type="text" />
<div className={s.btns}>
<button id='blck' onClick={()=>{document.querySelector('#blck').style="display:none";navigator.clipboard.writeText(`${window?(window.location.href):""}`)
document.querySelector("#nn").style="display:block"
}} className={s.block}>Копировать ссылку</button>
<button id='nn'  className={s.none}>Ссылка скопирована!</button>
</div>
</div>
  </div>
</div>

{commnet.length>0?(<div className={s.about_c}> <div className={s.buyers}>
<h3>ОТЗЫВЫ ПОКУПАТЕЛЕЙ</h3>
<h4>{commnet.length} ОТЗЫВА</h4>
  </div>
  {commnet.map((item,key)=>{
    return <>
     <div className={s.coment_1}>
  <div className={s.star_buyers}>
<div className={s.between}>
<img src={item.image} alt="" />
<div className={s.stars} onClick={() => { window.location = `/oneuser/${item.user_id}` }}>
  <div className={s.name}>
    <h4>{item.name} {item.lastname} </h4><p>{item.date}</p>
  </div>
  <div className={s.star}>
  {['','','','',''].map((item1,key1)=>{
    if(item.mark>key1){
    return <FaStar key={key1} className={s.star} />
    }else{
      return <FaStar key={key} className={s.star}  style={{color:'gray'}} />
    }
  })}
  </div>
</div>

</div>
  </div>
  <p className={s.bento} style={{marginLeft:'7%'}}>{item.description}</p>
 </div>
 {key+1!=commnet.length?(<hr className={s.hr} />):(<></>)}
    </>
  })}


</div>):(<></>)}

<Footer/>
    </div>
  )
}
