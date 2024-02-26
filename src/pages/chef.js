import React from 'react'
import { PiLinkThin } from "react-icons/pi";
import s from "../styles/chef.module.css"
import { IoClose } from "react-icons/io5";  
import { TbCameraPlus } from "react-icons/tb";
import { FaCamera } from "react-icons/fa";
export default function chef() {
  return (
    <div>
        <div id='yopil' className={s.black}>
            <div className={s.white}>
<div className={s.white_ichi}>
    <h1 id={s.h1} style={{fontWeight:900}}>СТАТЬ ПОВАРОМ</h1>
<div className={s.photo_inp}>
    
<div className={s.foto_input}>
<h4>Расскажите о себе*</h4>
<input type="text" placeholder='Фамилия и имя' />
<input type="text" placeholder='Email'/>
<textarea placeholder='О себе' style={{marginTop:'20px',outline:'none',borderRadius:'10px',paddingLeft:'10px',paddingTop:'10px'}} name="" id="" cols="67" rows="10"></textarea>
{/* <input style={{height:'200px'}} type="text" /> */}
<select name="" id="">
    <option value="">sdffd1234fs</option>
    <option value="">sdf442fdfs</option>
    <option value="">sdffdfers</option>
    <option value="">sdffdsdfsfdfsdfs</option>
</select>
</div>


<TbCameraPlus id='cam1' onClick={()=>{
    document.querySelector("#none").style="display:block"
    document.querySelector("#cam1").style="display:none"

}} className={s.cam_n}/>
<div id='none' className={s.camera_foto}>
<div className={s.camera}>
<div className={s.cam_gap}>
<IoClose onClick={()=>{
    document.querySelector("#cam1").style="display:block"
    document.querySelector("#none").style="display:none"

}} className={s.yop2}/>
<center><FaCamera style={{fontSize:'30px'}} /></center>
<h4>Добавить фотку <br /> профиля</h4>
</div>
</div>  
</div>
</div>

<h3 style={{marginTop:'20px'}}>  Выберите категории меню*</h3>

<div className={s.category1}>
    <div className={s.s_categ}>
<div className={s.check}>
    <input type="checkbox" /><h4>Торты</h4>
</div>
<div className={s.check}>
    <input type="checkbox" /><h4>Торты</h4>
</div>
<div className={s.check}>
    <input type="checkbox" /><h4>Торты</h4>
</div>
    </div>

    <div className={s.s_categ}>
    <div className={s.check}>
    <input type="checkbox" /><h4>Торты</h4>
</div>
<div className={s.check}>
    <input type="checkbox" /><h4>Торты</h4>
</div>
<div className={s.check}>
    <input type="checkbox" /><h4>Торты</h4>
</div>
</div>
</div>

<h3 style={{marginTop:'30px'}}>Где Вы готовите*</h3>
<IoClose className={s.yop} />
<div className={s.foto_input1}>
<select style={{marginBottom:'20px'}} name="" id="">
    <option value="">sdffd1234fs</option>
    <option value="">sdf442fdfs</option>
    <option value="">sdffdfers</option>
    <option value="">sdffdsdfsfdfsdfs</option>
</select>

<a  href="">Пример фото с кухней!</a>

<div className={s.link}>
<PiLinkThin style={{color:'#06c160',fontSize:'22px'}} /><span>Прикрепите фото кухни</span>
</div>

</div>
<h3>С какого года в деле</h3>
<div className={s.foto_input2}>
    <input type="text" />
</div>

<h3 style={{marginTop:'30px',marginBottom:'10px'}}>Подтверждение личности</h3>
<div className={s.foto_input2}>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, nesciunt consequatur. Delectus obcaecati nihil hic rerum magnam. Reiciendis, laborum omnis!
</p>
</div>
<div className={s.link2}>
<PiLinkThin style={{color:'#06c160',fontSize:'22px'}} /><span>Прикрепите фото кухни</span>
</div>


<h3 style={{marginTop:'30px',marginBottom:'10px'}}>Подтверждение личности</h3>
<div className={s.foto_input2}>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, nesciunt consequatur. Delectus obcaecati nihil hic rerum magnam. Reiciendis, laborum omnis!
</p>
</div>
<div className={s.link2}>
<PiLinkThin style={{color:'#06c160',fontSize:'22px'}} /><span>Прикрепите фото кухни</span>
</div>




<h3 style={{marginTop:'30px',marginBottom:'10px'}}>Подтверждение личности</h3>
<div className={s.foto_input2}>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, nesciunt consequatur. Delectus obcaecati nihil hic rerum magnam. Reiciendis, laborum omnis!
</p>
</div>
<div className={s.link2}>
<PiLinkThin style={{color:'#06c160',fontSize:'22px'}} /><span>Прикрепите фото кухни</span>
</div>
<div className={s.p_btn}>
<center><button>Отправить заявку</button>
<h5><strong>Винимание!</strong>-Поля обязательные к заполнению</h5>
</center>
</div>


</div>
            </div>
        </div>
    </div>
  )
}