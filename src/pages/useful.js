import React, { useEffect, useState } from 'react'
import { FaRegFilePdf } from "react-icons/fa6";
import s from "../styles/Useful.module.css"
import url from './host/config';
import axios from 'axios';
export default function useful() {
  var[data,setData]=useState([])
  function getNecessary() {
    axios.get(`${url()}/api/necessary`).then(res=>{
      setData(res.data)
    })
  }
  useEffect(()=>{
    getNecessary()
  },[])
  return (
    <div>
<div className={s.documents_big}> 
<h1>Полезные материалы</h1>
<div className={s.documents}>
{data.map((item,key)=>{
  return <a key={key}  href={item.file} className={s.document}>
  <div className={s.pdf}>
  <FaRegFilePdf className={s.doc} />
  </div>
  <div className={s.pdf_text}>
  <p>{item.title}</p>
  </div>
  </a>
})}

</div>
</div>
    </div>
  )
}






