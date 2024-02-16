import React from 'react'
import pc from "../styles/Profilcard.module.css"
import { BiCommentDetail } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
export default function profilcard() {
return (
<div>
<div className={pc.cards}>
<div className={pc.card}>
<div className={pc.profil}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/08edcd3a1f69db53879d224c7bda483fc8d076e0/08edcd3a1f69db53879d224c7bda483fc8d076e0-wc200.jpeg" alt="" />
<div className={pc.bal}>
<p className={pc.p1}>5.0 <span><BiCommentDetail className={pc.comment} /> 11</span></p>
<p className={pc.p2}>
<FaStar className={pc.star} />
<FaStar className={pc.star} />
<FaStar className={pc.star} />
<FaStar className={pc.star} />
<FaStar className={pc.star} />
</p>
<p className={pc.p3}><CiLocationArrow1 className={pc.location} /> 0.0 км от вас</p>
</div>
</div>
<div className={pc.p_ism}>
<h1>ТАТЬЯНА ИБРАГИМОВА</h1>
<p>Домашний повар</p>
</div>
<div className={pc.vbr_blyud}>
<p>Все блюда</p>
<p>Обед и ужин</p>
<p>Приготовим сегодня</p>
<p>Второе блюда</p>
<p>Русская кухня</p>
</div>
<div className={pc.p_b}>
<button>Написать сообщение</button>
</div>
</div>
</div>
</div>
)
}
