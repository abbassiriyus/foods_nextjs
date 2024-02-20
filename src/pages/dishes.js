import React, { useEffect, useState } from 'react'
import s from "../styles/dishes.module.css"


import { FiPlus } from "react-icons/fi";


import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { TbPaperclip } from "react-icons/tb";
import axios from 'axios';
import url from './host/config';
import Navbar from "../pages/componet/navbar"
import Footer from "../pages/componet/footer"
export default function dishes() {
var [page,setPage]=useState(0)
var [data,setData]=useState([])

// function och(){
// document.querySelector("#werwe").style = "display: block;"
// document.querySelector("#arrow_d").style="display:none"
// document.querySelector("#arrow_u").style="display:block"
// }


// function yop(){
// document.querySelector("#werwe").style = "display: none;"
// document.querySelector("#arrow_d").style = "display:block"
// document.querySelector("#arrow_u").style = "display: none"
// }



function getData() {
axios(`${url}/api/category`).then(res=>{
setData(res.data)
}).catch(err=>{

})
}
useEffect(()=>{



getData()
},[])
return (
<div>



<Navbar/>

<div className={s.dishes}>
{page==0?(
<div onClick={()=>{setPage(1)}} className={s.dishes_button} id='plus'>
<div className={s.circle}><FiPlus /></div>
<h5>Добавить блюдо</h5>
</div>
):(
<div className={s.d_i} id='inputlar'>
<h1>РЕДАКТИРОВАТЬ БЛЮДО</h1>


<div className={s.dishes_inp}>
<div className={s.inputlar1}>


<div className={s.input_s_dobavkoy}>
<div className={s.in}>
<input placeholder='Категория' className={s.inputlar_0} style={{border:'none',outline:'none'}} type="text" /> 
<MdOutlineKeyboardArrowDown id='arrow_d' onClick={()=>{och()}} className={s.arrow_d} /> <MdOutlineKeyboardArrowUp id='arrow_u' className={s.arrow_u} onClick={()=>{yop()}} /><br />
</div>
<div className={s.inp1_sozlari} id="werwe">
{data.map((item,key)=>{
return <p>{item.title}</p>
})}

</div>
</div>
<input placeholder='Название блюда' className={s.inputlar_11} type="text" /><br />
<textarea placeholder='Описание и состав' className={s.inputlar_2} type="text" /><br />
<input placeholder='Количество порций' className={s.inputlar_1} type="text" /><br />
<input placeholder='Вес (примерно:300г)' className={s.inputlar_1} type="text" /><br />
<input placeholder='Время приготовления' className={s.inputlar_1} type="text" /><br />
<textarea placeholder='Условия хранения' className={s.inputlar_2} type="text" /><br />
</div>
<div className={s.liniya}></div>
<div className={s.inputlar2}>
<input placeholder='Калорийность' className={s.inputlar_1} type="text" /><br />
<input placeholder='Белки, г' className={s.inputlar_1} type="text" /><br />
<input placeholder='Жиры, г' className={s.inputlar_1} type="text" /><br />
<input placeholder='Углеводы, г' className={s.inputlar_1} type="text" /><br />
<div className={s.input_a}>
<a href="#" className={s.inp_a}>Как рассчитать калорийность и БЖУ?</a><br />
</div>
<input placeholder='Упаковка' className={s.inputlar_1} type="text" /><br />
<input placeholder='Цена, р' className={s.inputlar_1} type="text" /><br />
<div className={s.liniya2}></div>
<div className={s.inp2_sozlari}>
<div className={s.inp2_s_p1}>
<p className={s.s_p1}>Вкусовые <br /> предпочтения:</p><br />
</div>
<div className={s.inp2_s_p3}>
<p className={s.inp2_s_p12}>Вегитарианское</p>
<p className={s.inp2_s_p2}>Без сахара</p>
<p className={s.inp2_s_p2}>Без лактозы</p>
<p className={s.inp2_s_p2}>Без глютена</p>
<p className={s.inp2_s_p2}>Без орехов и бабов</p>
<p className={s.inp2_s_p2}>Острое</p>
</div>
</div>
</div>
</div>


<div className={s.inp_x}>
<div className={s.i_g}>
<p><TbPaperclip /></p><a href="#">Рекомендуем форматы: jpeg, png, не более 10 файлов</a>
</div>
<div className={s.bb}>
<button className={s.b1}>Добавить</button>
<button className={s.b2} onClick={()=>setPage(0)}>Назад</button>
</div>
</div>

</div>

)}




</div>
<Footer/>
</div>
)
}
