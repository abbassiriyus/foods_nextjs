import React from 'react'
import c from "../styles/Cardgap.module.css"
export default function Cardgap() {
return (
<div>
<div className={c.cards}>
<div className={c.card}>
<div className={c.profil}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/08e1ce517e2fa7a7ef57074b550e65d647770081/08e1ce517e2fa7a7ef57074b550e65d647770081-wc200.jpeg" alt="" />
<div className={c.p_g}>
<p>Ксения Павлова</p>
<p>Клиент сервиса</p>
</div>
</div>
<div className={c.commentariy}>
<p>Как-то раз я потратила пол дня, на то, чтобы найти нормальные бенто-тортики через одну запрещенную соцсеть и не будем говорить о том, как драгоценно время в день праздника, когда нужно срочно и шары, и подарки, ещё и торт нормальный найти.
И каково было мое удивление, когда мне показали это сервис!
Это ж теперь просто в 2 клика можно взять, открыть карту и посмотреть, кто в твоем районе всякие ништяки делает.
Выбрал - заказал - забрал. Все.
Шок, почтение и лайк, разумеется!</p>
</div>
</div>
</div>
</div>
)
}
