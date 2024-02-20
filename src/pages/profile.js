import React, { useEffect, useState } from 'react'
import s from "../styles/profile.module.css"
import Image from 'next/image';
import { FaPen } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import Input_error from './componet/input_error';
import Input_error2 from './componet/input_error2';
import img from "../images/info-image.png"
import { BsPlusLg } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoDocumentOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { TbLocation } from "react-icons/tb";
import { CiShare2 } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassniki } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import Footer from './componet/footer';
import Chat from './chat';
import Dishes from './dishes'; 
import Useful from './useful';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { IoExitOutline,IoCloseOutline, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Navbar from './componet/navbar';
import axios from 'axios';
import url from './host/config';
export default function profil() {
  var [page, setPage] = useState(0)
  var [formc,setFormc]=useState(0)
var [user,setUser]=useState({})
var [ish,setIsh]=useState([])

function jin1(){
document.querySelector('#po').style =`top:0;`
}
function close(){
  document.querySelector('#po').style =`top:-1110vh;  transition: .5s;`
  }

function ozgar(){
  document.querySelector('#korm').style=`display:none;`
  document.querySelector('#kok2').style=`display:block;`
}
function ozgar2(){
  document.querySelector('#kok2').style=`display:none;`
  document.querySelector('#korm').style=`display:block;`
}

function ikkj1(){
  document.querySelector('#id1').style = `display: none;`
  document.querySelector('#id2').style = `display: block;`
}

function putUserInfo() {
  var send_data={
   image:document.querySelector('#file_image').files[0]?document.querySelector('#file_image').files[0]:user.image,
   name:document.querySelector('#name_1').value,
   phone:document.querySelector('#phone_1').value,
   email:document.querySelector('#email_1').value,
   password:user.password
  }
  axios.put(`${url}/api/users/${user.id}`,send_data).then(res=>{
    setUser(res.data)
    localStorage.setItem('user',JSON.stringify(res.data))
    document.querySelector('#id2').style = `display: none;`; document.querySelector('#id1').style = `display: block;`
  })
}

function putUserphone() {
  var send_data={
   image:user.image,
   name:user.name,
   phone:document.querySelector('#phone_2').value,
   email:user.email,
   password:user.password
  }
  axios.put(`${url}/api/users/${user.id}`,send_data).then(res=>{
    setUser(res.data)
    localStorage.setItem('user',JSON.stringify(res.data))
    document.querySelector('#id2').style = `display: none;`; document.querySelector('#id1').style = `display: block;`
  })
}

function resetPasword() {
  var tpassword=document.querySelector('#password2')
  var npassword=document.querySelector('#password1')

  if(user.password==tpassword.value){
    var send_data={
      image:user.image,
      name:user.name,
      phone:user.phone,
      email:user.email,
      password:npassword.value
     }
     axios.put(`${url}/api/users/${user.id}`,send_data).then(res=>{
       setUser(res.data)
       localStorage.setItem('user',JSON.stringify(res.data))
       document.querySelector('#id2').style = `display: none;`; document.querySelector('#id1').style = `display: block;`
     })
  }else{

  }
}

function getUsers() {
  var a=JSON.parse(localStorage.getItem("user"))
if(a){
   axios.get(`${url}/api/users/${a[0].id}`).then(res=>{
  var date = new Date(res.data.time_update)
  var formattedDate = date.toLocaleDateString("ru-RU", { day: '2-digit', month: 'long', year: 'numeric' });
  res.data.date=formattedDate
  setUser(res.data)
  }).catch(err=>{
    // window.location='/'
    console.log("bir");
  })
}else{
  console.log("ikki");
  window.location='/'
}
 

}

function getIshYonalishi() {
 axios.get(`${url}/api/ishyonalishi`).then(res=>{
  setIsh(res.data)
 })
}

function UpdateData() {
  var data_all=document.querySelectorAll('#chackbox1')
  var category=user.category
for (let i = 0; i < data_all.length; i++) {
if(data_all[i].checked){
console.log(category[i].title);
if(!category[i].category_id){
  axios.post(`${url}/api/user_category`,{user_id:user.id,category_id:category[i].id})
  }
}else{
  console.log(category);
  if(category[i].category_id){
  axios.delete(`${url}/api/user_category/${category[i].category_id}`)
  }
}
}
setTimeout(() => {
getUsers()
}, 1000);
}

function sendcChefImage(file1) {
  var a=JSON.parse(localStorage.getItem("user"))
  var data=new FormData()
  data.append("image",file1)
  data.append("user_povar_id",a[0].id)

  axios.post(`${url}/api/my_kitchen`,data).then(res=>{
   getUsers() 
  })
    
  }
  function deleteKichen(id){
axios.delete(`${url}/api/my_kitchen/${id}`).then(res=>{
  alert("delete data")
  getUsers()
})
  }


useEffect(()=>{
  getUsers()
  getIshYonalishi()
},[])
  return (
  <>
  <Navbar/>
    <div className={s.kota} style={{marginTop:'40px',marginBottom:'50px'}}>  
<div className={s.image_prosta}>
  <Image src={img} alt="" />
</div>
<div className={s.l}>
  <div className={s.lines}>
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
  </div>
  x
      
</div>
    
{page==0?(
<>
<div className={s.main_profil}>
        <div id='id1' className={s.li}>
        <div className={s.storage_user}>
          <div onClick={() => ikkj1()} className={s.edit_account}><FaPen /> 
           <span>Редактировать</span></div>
          <div className={s.image_profil} >
            <div className={s.account_img} 
            style={{background:`url(${user.image})`,backgroundSize:'cover !important',
                  backgroundPosition:'center !important'}} />
            <div className={s.p_user}><span>Дата регистрации</span>
              <div>{user.date}</div></div>
          </div>
          <h1 className={s.ht}>
            {user.name?(user.name):(user.email)}</h1>
        </div>
        <div className={s.danix_contact}>
          <h1>ДАННЫЕ ДЛЯ ВХОДА</h1>
         <div className={s.conntact_input}>
         <div className={s.pageinput}>
         <p>Телефон</p>
            <input type="text" value={user.phone} disabled /><MdErrorOutline className={s.icon_error} />
          </div>
          <div className={s.pageinput}>
            <p>Email</p>
            <input disabled value={user.email} type="text" />
            
            <MdErrorOutline title='' className={s.icon_error} />
          </div>
         </div>
         <div className={s.openmodal_button}>
       <div className={s.edit_account1}  onClick={()=>{setFormc(1);
        document.querySelector("#modal_page").style="display:flex"}}> Подтвердить номер телефона</div> 
       <div className={s.edit_account12}  onClick={()=>{setFormc(0);
        document.querySelector("#modal_page").style="display:flex"}}>Изменить пароль</div> 
         </div>
        </div>

<div className={s.chiqish_button}><IoExitOutline  style={{paddingRight:'10px',fontSize:'30px'}} />
<div className={s.chiqish_gap} onClick={()=>{localStorage.clear('user');localStorage.clear('token');window.location.reload()}} >Выйти</div>
</div>
</div>
<div id='id2' className={s.li2}>
<div className={s.hj}>
<div className={s.hom1}>
  <div style={{position:'relative'}}>
    <input type="file" name="" className={s.profil_img} id="file_image" />
  <img src={user.image} alt="" />
</div><div className={s.sora}><span>Рекомендуем форматы: jpeg, png, не более 10 MB</span></div> 
</div>
<div className={s.hom2}>
  <h2>Как вас зовут ?</h2>
  <div className={s.moi}>
    <input className={s.in} 
     defaultValue={user.name} id='name_1' type="text" placeholder='Фамилия и имя' />
  </div>
</div>
<div  onClick={()=>{ document.querySelector('#id2').style = `display: none;`; document.querySelector('#id1').style = `display: block;`}}  className={s.hom3}>
  <FaPen/>
  <span>Отменить</span>
</div>
</div>
<div className={s.line2}></div>

<div className={s.registe_post}>
<div className={s.profile_input1}>
<h3>Телефон</h3>
<input type="text" id='phone_1' defaultValue={user.phone} />
</div>
<div className={s.profile_input1}>
<h3>email</h3>
<input placeholder='email' id='email_1' defaultValue={user.email} type="text" />
</div>
</div>
<div className={s.line2}></div>
<div style={{paddingBottom:'40px',paddingLeft:'40px'}} className={s.car1}>
  <button onClick={()=>{putUserInfo()}} >Сохранить изменения</button>
</div>
</div>

      </div>
<div className={s.modal_page} id='modal_page' >
<div className={s.modal_form}>
  <div className={s.close_x}
   onClick={()=>{document.querySelector("#modal_page").style="display:none"}}><IoCloseOutline /></div>
  {formc?(<div className={s.modal_head}>
    <h3 style={{maxWidth:'200px'}}>Подтвердите номер телефона</h3>
<div className={s.input_phone} id='border2'>
  <p>Телефон</p>
  <input type="number" id='phone_2' onKeyUp={(e)=>{
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
    <button onClick={()=>putUserphone()} >Подтвердить</button>
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
  }} placeholder='Текущий пароль'  />
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
    <button onClick={()=>{resetPasword()}}>Изменить пароль</button>
    
  </div>)}
  
  
</div>
</div>


{user.pover?(
  <div className={s.o_povere}>
 
 <div id='korm' className={s.kok1}>
  <div onClick={() => ozgar()} className={s.hamer}><h1 className={s.hammer2}>ДАННЫЕ ПОВАРА</h1> 
  <div className={s.pon}>
  <FaPen />
    <span className={s.link}>Редактировать</span>
  </div>
 
  </div> 
   <div className={s.daniy}>
 <div className={s.daniy1}> 
 <div className={s.ovqat}  style={{background:"#06c16073",color:'white',border:'none'}}>
 
  <span>На компанию</span>
   </div>
   {user.category.map(item=>{
if(item.in_user){
  return <div className={s.ovqat}>
  <span>{item.title}</span>
   </div>  
}

})}
 
 </div>
 <div className={s.daniy2}>
   <div className={s.keof}>
     <span className={s.ad}>Адрес</span>
     <span> <TbLocation className={s.location}/>{user.address}</span>
   </div>
   <div className={s.keof}>
     <span className={s.ad}>Специализация</span>
     <span> 
         {user.pover.ish_yonalishi}
     </span>
   </div>
   <div className={s.keof}>
     <span className={s.ad}>Сколько лет в деле</span>
     <span>{user.pover.expertise} лет</span>
   </div>
   <div className={s.keof}>
     <span className={s.ad}>Дата регистрации</span>
     <span>{user.time_create.slice(0,10)}</span>
   </div>
 </div>
   </div>
   <div className={s.daniy3}>
     <h1 className={s.g1}>О СЕБЕ</h1>
     <div className={s.g2}>
                   <span>{user.pover.deskription}</span>
     </div>
     <div onClick={() => jin1()} className={s.g3}>
     <CiShare2 className={s.share}/>
     <h4 className={s.h4}>Поделиться</h4>
     </div>
     </div>
   </div>
 <div id='kok2' className={s.kok2}>
 <div className={s.poni}>
   <h1 className={s.su}>ДАННЫЕ ПОВАРА</h1>
   <div onClick={() =>ozgar2()}  className={s.do}> 
   <FaPen/>
       <span className={s.do1}> Отменить</span>
   </div>
 </div>
 <div className={s.poni2}>
   <select name="" id="" defaultValue={user.pover.ish_yonalishi} className={s.select_data}>
    {ish.map(item=>{
    return  <option value={item.title}>{item.title}</option>
    })} 
   </select>
 </div>
 <div className={s.poni3}>
   <div className={s.miya1}>
     <span>Категории блюд</span>
   </div>
   <div className={s.miya2}>
     <div className={s.jin1}>
    {user.category.map((item,key)=>{
      return <div className={s.kateg}>
         <input type="checkbox" id='chackbox1' defaultChecked={item.in_user} className={s.talan}/> 
         <span className={s.ssss}>{item.title}</span>
       </div>
    })}
      

     </div>
   </div>
 </div>
 <div className={s.poni4}>
   <h1 className={s.o_sebe}>
   О СЕБЕ
   </h1>
   <div className={s.inp_osebe} style={{overflow:'hidden'}} >
     {/* <textarea className={s.inp} type="text" placeholder='Расскажите о себе*'/> */}
     <textarea defaultValue={user.pover.deskription} className={s.inp} placeholder='Расскажите о себе*' cols="30" rows="10"></textarea>
   </div>
   <div className={s.bus1}>
     <div className={s.ponit}>
      <span>Город</span>
      </div>
 
 <div className={s.mb}>
  <select style={{width:'100%',background:'white',border:'none',outline:"none",fontSize:'20px'}} name="" id="">
    <option value="">Абаза</option>
  </select>
   {/* <span>Абаза</span> */}
   {/* <SlArrowDown className={s.lom4}/> */}
 </div>
   </div>
   <div className={s.bus2}>
     <div className={s.lime1}>
     <CiLocationArrow1  className={s.arrow}/>
     <input className={s.jiy} type="text" defaultValue={user.pover.is_prepared} placeholder='Где Вы готовите*' />
     <CiCircleInfo className={s.info}/>
 
     </div>
   </div>
   <div className={s.bus3}>
     <div className={s.nome}>
       <input defaultValue={user.pover.expertise} className={s.nome2} type="number" placeholder='Сколько лет в деле' />
     </div>
   </div>
   <div className={s.bus4}>
     <div className={s.car1}>
       <p>Дата регистрации</p>
       <p>{user.pover.time_create.slice(0,10)}</p>
       <button onClick={()=>{UpdateData()}}>Сохранить данные</button>
     </div>
   </div>
 </div>
 </div>
 </div>
):(<></>)}


<div id='po' className={s.podel}>
  <div className={s.podelista}>
    <div className={s.alfa}>
      <span>Поделиться</span>
      <GrClose onClick={() => close()} className={s.clone} />
    </div>
    <div className={s.betta}>
      <div className={s.vk}><SlSocialVkontakte /></div>
      <div className={s.odk}><FaOdnoklassniki /></div>
      <div className={s.teleg}><FaTelegramPlane /></div>
      <div className={s.wh}><FaWhatsapp /></div>
    </div>
    <div className={s.delta}></div>
    <div className={s.gamma}>
    <span className={s.spa}>Ссылка на изготовителя</span>
    <div className={s.d}>
      <div className={s.dom}>
        <span>Lorem, ipsum dolor. </span>
      </div>
    </div>
  </div>
  <div className={s.eta}>
    <span>Копировать ссылку</span>
  </div>
  </div>
  
</div>
{user.pover?(<div className={s.moya_kuxnya}>
<h1 className={s.moy}>МОЯ КУХНЯ</h1>
<div className={s.ramka}>
 
   
  
  
   {user.kitchen.map(item=>{
     return  <div className={s.mens}  style={{background:`url(${item.image})`}}>
    <div className={s.musr}><RiDeleteBin6Line onClick={()=>{deleteKichen(item.id)}} className={s.mus}/></div>
    </div>
   })}
  
  
    
  <div className={s.dob} style={{position:'relative'}}>
    <input onChange={(e)=>{sendcChefImage(e.target.files[0])}} type="file" className={s.fimeinput} />
    <div className={s.plus}>
    <BsPlusLg />
    </div>
    <h2 className={s.som111}>Добавить фото</h2>
  </div>
</div>
</div>):(<></>)}


<div className={s.obshiy}>
<div className={s.document}>
  <h1 className={s.dock}>ДОКУМЕНТЫ</h1>
  <div className={s.rem}>
    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit!</span>
      <IoMdClose className={s.close}/>
    </div>
    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit!</span>
      <IoMdClose className={s.close}/>
    </div>
    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit!</span>
      <IoMdClose className={s.close}/>
    </div>


    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit!</span>
      <IoMdClose className={s.close}/>
    </div>
    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit!</span>
      <IoMdClose className={s.close}/>
    </div>
    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit!</span>
      <IoMdClose className={s.close}/>
    </div>

    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit!</span>
      <IoMdClose className={s.close}/>
    </div>
  </div>
  <div className={s.sas}>
<span>Добавить</span>
  </div>
</div>
<div className={s.lin}></div>
<div className={s.document}>
  <h1 className={s.dock}>ДИПЛОМЫ И СЕРТИФИКАТЫ</h1>
  <div className={s.rem}>
    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit!</span>
      <IoMdClose className={s.close}/>
    </div>
    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit!</span>
      <IoMdClose className={s.close}/>
    </div>
    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit!</span>
      <IoMdClose className={s.close}/>
    </div>


    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, similique provident velit saepe voluptatem nisi blanditiis reiciendis assumenda nobis voluptates!!</span>
      <IoMdClose className={s.close}/>
    </div>
    <div className={s.ram}>
    <IoDocumentOutline className={s.out}/>
      <span className={s.lorem}>Lorem ipsum dolor sit!</span>
      <IoMdClose className={s.close}/>
    </div>

  </div>
  <div className={s.sas}>
<span>Добавить</span>
  </div>
</div>
</div>
</>
):(
page==1?(
<>
<Chat/>
</>
):(page==2?(
<>
<Dishes/>
</>
):(
<>
<Useful/>
</>
)))}
    </div><Footer/></>
  );
}
