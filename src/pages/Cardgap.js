import React, { useEffect } from 'react'
import c from "../styles/Cardgap.module.css"
export default function Cardgap({data1}) {
useEffect(()=>{

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
<p>{data1 && data1.deskription}</p>
</div>

</div>
</div>
)
}