import React, { useEffect, useRef } from 'react'
import s from "../../styles/Card.module.css"
import { PiStarFill } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import VanillaTilt from 'vanilla-tilt';

export default function card( props){
    
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
function card1() {
   localStorage.setItem('one',JSON.stringify(props.data))
   window.location=`/menudetail/${props.data.id}` 
}
  return (
  
<div  className={s.cards}  >
  {props.data?(  <div className={s.card} onClick={()=>{card1()}} > 
        <div className={s.card_img}>
    <div className={s.card}  > 
        <div style={{background:`url(${props.data.image})`,backgroundSize:'cover',  backgroundSize: '100% 100%',backgroundRepeat: 'no-repeat',paddingTop:'8px'}}  className={s.card_img}>
            <h3>Заказ за {(props.data.preparation_time).slice(0,2)} часа</h3>
        </div>
        <div className={s.card_text}>
    <div class={s.card_text2}>
        <img src={props.data.user_image} alt="" />
        <h4>{props.data.username} {props.data.name}</h4>
     <div class={s.comment}>
        <div class={s.star}>
          {['','','','',''].map((item,key)=>{
         if(props.data.mark>key){
     return <PiStarFill  />
         }else{
      return <PiStarFill style={{color:"gray"}} />
         }
          })}  
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
</div>):(<></>)}
  
</div>

  )
}