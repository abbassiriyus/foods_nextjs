import React, { useEffect, useState } from 'react'
import ss from '../styles/Pover.module.css'
import { IoIosStar } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import { HiChevronDown } from "react-icons/hi";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios';
import Navbar from './componet/navbar';
import Footer from '../pages/componet/footer';
import { GoChevronUp } from "react-icons/go";
import url from './host/config';
export default function pover() {

  var [data, setData] = useState([])
  var [ish, setIsh] = useState([])
  var [Category, setCategory] = useState([])
  function getCategory() {
    axios.get(`${url()}/api/category`).then(res => {
      setCategory(res.data)
      getPover()
    }).catch(err => {

    })
  }
  var getPover = () => {
    axios.get(`${url()}/api/getpovar`).then(res => {
      setData(res.data)
      axios.get(`${url()}/api/ishyonalishi`).then(res7 => {
        setIsh(res7.data)
      }).catch(err => {

      })
    }).catch(err => {
    })
  }
  var search1 = () => {
    var inp = document.querySelector('#search_data').value
    axios.get(`${url()}/api/getpovar`).then(res => {
      var data = res.data.filter(item => item.name.includes(inp) || item.lastname.includes(inp) || item.username.includes(inp))
      setData(data)
    }).catch(err => {
    })
  }
  useEffect(() => {
    getCategory()

  }, [])
  function chiq1() {
    document.querySelector("#openModal").style = `left:0; top:0;`
    document.querySelector('#shef').style = `display:none;`
  }
  function yo() {
    document.querySelector('#openModal').style = `left:-120%;`
    document.querySelector('#shef').style = `display:block;`
  }


  function jimm1() {
    document.querySelector('#kor1').style = `height:0px;`
    document.querySelector('#kota').style = `display:none;`
    document.querySelector('#kota11').style = `display:block;`
  }
  function jimm11() {
    document.querySelector('#kota').style = `display:block;`
    document.querySelector('#kor1').style = `height:auto;`
    document.querySelector('#kota11').style = `display:none;`
  }
  function jimm2() {
    document.querySelector('#kor2').style = `height:0px;`
    document.querySelector('#kichkina2').style = `display:block;`
    document.querySelector('#kichkina1').style = `display:none;`
  }
  function jimm22() {
    document.querySelector('#kor2').style = `height:auto;`
    document.querySelector('#kichkina1').style = `display:block;`
    document.querySelector('#kichkina2').style = `display:none;`
  }

  function filterCategory() {
    var all1 = document.querySelectorAll('#category')
    var cate = []
    for (let i = 0; i < all1.length; i++) {
      if (all1[i].checked) {
        cate.push(Category[i])
      }
    }
    var sendata = []
    axios.get(`${url()}/api/getpovar`).then(res => {
      if (cate.length == 0) {
        sendata = res.data
      } else {
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].qosh = false
          for (let j = 0; j < res.data[i].foods.length; j++) {
            for (let k = 0; k < cate.length; k++) {
              if (res.data[i].foods[j].category_id == cate[k].id) {
                res.data[i].qosh = true
              }
            }
          }
          if (res.data[i].qosh) {
            sendata.push(res.data[i])
          }
        }
      }
var s=filter2(sendata)
      setData(s)
    }).catch(err => {

    })
  }
 

  function filter2(data) {
    var fi_data=document.querySelectorAll('#ish_id')
    var gotov=[]
    for (let j = 0; j < fi_data.length; j++) {
if (fi_data[j].checked) {
  gotov.push(ish[j])
}
    }
    var senddata=[]
if(gotov.length==0){
senddata=data
}else{
  for (let i = 0; i < data.length; i++) {
  var qosh=false
    for (let j = 0; j < gotov.length; j++) {
      
      if(data[i].ish_yonalishi==gotov[j].title){
qosh=true
      }
      
    }
    if(qosh){
senddata.push(data[i])
    }
  }

}
return senddata


  }
  // const {push,replace}=useRouter()

  function uploadF() {
    var fi_data=document.querySelectorAll('#ish_id')
    var all1 = document.querySelectorAll('#category')
for (let i = 0; i < all1.length; i++) {
 all1[i].checked=false
}
for (let i = 0; i < fi_data.length; i++) {
  fi_data[i].checked=false
 }
getPover()
  }

  return (
    <div id='glava'>
      <Navbar />
      <div className={ss.glava}>
        {/* <button onClick={() =>push('/navbar')}>go home</button> */}
        <div className={ss.gap}>
          <span className={ss.gap_1}>ВСЕ ПОВАРА <sup className={ss.gap_2}>{data.length}</sup></span>
        </div>
        <div className={ss.plan}>
          <div className={ss.kategoriya} id='openModal'>
            <div className={ss.yoqot}>
              <span className={ss.fil}>Фильтр</span>
              <div onClick={() => yo()} className={ss.yoq}>
                <AiOutlineClose />
              </div>
            </div>
            <div className={ss.som}>
              <div id='kota' onClick={() => jimm1()} className={ss.kota_kategoriya}><span>Все категории</span><GoChevronUp className={ss.ukaz1} /></div>
              <div id='kota11' onClick={() => jimm11()} className={ss.kota_kategoriya1}><span>Все категории</span><HiChevronDown className={ss.ukaz1} /></div>
            </div>

            <div id='kor1' className={ss.yopil_kateg}>
              {Category.map((item, key) => {
                return <div key={key} className={ss.kichkina_kategoriya}>
                  <input type="checkbox" onChange={() => { filterCategory() }} id='category' />
                  <span className={ss.sp}>{item.title}<sup className={ss.sp2}>{item.count}</sup></span>
                </div>
              })}




            </div>
            <div className={ss.liniya}></div>
            <div className={ss.som}>
              <div id='kichkina1' onClick={() => jimm2()} className={ss.kota_kategoriya2}><p>Специализация <GoChevronUp className={ss.ukaz1} /></p></div>
              <div id='kichkina2' onClick={() => jimm22()} className={ss.kota_kategoriya22}><p>Специализация <HiChevronDown className={ss.ukaz1} /></p></div>
            </div>

            {/* <IoIosArrowUp /> */}
            <div className={ss.l}>
              <div id='kor2' className={ss.yopil_kateg}>
                {ish.map((item, key) => {
                  return <div key={key} className={ss.kichkina_kategoriya}>
                    <input type="checkbox"  onChange={() => { filterCategory() }} id='ish_id' />
                    <span className={ss.sp}>{item.title}<sup className={ss.sp2}>{item.count}</sup></span>
                  </div>
                })}

              </div>
            </div>

            <div className={ss.liniya}></div>
            <div className={ss.loko}>
              <div className={ss.primen}>
                <span>Применить</span>
              </div>
              <div onClick={()=>{uploadF()}} style={{cursor:'pointer'}} className={ss.kategoriya_button}>
                <div  className={ss.perevarot}><GrUpdate /></div>
                <span>Сбросить фильтр</span>
              </div>
            </div>
{/*  */}


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
                  <input type="text" id="search_data" placeholder='Введите имя повара' className={ss.input} />
                  <div className={ss.yoq12}></div>
                </div>
                <div onClick={() => search1()} className={ss.hover2}>
                  <span>Найти</span>
                </div>
              </div>
              {/* <div className={ss.karta}>
                <HiOutlineLocationMarker className={ss.lorem} />
                <span>Показать на карте</span>
              </div> */}
            </div>


            {data.map((item, key) => {
              return <div className={ss.cards3}>
                <div className={ss.about_p}>
                  <div className={ss.img_p}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={ss.star_p}>
                    <div className={ss.name_p}>
                      <div style={{ cursor: 'pointer' }}
                        className={ss.name} onClick={() => { window.location = `/oneuser/${item.user_id}` }}>
                        <h3 >{item.lastname} {item.name}</h3>
                        <p>{item.ish_yonalishi}</p>
                        <div className={ss.comment_p}>
                          <div className={ss.str5}>
                            <strong>{data.mark && (item.mark).toFixed(1)}</strong>

                            {['', '', '', '', '',].map((item2, key2) => {
                              if (item.mark > key2) {
                                return <IoIosStar style={{ color: 'yellow' }} className={ss.zv} />

                              } else {
                                return <IoIosStar className={ss.zv} style={{ color: 'gray' }} />
                              }
                            })}

                            <div className={ss.coment}>
                              <p><BiCommentDetail />{item.mark_org}</p>
                            </div>
                          </div>
                          <div className={ss.zakaz_p}>
                            {item.category.map((item, key) => {
                              if (key < 3 && item.title) {
                                return <p>{item.title}</p>
                              }
                            })}


                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className={ss.tort_p}>
                  {item.foods.map((item1, key1) => {
                    if (key1 < 5) {
                      return <div onClick={() => { window.location = `/menudetail/${item1.id}` }} style={{ background: `url(${item1.image})`, backgroundSize: '100% 100%' }} className={ss.background_photo}>
                        <center><span>${item1.price}</span></center>
                      </div>
                    }

                  })}


                </div>
              </div>

            })}
          </div>




        </div>

      </div>

<Footer />
    </div>
  )
}
