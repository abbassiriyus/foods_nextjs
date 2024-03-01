import React, { useEffect, useState } from 'react'
import pc from "../styles/Profilcard.module.css"
import { BiCommentDetail } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import url from "./host/config";
export default function profilcard({data}) {

return (
<div>
<div className={pc.cards}>
<div className={pc.card}>
    <div>
<div className={pc.profil}>
    <div style={{
        background:`url(${data.image})`,backgroundSize:'cover',
        width:'70px',borderRadius:'50%',
        height:'70px',
        backgroundPosition:'center' }} className={pc.image12}>

    </div>
{/* <img src={data.image} alt="" /> */}
<div className={pc.bal}>
<p className={pc.p1}>{data.mark}<span><BiCommentDetail className={pc.comment} />{data.mark_org}</span></p>
<p className={pc.p2}>
    {['','','','',''].map((item,key)=>{
        if(data.mark>key){
 return <FaStar className={pc.star} />
        }else{
 return <FaStar className={pc.star} style={{color:'grey'}} />
        }
    })}
</p>
{/* <p className={pc.p3}><CiLocationArrow1 className={pc.location} /> 0.0 км от вас</p> */}
</div>
</div>
<div className={pc.p_ism}>
<h1>{data.name}</h1>
</div>
<p className={pc.ism_p}>{data.ish_yonalishi}</p></div>
<div className={pc.vbr_blyud}>
<p>Все блюда</p>
{data.category.map(item=>{
    return <p>{item.title}</p>
})}
</div>
<div className={pc.p_b}>
    
<center><button>Написать сообщение</button></center>
</div>
</div>
</div>
</div>
)
}
