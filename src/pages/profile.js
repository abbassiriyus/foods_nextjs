import React, { useState } from 'react'
import s from "../styles/profile.module.css"
import Image from 'next/image';
import { FaPen } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import Input_error from './componet/input_error';
import Input_error2 from './componet/input_error2';
import img from "../images/info-image.png"

// import 'bootstrap/dist/css/bootstrap.min.css';
import { IoExitOutline,IoCloseOutline, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
export default function profil() {
  var [page, setPage] = useState(0)
  var [formc,setFormc]=useState(0)
  return (
    <div>
      <div className={s.line}>
        <div onClick={() => setPage(0)} className={s.line1}>
          <a style={page == 0 ? { background: '#06c160', color: 'white' } : { background: 'rgb(224, 224, 224)', color: 'black' }} href="#">Профиль</a>
        </div>
        <div onClick={() => setPage(1)} className={s.line1}>
          <a style={page == 1 ? { background: '#06c160', color: 'white' } : { background: 'rgb(224, 224, 224)', color: 'black' }} href="#">Чаты</a>
        </div>
        <div onClick={() => setPage(2)} className={s.line1}>
          <a style={page == 2 ? { background: '#06c160', color: 'white' } : { background: 'rgb(224, 224, 224)', color: 'black' }} href="#">Мои блюди</a>
        </div>
        <div onClick={() => setPage(3)} className={s.line1}>
          <a style={page == 3 ? { background: '#06c160', color: 'white' } : { background: 'rgb(224, 224, 224)', color: 'black' }} href="#">Полезные материалы</a>
        </div>
      </div>
<div className={s.image_prosta}>
  <Image src={img} alt="" />
</div>
      <div className={s.main_profil}>
        <div className={s.storage_user}>
          <div className={s.edit_account}><FaPen />  <span>Редактировать</span></div>
          <div className={s.image_profil} >
            <div className={s.account_img} style={{ background: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png")', backgroundSize: 'cover' }} />
            <div className={s.p_user}><span>Дата регистрации</span>
              <div>08 февраля 2024</div></div>
          </div>
          <h1>
            ABBAS</h1>
        </div>
        <div className={s.danix_contact}>
          <h1>ДАННЫЕ ДЛЯ ВХОДА</h1>
         <div className={s.conntact_input}>
         <div className={s.pageinput}>
         <p>Телефон</p>
            <input type="text" value="+7 (902)  663-33-71" disabled /><MdErrorOutline className={s.icon_error} />
          </div>
          <div className={s.pageinput}>
            <p>Email</p>
            <input disabled value="webabbas9@gmail.com" type="text" />
            
            <MdErrorOutline title='' className={s.icon_error} />
          </div>
         </div>
         <div className={s.openmodal_button}>
       <div className={s.edit_account1}  onClick={()=>{setFormc(1);document.querySelector("#modal_page").style="display:flex"}}> Подтвердить номер телефона</div> 
       <div className={s.edit_account1}  onClick={()=>{setFormc(0);document.querySelector("#modal_page").style="display:flex"}}>Изменить пароль</div> 
         </div>
        </div>

<div className={s.chiqish_button}><IoExitOutline  style={{paddingRight:'10px',fontSize:'40px'}} />
<div>Выйти</div>
</div>

      </div>


<div className={s.modal_page} id='modal_page' >
<div className={s.modal_form}>
  <div className={s.close_x} onClick={()=>{document.querySelector("#modal_page").style="display:none"}}><IoCloseOutline /></div>
  {formc?(<div className={s.modal_head}>
    <h3 style={{maxWidth:'200px'}}>Подтвердите номер телефона</h3>
<div className={s.input_phone} id='border2'>
  <p>Телефон</p>
  <input type="number"  onKeyUp={(e)=>{
  if((e.target.value).length<1){
    document.querySelector('#error_parol2').style="z-index:1;position:relative"
    document.querySelector('#border2').style="border:1px solid rgba(255, 0, 0, 0.77)"
  }else{
    document.querySelector('#error_parol2').style="z-index:-1;position:relative"
    document.querySelector('#border2').style="border:1px solid gray"
  }
  }}  />
   
  <div id='error_parol2' style={{position:"relative",zIndex:-1}}>
    <Input_error message="Заполните поле" />
  <MdErrorOutline title='' className={s.icon_error} />
</div>
</div>
    <button>Подтвердить</button>
  </div>):(<div className={s.modal_head}>
    <h3 style={{maxWidth:'200px'}}>Изменить пароль</h3>
<div className={s.input_phone} id='border1'>
  
  <input type="password" id='password2' onKeyUp={(e)=>{
  if((e.target.value).length<1){
    document.querySelector('#error_parol1').style="z-index:1;position:relative"
    document.querySelector('#border1').style="border:1px solid  rgba(255, 0, 0, 0.77)"
  }else{
    document.querySelector('#error_parol1').style="z-index:-1;position:relative"
    document.querySelector('#border1').style="border:1px solid gray"
  }
  }} placeholder='Текущий пароль' />
      <IoEyeOutline onClick={()=>{
document.querySelector("#password2").type="text"
document.querySelector("#eyes12").style="display:none"
document.querySelector("#eyes22").style="display:block"
                  }} id='eyes12' className={s.eye1} /> 
                  <IoEyeOffOutline className={s.eye1}  style={{display:"none"}} id='eyes22' onClick={()=>{
document.querySelector("#password2").type="password"
document.querySelector("#eyes22").style="display:none"
document.querySelector("#eyes12").style="display:block"
                  }}  />
   <div id='error_parol1' style={{position:"relative",zIndex:-1}}>
    <Input_error message="Заполните поле" />
  <MdErrorOutline title='' className={s.icon_error} />
</div>
</div>
<div className={s.input_phone} id='border'>
  
  <input type="password" id='password1' onKeyUp={(e)=>{
  if((e.target.value).length<1){
    document.querySelector('#error_parol').style="z-index:1;position:relative"
    document.querySelector('#border').style="border:1px solid  rgba(255, 0, 0, 0.77)"
  }else{
    document.querySelector('#error_parol').style="z-index:-1;position:relative"
    document.querySelector('#border').style="border:1px solid gray"
  }
  }} placeholder='Новый пароль' /> 
   <IoEyeOutline onClick={()=>{
document.querySelector("#password1").type="text"
document.querySelector("#eyes1").style="display:none"
document.querySelector("#eyes2").style="display:block"
                  }} id='eyes1' className={s.eye1} /> 
                  <IoEyeOffOutline className={s.eye1}  style={{display:"none"}} id='eyes2' onClick={()=>{
document.querySelector("#password1").type="password"
document.querySelector("#eyes2").style="display:none"
document.querySelector("#eyes1").style="display:block"
                  }}  />
  <div id='error_parol'  style={{position:"relative",zIndex:-1}}>
    <Input_error2 message="Заполните поле" />
  <MdErrorOutline title='' className={s.icon_error} />
</div>
</div>
    <button>Изменить пароль</button>
    
  </div>)}
  
  
</div>
</div>




    </div>
  );
}
