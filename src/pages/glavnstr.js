import React from 'react'
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import { LiaCommentDots } from "react-icons/lia";
import s from  "../styles/Glavnstr.module.css"
export default function glavnstr() {
return (
<div>
<div className={s.header}>
<div className= {s.h_h1}>
<h1>Привет!</h1>
</div>
<div className={s.head}>
<div className={s.h_soz}>
<h1>У НАС ЕСТЬ ЧТО ПОЕСТЬ!</h1>
<p>Тебе не нужно покупать продукты, готовить и мыть посуду. Наслаждайся вкусной едой без лишних забот!</p>
<button>Выбрать блюда</button>
<p>Вы повар? — <span>давайте с нами!</span></p>
<span>Регистрация займет всего 3 минуты</span>
</div>
<div className={s.h_swip_img}>
<div className={s.swiper}>
<img className={s.swiper_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/af944830ed2445956672f8103d2f0a78e8b3b185/af944830ed2445956672f8103d2f0a78e8b3b185-wc800.png" alt="" />
<div className={s.s_i}>
<FaArrowLeft />
<FaArrowRight />
</div>
<div className={s.s_profil}>
<img className={s.prifil_foto} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136/7a565d18ccc65dbd82f4d4e7cb45ecf25d259136-wc200.jpeg" alt="" />
<div className={s.s_p_g_s}>
<p className={s.nazvanie_bluda}>Шах-плов</p>
<p className={s.stoimost}>2 200₽</p>
<div className={s.s_p_i_s1}>
<p className={s.sotuvchi}>Хатира Мамедова</p>
<div className={s.bal}>
<FaStar className={s.star} />
<FaStar className={s.star} />
<FaStar className={s.star} />
<FaStar className={s.star} />
<FaStar className={s.star} />
<p className={s.bal2}>5.0</p>
<p><LiaCommentDots />18</p>
</div>
<p className={s.kakoypovar}>Домашний повар</p>
</div>
</div>
<div className={s.s_p_i_s2}>
<button>Заказать</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
)
}

