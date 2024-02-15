import React, { useState } from 'react'
import ss from '../styles/pover.module.css'
import { IoIosStar } from "react-icons/io";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import { HiChevronDown } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from 'next/router';
import glavnstr from './glavnstr';
import { GoChevronUp } from "react-icons/go";
import Card from './componet/card';
export default function pover() {

function chiq1(){
 document.querySelector("#openModal").style=`left:0; top:0;`
 document.querySelector('#shef').style =`display:none;`
}
function yo(){
  document.querySelector('#openModal').style=`left:-120%;`
  document.querySelector('#shef').style =`display:block;`
}


function jimm1(){
  document.querySelector('#kor1').style =`height:0px;`
  document.querySelector('#kota').style =`display:none;`
  document.querySelector('#kota11').style=`display:block;`
}
function jimm11(){
  document.querySelector('#kota').style =`display:block;`
  document.querySelector('#kor1').style =`height:auto;`
  document.querySelector('#kota11').style =`display:none;`
}
function jimm2(){
  document.querySelector('#kor2').style =`height:0px;`
  document.querySelector('#kichkina2').style=`display:block;`
  document.querySelector('#kichkina1').style=`display:none;`
}
function jimm22(){
  document.querySelector('#kor2').style =`height:auto;`
  document.querySelector('#kichkina1').style=`display:block;`
  document.querySelector('#kichkina2').style=`display:none;`
}

// const {push,replace}=useRouter()

  return (
    <div id='glava'>
    <div className={ss.glava}>
      {/* <button onClick={() =>push('/navbar')}>go home</button> */}
<div className={ss.gap}>
    <span className={ss.gap_1}>ВСЕ ПОВАРА <sup className={ss.gap_2}>200</sup></span>
</div>
<div className={ss.plan}>
<div  className={ss.kategoriya}  id='openModal'>
  <div className={ss.yoqot}>
    <span className={ss.fil}>Фильтр</span>
    <div onClick={() => yo()} className={ss.yoq}>
    <AiOutlineClose />
    </div>
  </div>
  <div className={ss.som}>
        <div id='kota' onClick={() => jimm1()} className={ss.kota_kategoriya}><span>Все категории</span><GoChevronUp className={ss.ukaz1}/></div>
        <div id='kota11' onClick={() => jimm11()} className={ss.kota_kategoriya1}><span>Все категории</span><HiChevronDown className={ss.ukaz1}/></div>
  </div>

    <div id='kor1' className={ss.yopil_kateg}>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Торты<sup className={ss.sp2}>123</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Бенто торты<sup className={ss.sp2}>71</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Пирожные<sup className={ss.sp2}>92</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Шоколад, конфеты, пряники<sup className={ss.sp2}>50</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Клубника в шоколаде<sup className={ss.sp2}>22</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Все десерты<sup className={ss.sp2}>40</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Закуски и гастробоксы<sup className={ss.sp2}>17</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Полезное и здоровое<sup className={ss.sp2}>34</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Все блюда<sup className={ss.sp2}>15</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Мясная гастрономия<sup className={ss.sp2}>10</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Мёд<sup className={ss.sp2}>3</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>На компанию<sup className={ss.sp2}>18</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Супы<sup className={ss.sp2}>5</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Салаты<sup className={ss.sp2}>5</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Азиатская кухня<sup className={ss.sp2}>9</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Русская кухня<sup className={ss.sp2}>15</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Пироги и выпечки<sup className={ss.sp2}>5</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Вторые блюда<sup className={ss.sp2}>17</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Что нового<sup className={ss.sp2}>13</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Приготовим сегодня<sup className={ss.sp2}>22</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Обед и ужин<sup className={ss.sp2}>14</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Вкусное и полезное<sup className={ss.sp2}>13</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Продукты от фермеров<sup className={ss.sp2}>2</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Продукты от изготовителей<sup className={ss.sp2}>2</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Заготовки и заморозки<sup className={ss.sp2}>6</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>14 февраля<sup className={ss.sp2}>6</sup></span>
    </div>
</div>
<div className={ss.liniya}></div>
<div className={ss.som}>
  <div id='kichkina1' onClick={() => jimm2()}  className={ss.kota_kategoriya2}><p>Специализация <GoChevronUp className={ss.ukaz1}/></p></div> 
  <div id='kichkina2'  onClick={() => jimm22()}  className={ss.kota_kategoriya22}><p>Специализация <HiChevronDown className={ss.ukaz1}/></p></div>
</div>
   </div>
   
   <Card/>
   <Card/>
   </div>

   </div>
   </div>
  )
}
