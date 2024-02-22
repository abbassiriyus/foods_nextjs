import React from 'react'
import z from "../styles/Zakazi.module.css"
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import Footer from "../pages/componet/footer"
import Navbar from "../pages/componet/navbar"
export default function zakazi() {
return (
<div>
<Navbar/>

<div className={z.a_div}>
<a href="http://localhost:3000/glavnstr">Главная</a>
</div>
<div className={z.m_zakaz}>
<h1 className={z.zkz}>МОИ ЗАКАЗЫ</h1>
{/* <div className={z.tablitsa}>
<div className={z.t1}>
<p>№</p>
<p>ДАТА</p>
<p>ИЗГОТОВИТЕЛЬ</p>
<p>ДОСТАВКА</p>
<div className={z.price}>
<p>СУММА</p>
<p>СТАТУС</p>
</div>
</div>
<div className={z.t2}>
<p style={{marginLeft:'10px',color:'#06c160'}}>#1476</p>
<p style={{marginLeft:'85px'}}>08.02.24</p>
<div className={z.profil} style={{marginLeft:'80px',gap:'10px'}}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="" />
<p>Анна Казарцева</p>
</div>
<div className={z.mesto_vremya} style={{marginLeft:'50px'}}>
<div className={z.m_i} style={{gap:'13px',color:'grey'}}>
<p ><IoCalendarOutline /> 23.02.24</p>
<p><MdOutlineWatchLater /> 22:00-22:30</p>
</div>
<p className={z.mesto}>г Тюмень, 32141, д 1234, кв/офис 4312, подъезд 3412, этаж 3412</p>
</div>
<p style={{marginLeft:'80px'}}>720 ₽</p>
<button>Отменен</button>
<p style={{marginLeft:'20px',cursor:'pointer'}}><TbMessage2 /></p>
</div>
</div>  */}


<div className={z.table1}>
    <table style={{width:'100%'}}>
        <thead>
            <tr>
                <th>№</th>
                <th>Дата</th>
                <th> Изготовитель</th>
                <th>Доставка</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th style={{minWidth:'50px'}}></th>
             
            </tr>
        </thead>
        <tbody style={{width:'100%'}}>
            <tr>
                <td><p style={{marginLeft:'10px',color:'#06c160',fontWeight:300}}>#1476</p></td>
                <td><p style={{margin:'10px'}}>08.02.24</p></td>
                <td><div className={z.profil} style={{marginLeft:'30px',gap:'10px'}}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="" />
<p>Анна Казарцева</p>
</div></td>

                <td><div className={z.mesto_vremya} style={{margin:'0px 5%'}}>
<div className={z.m_i} style={{gap:'13px',color:'grey'}}>
<p ><IoCalendarOutline /> 23.02.24</p>
<p><MdOutlineWatchLater /> 22:00-22:30</p>
</div>
<p className={z.mesto}>г Тюмень, 32141, д 1234, кв/офис 4312, подъезд 3412, этаж 3412</p>
</div></td>
                <td><p >720 ₽</p></td>
                <td><button className={z.btnt2}>Отменен</button></td>
                <td><p style={{marginLeft:'20px',cursor:'pointer'}}><TbMessage2 /></p></td>
            </tr>
        </tbody>  
              <tbody style={{width:'100%'}}>
            <tr>
                <td><p style={{marginLeft:'10px',color:'#06c160',fontWeight:300}}>#1476</p></td>
                <td><p style={{margin:'10px'}}>08.02.24</p></td>
                <td><div className={z.profil} style={{marginLeft:'30px',gap:'10px'}}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="" />
<p>Анна Казарцева</p>
</div></td>

                <td><div className={z.mesto_vremya} style={{margin:'0px 5%'}}>
<div className={z.m_i} style={{gap:'13px',color:'grey'}}>
<p ><IoCalendarOutline /> 23.02.24</p>
<p><MdOutlineWatchLater /> 22:00-22:30</p>
</div>
<p className={z.mesto}>г Тюмень, 32141, д 1234, кв/офис 4312, подъезд 3412, этаж 3412</p>
</div></td>
                <td><p >720 ₽</p></td>
                <td><button className={z.btnt2}>Отменен</button></td>
                <td><p style={{marginLeft:'20px',cursor:'pointer'}}><TbMessage2 /></p></td>
            </tr>
        </tbody>
    </table>
</div>

<div className={z.table2}>
<div className={z.card_table}>
<span style={{color:'#06c160'}}>#1476</span>
<span>08.02,24</span>
</div>
<div className={z.card_table1}>
    <div className={z.img_t}>
    <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="" />
<p>Анна Казарцева</p>
    </div>
    <TbMessage2 style={{color:'#06c160',fontSize:'22px'}} />
</div>
<div className={z.adress}>
    <p> г Тюмень, 32141, д 1234, кв/офис 4312, подъезд 3412, этаж 3412 </p>
    <span style={{color:'grey'}}>23.02.24 22:00 - 22:30    </span>
</div>
<div className={z.btn_price}>
    <button className={z.btnt3}>Отменен</button>
    <span>720 ₽</span>
</div>
</div>



</div>
<Footer/>
</div>
)
}
