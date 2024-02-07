import React from 'react'
import s from "../styles/card.module.css"
import { PiStarFill } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import Script from 'next/script';
export default function card() {
    
  return (
  
<div  className={s.cards} data-tilt >
    <div className={s.card} data-tilt > 
        <div className={s.card_img}>
            <h3>Заказ за 24 часа</h3>
        </div>
        <div className={s.card_text}>
    <div class={s.card_text2}>
        <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="" />
        <h3>Анна Казарцева</h3>
     <div class={s.comment}>
        <div class={s.star}>
            <PiStarFill />
            <PiStarFill />
            <PiStarFill />
            <PiStarFill />
            <PiStarFill />
        </div>
        <p>5.0</p>
        <div class={s.message}>
        <RiMessage2Line />
            <p>16</p>
        </div>
     </div>
        <a href=""><h2>Гнезда с грибами</h2></a>
        <div class={s.korzina}>
            <div class={s.price}>
                <span>720 ₽</span>
                <p>0,7 кг.</p>
            </div>
            <button>В корзину</button>
        </div>

        <div class={s.star2}>
            <PiStarFill />
            <p>5.0</p>
        </div>
    </div>
        </div>
    </div>
    <Script src="../path/to/script.js" />
   </div>

  )
}
