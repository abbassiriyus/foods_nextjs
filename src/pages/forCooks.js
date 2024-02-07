import React, { useEffect } from 'react'
import s from "../styles/ForCooks.module.css"
import first_img from "../images/rocket.png"
import first_img2 from "../images/logo.svg"
import VanillaTilt from 'vanilla-tilt';

import Image from 'next/image'
export default function forCooks() {
useEffect(()=>{
    const element = document.querySelector(".js-tilt");
VanillaTilt.init(element);
element.addEventListener("tiltChange", callback);
VanillaTilt.init(element);

// Destroy instance
element.vanillaTilt.destroy();

// Get values of instance
element.vanillaTilt.getValues();

// Reset instance
element.vanillaTilt.reset();

// It also supports NodeList
const elements = document.querySelectorAll(".js-tilt");
VanillaTilt.init(elements);
})
    return (
    <div>
        <header className={s.for_cooks}>
<div className={s.text}>
    <p>Привет!</p>
    <h1>ЛЮБИШЬ ГОТОВИТЬ?</h1>
    <h3>ПРИГЛАШАЕМ К СОТРУДНИЧЕСТВУ</h3>
    <span>
    Мы объединяем всех, кто любит готовить, а также кондитеров и фермеров, чтобы каждый мог разместить свою продукцию и зарабатывать больше! 
    </span>
    <button>Регистрация в сервисе</button>
    <p>Займёт всего 3 минуты</p>
</div>
<div className={s.image}>
<div><Image src={first_img2} className='js-tilt' alt="" /></div>

<Image src={first_img} alt="" />
</div>

        </header>




    </div>
  )
}
