import React from 'react'
import s from "../styles/found.module.css"
import Card from "../pages/componet/card"
export default function found() {
  return (
    <div>
        <div className={s.not_found}>
            <div className={s.found_text}>
                <p>К сожалению, в вашем городе мы не <br />  нашли ни одного блюда по запросу <br /> 🙁 <br /><br />    
Попробуйте изменить условия <br /> поиска.  <br /><br />
Возникли вопросы? Напишите нам в <br /> Telegram <a href=""> @mypovar_help</a></p>

            </div>
            <div className={s.found_img}>
            <img src="https://povarnasvyazi.ru/images/empty-chat/potato.png" alt="" />
            </div>
        </div>
        
    </div>
  )
}
