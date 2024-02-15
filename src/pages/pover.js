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
import { GoChevronUp } from "react-icons/go";
export default function pover() {


  var [Category,setCategory]=useState([])
  function getCategory() {
    axios.get('https://foodbackent.onrender.com/api/category').then(res=>{
     setCategory(res.data)
     console.log(res.data);
    }).catch(err=>{
  
    })
  }
  useEffect(()=>{
    getCategory
  })
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
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Профиссиональный повар<sup className={ss.sp2}>5</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Домашний повар<sup className={ss.sp2}>42</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Кондитер<sup className={ss.sp2}>142</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Фермер<sup className={ss.sp2}>7</sup></span>
    </div>
    <div className={ss.kichkina_kategoriya}>
        <div className={ss.togri}></div>
        <span className={ss.sp}>Другое<sup className={ss.sp2}>8</sup></span>
    </div>
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
 
<div className={ss.povara}>
<div className={ss.cards}>
  <div className={ss.b_card}>
<div className={ss.card1}>
  <div className={ss.logo}>
    <img className={ss.logo_rasm} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/9a07f0427459b82fc9538e161bc764b9178b30a5/9a07f0427459b82fc9538e161bc764b9178b30a5-wc200.jpeg" alt="" />
  </div>
</div>
<div className={ss.card2}>
  <h2 className={ss.homr}>Чмиль Софья Сергеевна</h2>
  <span className={ss.kon}>Кондитер</span>
  <div className={ss.otenka}>
    <div className={ss.mina}>
     <span className={ss.opa}>4.9</span>
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
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b8456795007d6b533200e5610784f9a3a36479da/b8456795007d6b533200e5610784f9a3a36479da-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b38069ceff00c63f21deac782b0c0c3a9eae8ee0/b38069ceff00c63f21deac782b0c0c3a9eae8ee0-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e1c741ac9c9d4e8aeaa8ffe6e5a1dbdec4e4f018/e1c741ac9c9d4e8aeaa8ffe6e5a1dbdec4e4f018-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e757a53fbf1e0d295909c1539d97f7f328848909/e757a53fbf1e0d295909c1539d97f7f328848909-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/2789cc4f87075311f83893486c67d1b6c47150d9/2789cc4f87075311f83893486c67d1b6c47150d9-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/769157541cfe30443b2e16537bdf9a281abc7da8/769157541cfe30443b2e16537bdf9a281abc7da8-wc200.jpeg" alt="" />
  </div>
</div>
</div>
</div>
<div className={ss.povara}>
<div className={ss.cards}>
  <div className={ss.b_card}>
<div className={ss.card1}>
  <div className={ss.logo}>
    <img className={ss.logo_rasm} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/9a07f0427459b82fc9538e161bc764b9178b30a5/9a07f0427459b82fc9538e161bc764b9178b30a5-wc200.jpeg" alt="" />
  </div>
</div>
<div className={ss.card2}>
  <h2 className={ss.homr}>Чмиль Софья Сергеевна</h2>
  <span className={ss.kon}>Кондитер</span>
  <div className={ss.otenka}>
    <div className={ss.mina}>
     <span className={ss.opa}>4.9</span>
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
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b8456795007d6b533200e5610784f9a3a36479da/b8456795007d6b533200e5610784f9a3a36479da-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b38069ceff00c63f21deac782b0c0c3a9eae8ee0/b38069ceff00c63f21deac782b0c0c3a9eae8ee0-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e1c741ac9c9d4e8aeaa8ffe6e5a1dbdec4e4f018/e1c741ac9c9d4e8aeaa8ffe6e5a1dbdec4e4f018-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e757a53fbf1e0d295909c1539d97f7f328848909/e757a53fbf1e0d295909c1539d97f7f328848909-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/2789cc4f87075311f83893486c67d1b6c47150d9/2789cc4f87075311f83893486c67d1b6c47150d9-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/769157541cfe30443b2e16537bdf9a281abc7da8/769157541cfe30443b2e16537bdf9a281abc7da8-wc200.jpeg" alt="" />
  </div>
</div>
</div>
</div>
<div className={ss.povara}>
<div className={ss.cards}>
  <div className={ss.b_card}>
<div className={ss.card1}>
  <div className={ss.logo}>
    <img className={ss.logo_rasm} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/9a07f0427459b82fc9538e161bc764b9178b30a5/9a07f0427459b82fc9538e161bc764b9178b30a5-wc200.jpeg" alt="" />
  </div>
</div>
<div className={ss.card2}>
  <h2 className={ss.homr}>Чмиль Софья Сергеевна</h2>
  <span className={ss.kon}>Кондитер</span>
  <div className={ss.otenka}>
    <div className={ss.mina}>
     <span className={ss.opa}>4.9</span>
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
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b8456795007d6b533200e5610784f9a3a36479da/b8456795007d6b533200e5610784f9a3a36479da-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b38069ceff00c63f21deac782b0c0c3a9eae8ee0/b38069ceff00c63f21deac782b0c0c3a9eae8ee0-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e1c741ac9c9d4e8aeaa8ffe6e5a1dbdec4e4f018/e1c741ac9c9d4e8aeaa8ffe6e5a1dbdec4e4f018-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e757a53fbf1e0d295909c1539d97f7f328848909/e757a53fbf1e0d295909c1539d97f7f328848909-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/2789cc4f87075311f83893486c67d1b6c47150d9/2789cc4f87075311f83893486c67d1b6c47150d9-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/769157541cfe30443b2e16537bdf9a281abc7da8/769157541cfe30443b2e16537bdf9a281abc7da8-wc200.jpeg" alt="" />
  </div>
</div>
</div>
</div>
<div className={ss.povara}>
<div className={ss.cards}>
  <div className={ss.b_card}>
<div className={ss.card1}>
  <div className={ss.logo}>
    <img className={ss.logo_rasm} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/9a07f0427459b82fc9538e161bc764b9178b30a5/9a07f0427459b82fc9538e161bc764b9178b30a5-wc200.jpeg" alt="" />
  </div>
</div>
<div className={ss.card2}>
  <h2 className={ss.homr}>Чмиль Софья Сергеевна</h2>
  <span className={ss.kon}>Кондитер</span>
  <div className={ss.otenka}>
    <div className={ss.mina}>
     <span className={ss.opa}>4.9</span>
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
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b8456795007d6b533200e5610784f9a3a36479da/b8456795007d6b533200e5610784f9a3a36479da-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/b38069ceff00c63f21deac782b0c0c3a9eae8ee0/b38069ceff00c63f21deac782b0c0c3a9eae8ee0-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e1c741ac9c9d4e8aeaa8ffe6e5a1dbdec4e4f018/e1c741ac9c9d4e8aeaa8ffe6e5a1dbdec4e4f018-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e757a53fbf1e0d295909c1539d97f7f328848909/e757a53fbf1e0d295909c1539d97f7f328848909-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/2789cc4f87075311f83893486c67d1b6c47150d9/2789cc4f87075311f83893486c67d1b6c47150d9-wc200.jpeg" alt="" />
    <img className={ss.bld_img} src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/769157541cfe30443b2e16537bdf9a281abc7da8/769157541cfe30443b2e16537bdf9a281abc7da8-wc200.jpeg" alt="" />
  </div>
</div>
</div>
</div>



</div>




</div>

    </div></div>
  )
}
