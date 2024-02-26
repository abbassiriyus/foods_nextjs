import React, { useEffect } from 'react'
import c from "../styles/Cardgap.module.css"
export default function Cardgap({data1}) {
    useEffect(()=>{
        console.log(data1);
    })
return (
<div>

<div className={c.card}>
<div className={c.profil}>
<img src={data1 && data1.image} alt="" />
<div className={c.p_g}>
<p>{data1 && data1.fullname}</p>
<p>{data1 && data1.servis}</p>
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
)
}