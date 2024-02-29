import React, { useEffect, useRef } from 'react'
import s from "../../styles/Card.module.css"
import { PiStarFill } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import VanillaTilt from 'vanilla-tilt';
import url from "../host/config"
import axios from 'axios';

export default function card(props){
    
const tiltRef = useRef(null);
    useEffect(() => {
      if (tiltRef.current) {
        VanillaTilt.init(tiltRef.current, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
        });
      }
    }, []);
function sendcard() {
   window.location=`/menudetail/${props.data.id}` 
}

function senduser() {
  window.location=`/oneuser/${props.data.user_povar_id}`
}
function buyOne(food_id) {
  var user=localStorage.getItem('user')
if(user){
var send_data=new FormData()
send_data.append("user_ca_id",JSON.parse(user)[0].id)
send_data.append("food_id",food_id)
send_data.append("count",1)
axios.post(`${url()}/api/karzinka`,send_data).then(res=>{
  }).catch(err=>{
  })
}else{
  alert('Вы не зарегистрированы')
}
}
useEffect(()=>{
  console.log(props);
},[])
  return (
  
<div  className={s.cards}  >
  {props.data?(  <div className={s.card}> 
        <div className={s.card_img}>
    <div className={s.card}  > 
        <div onClick={()=>sendcard()} style={{background:`url(${props.data.image})`,backgroundSize:'cover',  backgroundSize: '100% 100%',backgroundRepeat: 'no-repeat',paddingTop:'8px'}}  className={s.card_img}>
            <h3>Заказ за {(props.data.preparation_time)} часа</h3>
        </div>
        <div className={s.card_text}>
    <div   class={s.card_text2}>
        <img onClick={()=>senduser()} src={props.data.user_image} alt="" />
        <h4  onClick={()=>senduser()} >{props.data.username} {props.data.name}</h4>
     <div onClick={()=>senduser()}  class={s.comment}>
        <div class={s.star}>
          {['','','','',''].map((item,key)=>{
         if(props.data.mark>key){
     return <PiStarFill  />
         }else{
      return <PiStarFill style={{color:"gray"}} />
         }
          })}  
        </div>
        <p>{(props.data.mark).toFixed(1)}</p>
        <div class={s.message}>
        <RiMessage2Line />
            <p>{props.data.mark_org}</p>
        </div>
     </div>
        <a  onClick={()=>sendcard()} style={{background:'red'}}  ><h2>{props.data.foods_name}</h2></a>
        <div class={s.korzina}>
            <div class={s.price}>
                <span>{props.data.price} ₽</span>
                <p>{props.data.portion} кг.</p>
            </div>
            <button onClick={()=>buyOne(props.data.id)} >В корзину</button>
        </div>

        <div class={s.star2}>
            <PiStarFill />
            <p>{(props.data.mark).toFixed(1)}</p>
        </div>
    </div>
        </div>
    </div>
    {/* <Script src="../path/to/script.js" /> */}
   </div>
</div>):(<></>)}
  
</div>

  )
}