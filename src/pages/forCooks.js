import React from 'react'
import s from "../styles/ForCooks.module.css"
import Image from 'next/image'
import img from "../images/logo.svg"
import img1 from "../images/rocket.png"
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
export default function forCooks() {
  return (
    <div>
        <header>
<div className={s.header_0}>
<div className={s.header_1}>
    <div className={s.header_text}>
        <span>Привет!</span>
        <h1>ЛЮБИШЬ ГОТОВИТЬ?</h1>
        <div className={s.header_img} data-tilt id={s.dispa}>
            <div className={s.img_header} data-tilt>
             <img className={s.logo} src={imageConfigDefault} alt="" />
             <img className={s.rocket} src={img1} alt="" />
            </div>
             </div>
        <h3>ПРИГЛАШАЕМ <br/> K СОТРУДНИЧЕСТВУ</h3>
        <p>Мы объединяем всех, кто любит готовить, a также <br/>кондитеров и фермеров, чтобы каждый мог <br/>разместить свою продукцию и зарабатывать больше!</p>
        <button>Регистрация в сервисе</button>
        <h4 className={s.header_p}>Займёт всего 3 минуты</h4>
    </div>
    <div className={s.header_img}>
   <div className={s.img_header} data-tilt>
    <Image className={s.logo} src={img} alt="" />
    <Image className={s.rocket} src={img1}  alt="" />
   </div>
    </div>
</div>
</div>
    </header>
    </div>
  )
}
