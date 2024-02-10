import React from 'react'
import f from "../styles/Footer.module.css";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoVk } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

export default function footer() {
return (
<div>
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
<p className={f.ap_p1}>DOWNLOAD ON THE</p>
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
<BiLogoTelegram className={f.f_i} />
<IoLogoVk className={f.f_i} />
</div>
</div>
</div>
</div>
)
}

