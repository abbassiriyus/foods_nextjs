import React from 'react'
import Navbar from './componet/navbar'
import Footer from './componet/footer'
import { GoPlusCircle } from "react-icons/go";
import { LuMinusCircle } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import s from "../styles/basket.module.css"
export default function basket() {
  return (
    <div>
        <Navbar/>
 <div className={s.zakaz}>
    <div className={s.a_basket}>
<a href="">Главная</a><span>Корзина</span>
    </div>
    <h3 className={s.h3}>ВАШ ЗАКАЗ</h3>
  <div className={s.card_basket}>
    <div className={s.padding}>
    <div className={s.delete}>
    <div className={s.name}>
    <p style={{color:'grey',fontSize:'13px'}}>Домашний повар</p>
    <h3 style={{fontWeight:500}}>Ксения Попова</h3>
    </div>
    <RiDeleteBin5Line className={s.delete_bin}/>

    </div>
    <hr />

    <div className={s.card_img_name}>
    <div className={s.img_c}>
        <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/5b0e3f16ed48fe04bf574afe3e8ae883a2e50684/5b0e3f16ed48fe04bf574afe3e8ae883a2e50684-wc100.jpeg" alt="" />
    </div>
    <div className={s.name_c}>
    <h3>Горячее «Картофельный рулет-запеканка»</h3>
    <p>0,750кг • 720 ₽</p>
    </div>

    <div className={s.price}>
    <span></span>
    <div className={s.btn_1}>
    <GoPlusCircle className={s.minus}/><p>1</p><LuMinusCircle  className={s.minus} />
  </div>
    <RiDeleteBin5Line className={s.delete_bin}/>
    </div>
    </div>
    <hr />
    <div className={s.price_btn}>
        <span>ИТОГО: 720 ₽</span>
        <button>Оформить заказ</button>
    </div>
    </div>
        </div>


        
 </div>


 
<div className={s.footer}>
 <Footer/>

</div>
    </div>
  )
}
