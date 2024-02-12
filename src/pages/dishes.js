import React from 'react'
import s from "../styles/dishes.module.css"
import { FiPlus } from "react-icons/fi";
export default function dishes() {
  return (
    <div>
        
<div className={s.dishes}>
<div className={s.dishes_button}>
<div className={s.circle}><FiPlus /></div>
<h5>Добавить блюдо</h5>
</div>
</div>

    </div>
  )
}
