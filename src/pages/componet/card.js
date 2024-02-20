import React, { useEffect, useRef } from 'react'
import s from "../../styles/card.module.css"
import { PiStarFill } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import VanillaTilt from 'vanilla-tilt';
import axios from 'axios';
import url from '../host/config';
export default function card( props,{id} ){
    
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
      console.log(id);
    }, []);
function card1() {
   localStorage.setItem('one',JSON.stringify(props.data))
   window.location='/menu_detail' 
}
  return (
  
<div  className={s.cards}  >
    <div className={s.card} onClick={()=>{card1()}} > 
        <div style={{background:`url(${props.data.image})`,backgroundSize:'cover'}} className={s.card_img}>
    <div className={s.card}  > 
        <div className={s.card_img}>
            <h3>Заказ за 24 часа</h3>
        </div>
        <div className={s.card_text}>
    <div class={s.card_text2}>
        <img src={props.data.user_image} alt="" />
        <h3>{props.data.username} {props.data.name}</h3>
     <div class={s.comment}>
        <div class={s.star}>
            <PiStarFill />
            <PiStarFill />
            <PiStarFill />
            <PiStarFill />
            <PiStarFill />
        </div>
        <p>{props.data.mark}</p>
        <div class={s.message}>
        <RiMessage2Line />
            <p>{props.data.mark_org}</p>
        </div>
     </div>
        <a href=""><h2>{props.data.food_name}</h2></a>
        <div class={s.korzina}>
            <div class={s.price}>
                <span>{props.data.price} ₽</span>
                <p>{props.data.portion} кг.</p>
            </div>
            <button>В корзину</button>
        </div>

        <div class={s.star2}>
            <PiStarFill />
            <p>{props.data.mark}</p>
        </div>
    </div>
        </div>
    </div>
    {/* <Script src="../path/to/script.js" /> */}
   </div>
</div></div>

  )
}