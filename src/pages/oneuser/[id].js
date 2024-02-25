import React, { useEffect, useState } from 'react'
import c from "../../styles/First.module.css"
import { TiStarFullOutline } from "react-icons/ti";
import { BiCommentDetail } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import Navbar from "../componet/navbar";
import Footer from "../componet/footer"
import { useRouter } from 'next/router';
import axios from 'axios';
import url from "../host/config"
export default function first() {
  var [user,setUser]=useState({})
  var [kitchen,setKitchen]=useState([])
  var [category,setCategory]=useState([])
  var [commnet,setCommnet]=useState([])
  var [foods,setFoods]=useState([])


    var [data,setData]=useState([])
    var router=useRouter()
    function getData() {
      axios.get(`${url()}/api/getpovar/${router.query.id}`).then(res=>{
      setData(res.data)
      setUser(res.data.user)
      setKitchen(res.data.kitchen)
      setCategory(res.data.category)
      setCommnet(res.data.commnet)
      setFoods(res.data.foods)
      console.log(res.data);
      }).catch(err=>{
        alert(err)
      })
    }
    function sendMessage() { 
      var userone=router.query.id
      var twouser=localStorage.getItem('user')
    if(twouser){
    axios.get(`${(url())}/api/room`).then(res=>{
    var usertwo=(JSON.parse(twouser))[0].id
    var test=false
    for (let i = 0; i < res.data.length; i++) {
      if((res.data[i].user1==userone && res.data[i].user2==usertwo) || (res.data[i].user2==userone && res.data[i].user1==usertwo) ){
    window.location="/profile"
    test=true
      }
    }
    if(!test){
      var data1=new FormData()
      data1.append('user1',userone)
      data1.append('user2',usertwo)
    axios.post(`${url()}/api/room`,data1).then(res=>{
      alert('Проверьте окно чата')
    window.location="/profile"
    })
    }
      })
    }else{
      alert('Вы не зарегистрированы')
    }
    
      
    
    
    
    }
    function sendcard(id) {
      window.location=`/menudetail/${id}` 
   }
   
   function senduser(id) {
     window.location=`/oneuser/${id}`
   }

      useEffect(()=>{
    if(router.query.id){
      getData()   
    }  
    },[router])

return (
<div>
<Navbar/>

<div className={c.slka}>
<div className={c.s_p}>
<a href="/" className={c.a1}>Главная <MdKeyboardArrowRight /></a>
<a href="/pover" className={c.a1}>Все повора <MdKeyboardArrowRight /></a>
<p>{user.name} {user.lastname} {user.username}</p>
</div>
<p className={c.s_p1}><FiShare2 /> Поделиться</p>
</div>
{user.id?(<div className={c.profil}>
<div className={c.p_img}>
<img src={user.image} alt="" />
</div>
<div className={c.p_soz}>
<div className={c.p1}>
<h1>{user.name} {user.lastname} {user.username}</h1>
<div className={c.ball}>
<div  className={c.stars}>

{['','','','',''].map((item,key)=>{
  if(user.mark>key){
 return <TiStarFullOutline className={c.star} />
  }else{
 return <TiStarFullOutline className={c.star} style={{color:'grey'}} />
  }
 })
}


<p>{user.mark}</p>
</div>
<div className={c.otzv}>
<p><BiCommentDetail /> {user.mark_org} отзыва</p>
</div>
</div>
<button>Написать</button>
</div>
<div className={c.p2}>
<div className={c.block0}>
  {category.map((item,key)=>{
    return <p>{item.title}</p>
  })}


</div>

<div className={c.block}>
<div className={c.block1}>
<p>Адрес</p>
<p>Специализация</p>
<p>Сколько лет в деле</p>
<p>Дата регистрации</p>
</div>
{user.pover?(<div className={c.block2}>
<p><CiLocationArrow1 className={c.location} /> {user.pover.deskription}</p>
<p>{user.pover.ish_yonalishi}</p>
<p>{user.pover.expertise}</p>
<p>{user.pover.time_create?user.pover.time_create.slice(0, 10):""}</p>
</div>):(<></>)}

</div>

</div>

<div className={c.p3}>
<h1>О СЕБЕ</h1>
<p>{user.about_me}</p>
</div>

</div>
</div>):(<></>)}

{user.id?(<div className={c.profil2}>
<div className={c.p_img}>
<img src={user.imgage} alt="" />
</div>
<div className={c.p_soz}>
<div className={c.p1}>
<h1>{user.name} {user.lastname} {user.username}</h1>
<div className={c.ball}>
<div className={c.stars}>
{['','','','',''].map((item,key)=>{
  if(user.mark>key){
 return <TiStarFullOutline className={c.star} />
  }else{
 return <TiStarFullOutline className={c.star} style={{color:'grey'}} />
  }
 })
}
<p>4.9</p>
</div>
<div className={c.otzv}>
<p className={c.s_p12}><BiCommentDetail /> {user.mark_org} отзыва</p>
</div>
</div>
<button>Написать</button>
</div>
<div className={c.block0}>
{category.map((item,key)=>{
    return <p>{item.title}</p>
  })}
</div>
<div className={c.p3}>
<div className={c.p3_hp}>
<h1>О СЕБЕ</h1>
<p className={c.s_p2}><FiShare2 /> Поделиться</p>
</div>
<p>{user.dictionary}</p>
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
<p><CiLocationArrow1 className={c.location} /> {user.deskription}</p>
<p>{user.ish_yonalishi}</p>
<p>{user.expertise}</p>
<p>{user.time_create?user.time_create.slice(0, 10):""}</p>
</div>
</div>
</div>

</div>
</div>):(<></>)}

{foods.length!=0?(<div className={c.menu}>
<h1>МЕНЮ</h1>
<div className={c.m_c}>
{foods.map((item,key)=>{
return <div className={c.card}>
<img onClick={()=>{sendcard(item.id)}} src={item.image} style={{height:'350px'}} alt="" />
<div className={c.c_soz}>
<h1 onClick={()=>{sendcard(item.id)}}>{item.foods_name}</h1>
<div  className={c.c_s}>
<div onClick={()=>{sendcard(item.id)}} className={c.c_s1}>
<span >{item.price} ₽</span>
<p>{item.weight}</p>
</div>
<button>В корзину</button>
</div>
</div>
</div>
})}
</div>

</div>):(<></>)}

{commnet!=0?(<div className={c.comment}>
<h1 className={c.c_h1}>ОТЗЫВЫ ПОКУПАТЕЛЕЙ</h1>

{commnet.map((item,key)=>{
return<div className={c.c_c}>
<div className={c.c_profil}>
<img  onClick={()=>senduser(item.user_id)}  src={item.image} alt="" />
<div onClick={()=>senduser(item.user_id)} className={c.b}>
<h1> {item.name}</h1>
{['','','','',''].map((item,key)=>{
if(user.mark>key){
return <TiStarFullOutline className={c.star} />
}else{
return <TiStarFullOutline className={c.star} style={{color:'grey'}} />
}
})
}
</div>
</div>
<p>{item.description}</p>
</div>
})}

</div>):(<></>)}


{kitchen.length!=0?(<div className={c.kuxnya}>
<h1>МОЯ КУХНЯ</h1><div className={c.img_k}>
{kitchen.map((item,key)=>{
return <img src={item.image} alt="" />
})}
</div>
</div>):(<></>)}



<Footer/>
</div>
)
}
