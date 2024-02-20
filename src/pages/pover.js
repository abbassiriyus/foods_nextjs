import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import Navbar from './componet/navbar';
import Footer from '../pages/componet/footer';
import { GoChevronUp } from "react-icons/go";
import url from './host/config';
export default function pover() {

  var [data,setData]=useState([])
  var [ish,setIsh]=useState([])
  var [Category,setCategory]=useState([])
  function getCategory() {
    axios.get(`${url}/api/category`).then(res=>{
     setCategory(res.data)
     getPover()
     console.log(res.data);
    }).catch(err=>{
  
    })
  }
  var getPover=()=>{
axios.get(`${url}/api/getpovar`).then(res=>{
setData(res.data)
axios.get(`${url}/api/ishyonalishi`).then(res7=>{
  setIsh(res7.data)

  console.log(res7.data,"Dad");
  }).catch(err=>{
  
  })


console.log(res.data,"Dad");
}).catch(err=>{

})
  }
  useEffect(()=>{
    getCategory()
   
  },[])
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
      <Navbar/>
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
{Category.map(item=>{
   return <div className={ss.kichkina_kategoriya}>
        <input type="checkbox"   />
        <span className={ss.sp}>{item.title}<sup className={ss.sp2}>123</sup></span>
    </div>
})}
   

 

</div>
<div className={ss.liniya}></div>
<div className={ss.som}>
  <div id='kichkina1' onClick={() => jimm2()}  className={ss.kota_kategoriya2}><p>Специализация <GoChevronUp className={ss.ukaz1}/></p></div> 
  <div id='kichkina2'  onClick={() => jimm22()}  className={ss.kota_kategoriya22}><p>Специализация <HiChevronDown className={ss.ukaz1}/></p></div>
</div>
   
    {/* <IoIosArrowUp /> */}
    <div className={ss.l}>
      <div id='kor2' className={ss.yopil_kateg}>
  {ish.map(item=>{
    return   <div className={ss.kichkina_kategoriya}>
    <input type="checkbox"   />
    <span className={ss.sp}>{item.title}<sup className={ss.sp2}>5</sup></span>
</div>
  })}
  
    </div>
    </div>

    <div className={ss.liniya}></div>
    <div className={ss.loko}>
      <div className={ss.primen}>
        <span>Применить</span>
      </div>
<div className={ss.kategoriya_button}>
  <div className={ss.perevarot}><GrUpdate /></div>
 <span>Сбросить фильтр</span>
</div>
    </div>



</div>
<div id='shef' className={ss.shef}>
  <div className={ss.qidr}>
    <div onClick={() => chiq1()} className={ss.a_hov}>
      <div className={ss.ur}><VscSettings /></div><span>Фильтр</span>
    </div>
    <div className={ss.b_hov}>
         <div className={ss.hover}>
      <div className={ss.alt}>
         <IoIosSearch />   
      </div>
    <input type="text"  placeholder='Введите имя повара' className={ss.input}/>
    <div className={ss.yoq12}></div>
    </div>
    <div className={ss.hover2}>
      <span>Найти</span>
    </div>
  </div>
  <div className={ss.karta}>
  <HiOutlineLocationMarker className={ss.lorem}/>
  <span>Показать на карте</span>
  </div>
    </div>
 {data.map((item,key)=>{
return <div className={ss.povara}>
<div className={ss.cards}>
  <div className={ss.b_card}>
<div className={ss.card1}>
  <div className={ss.logo}>
    <img className={ss.logo_rasm} src={item.image} alt="" />
  </div>
</div>
<div className={ss.card2}>
  <h2 className={ss.homr}>{item.name} {item.lastname} {item.firstname}</h2>
  <span className={ss.kon}>Кондитер</span>
  <div className={ss.otenka}>
    <div className={ss.mina}>
     <span className={ss.opa}>{item.mark}</span>
<div className={ss.zvezda}>
<IoIosStar className={ss.zv}/>
<IoIosStar className={ss.zv}/>
<IoIosStar className={ss.zv}/>
<IoIosStar className={ss.zv}/>
<IoIosStar className={ss.zv}/>
</div> 
    </div>

<div className={ss.comment}>
<FaRegCommentAlt className={ss.com} />
<span>3</span>
</div>
  </div>
</div>
<div className={ss.card3}>
  <div className={ss.kasb}>
  <span>Торты</span>
  </div>
  <div className={ss.kasb}>
 <span>Торты</span>  
  </div>
</div>
</div>
<div className={ss.a_card}>
  <div className={ss.ovqat_img}>
    {item.foods.map((item2,key2)=>{
    return <div> <img className={ss.bld_img} src={item.image} alt="" />
    <p>{item2.price}</p>
    </div>
    })}
   
  </div>
</div>
</div>
</div>

 })}




</div>




</div>

    </div>
    <Footer/>
    </div>
  )
}
