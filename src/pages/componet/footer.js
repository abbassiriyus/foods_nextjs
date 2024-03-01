import React from 'react'
import f from "../../styles/Footer.module.css";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoVk } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
export default function footer() {
return (
<div style={{marginBottom:'100px'}}>
<div className={f.footer}>
<div className={f.f_gap}>
<h1>Повар на связи <span>— это сервис заказа блюд от проверенных домашних поваров и кондитеров.</span></h1><br />
<p className={f.f_p1}>Все повара, представленные на сервисе, проходят проверку: наша команда дегустирует блюда, запрашивает фотографии кухни, изучает аккаунты в социальных сетях.</p><br />
<p className={f.f_p2}>Кондитеры могут приготовить десерты с индивидуальным дизайном и начинкой - оформите заказ на понравившийся десерт и уточните пожелания в чате. Забрать заказ можно самостоятельно или оформить доставку.</p>
</div>
<div className={f.f_img}>
<p className={f.pol}>Cкачай мобильное приложение <br />
<span className={f.vp}>Повар на связи</span></p>
<div className={f.reklama}>
<div className={f.app_store}>
<div className={f.ap_i}>
<FaApple className={f.apple}/>
</div>
<div className={f.ap_soz}>
<p className={f.ap_p1}>Download on the</p>
<p className={f.ap_p2}>App Store</p>
</div>
</div>
<div className={f.google_play}>
<div className={f.gp_i}>
<FaGooglePlay className={f.google}/>

</div>
<div className={f.gp_soz}>
<p className={f.gp_p1}>GET IT ON</p>
<p className={f.gp_p2}>Google Play</p>
</div>
</div>
</div>
<div className={f.prilojenie}>
<div><BiLogoTelegram className={f.f_i} /></div>
<IoLogoVk className={f.f_i} />
</div>
</div>
</div>
<div className={f.footer2}>
<div className={f.f2_p}>
<p className={f.f2_ps}>©2024 <span className={f.p_spani}>Повар на связи</span></p>
</div>
<div className={f.f2_a}>
<a className={f.a_href1} href="#">support@povarnasvyazi.ru</a> <br /> <br />
<a className={f.a_href2} href="#">Условия использования сервиса и информация о компании</a>
</div>
</div>
</div>
)
}

