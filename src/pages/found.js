import React from 'react'
import s from "../styles/found.module.css"
export default function found() {
  return (
    <div>
        <div className={s.not_found}>
            <div className={s.found_text}>
                <p>К сожалению, в вашем городе мы не нашли ни одного блюда по запросу 🙁
Попробуйте изменить условия поиска.
Возникли вопросы? Напишите нам в Telegram <a href=""> @mypovar_help</a></p>

            </div>
            <div className={s.found_img}>
            <img src="https://povarnasvyazi.ru/images/empty-chat/potato.png" alt="" />
            </div>
        </div>
        
    </div>
  )
}
