import React from 'react'
import s from "./input_error.module.css"
export default function input_error2(props) {
    function opem() {
        document.querySelector('#data1').style="display:block"
    }
    function opem2() {
        document.querySelector('#data1').style="display:none"
    }
  return (
    <div className={s.page} onMouseLeave={()=>{opem2()}} onMouseEnter={()=>{opem()}}>
        <div onMouseLeave={()=>{opem2()}}  className={s.message} id='data1'>{props.message}</div>
        
        </div>
  )
}
