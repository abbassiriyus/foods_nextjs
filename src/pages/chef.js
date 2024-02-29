import React from 'react'
import s from "../styles/chef.module.css"
import { GrClose } from "react-icons/gr";
export default function chef() {
  return (
    <div>
      <div className={s.akkaunt}>
  <div className={s.wht}>
    <h3>Заявка принята</h3>
    <p>Отлично, аккаунт изготовителя успешно <br /> создан! <br/>
Скорее добавляйте свои блюда, чтобы <br/> пользователи могли их заказать!</p>
<button>Продолжить</button>
  <GrClose  className={s.whtclose} />
  </div>
</div>

    </div>
  )
}