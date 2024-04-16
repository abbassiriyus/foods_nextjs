import React, { useEffect, useState } from 'react'
import z from "../styles/Zakazi.module.css"
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import Footer from "../pages/componet/footer"
import Navbar from "../pages/componet/navbar"
import url from './host/config.js'
import axios from 'axios';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
export default function zakazi() {
  var [zakaz, setZakaz] = useState([])
  var [cook, setCook] = useState([])

  function putStatus(id, status) {
    axios.put(`${url()}/api/food_seller/status/${id}`, { status }).then(res => {
      getData()
      if(status==4){
toast.error("Заказ отменен")
      }else{
      toast.success("Заказ отправлен подождите, пока клиент получит")  
      }
      
    })
  }

  function getData() {
    var my = JSON.parse(localStorage.getItem('user'))
    axios.get(`${url()}/api/food_seller/${my[0].id}`).then(res => {
      var b = res.data.zakaz.filter(item => item.pover.id != my[0].id)
      setZakaz(b)
      console.log(b);
      var d = res.data.pover.filter(item => item.creator.id != my[0].id)
      setCook(d)
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
       <ToastContainer />
      <Head>
        <title>Мои заказы</title>
        <meta name="description" content="Мои заказы" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/5370/5370178.png" />
        <meta property="og:image" content="https://cdn-icons-png.flaticon.com/512/5370/5370178.png" />
        {/* <script src="https://api-maps.yandex.ru/2.1/?apikey=49b66546-e562-4119-b7ba-9adcce7e49a0&lang=en_US" /> */}
      </Head>
      <Navbar />

      <div className={z.a_div}>
        <a href="/">Главная</a>
      </div>
      {zakaz.length > 0 ? (<div className={z.m_zakaz}>
        <h1 className={z.zkz}>МОИ ЗАКАЗЫ</h1>

        <div className={z.table1}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>№</th>
                <th>Дата</th>
                <th> Изготовитель</th>
                <th>Доставка</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th style={{ minWidth: '50px' }}></th>

              </tr>
            </thead>
            {zakaz.map((item, key) => {
              return <tbody style={{ width: '100%' }}>
                <tr>
                  <td><p style={{ marginLeft: '10px', color: '#06c160', fontWeight: 300 }}>{item.id}</p></td>
                  <td style={{ textAlign: 'center' }}>
                    <p style={{ margin: '10px' }}>{(item.time_create).slice(0, 10)}</p></td>
                  <td style={{ textAlign: 'center' }} ><div className={z.profil} style={{ marginLeft: '30px', gap: '10px' }}>
                    <img src={item.pover && item.pover.image} alt="" />
                    <p>{item.pover.name}</p>
                  </div></td>

                  <td><div className={z.mesto_vremya} style={{ margin: '0px 5%' }}>
                    <div className={z.m_i} style={{ gap: '13px', color: 'grey' }}>
                      <p ><IoCalendarOutline />{(item.date).slice(0, 10)}</p>
                      <p><MdOutlineWatchLater />{item.time}</p>
                    </div>
                    <p className={z.mesto}>{item.the_city},
                      {item.village == 0 ? (<></>) : (<> {item.village}, {item.home}, {item.office}, {item.building}, {item.convex}</>)}</p>
                  </div></td>
                  <td><p style={{ textAlign: 'center' }}>{item.food.price} ₽</p></td>
                  <td style={{ textAlign: 'center' }}>
                  {item.status==2?(<button onClick={() => putStatus(item.id, 4)} className={z.keyingi_bosqich1} >Отмена заказа</button>):(<></>)}
                  {item.status==2?(
                    <button onClick={()=>putStatus(item.id,3)}>qabul qildim</button>
                  ):(<></>)}
                    {item.status == 1 ? (<button className={z.btnt2}>создано</button>) : (item.status == 2 ? (<button className={z.btnt2}>Отправлено</button>) : (item.status == 3 ? (<button className={z.btnt2}>Сделано</button>) : (<button className={z.btnt2} style={{background:'rgba(255, 0, 0, 0.199)'}}>Отменено</button>)))}

                  </td>
                  <td><p style={{ marginLeft: '20px', cursor: 'pointer' }} onClick={() => { window.location = "/profile/1/" }} ><TbMessage2 /></p></td>
                </tr>
              </tbody>
            })}


          </table>
        </div>
        {zakaz.map((item2, key) => {
          return <div className={z.table2}>
            <div className={z.card_table}>
              <span style={{ color: '#06c160' }}>{item2.id}</span>
              <span>{(item2.date).slice(0, 10)}</span>
            </div>
            <div className={z.card_table1}>
              <div className={z.img_t}>
                <img src={item2.pover && item2.pover.image} alt="" />
                <p>{item2.pover.name}</p>
              </div>
              <TbMessage2 style={{ color: '#06c160', fontSize: '22px' }} />
            </div>
            <div className={z.adress}>
              <p>{item2.the_city},
                {item2.village == 0 ? (<></>) : (<> {item2.village}, {item2.home}, {item2.office}, {item2.building}, {item2.convex}</>)}</p>
              <span style={{ color: 'grey' }}>{(item2.date).slice(0, 10)} {item2.time}</span>
            </div>
            <div className={z.btn_price}>
              <div>
              {item2.status==2?(<button onClick={() => putStatus(item2.id, 4)} className={z.keyingi_bosqich1} >Отмена заказа</button>):(<></>)}
              {item2.status==2?(
                    <button className={s.keyingi_bosqich} onClick={()=>putStatus(item2.id,3)}>qabul qildim</button>
                  ):(<></>)}
                {item2.status == 1 ? (<button className={z.btnt2}>создано</button>) : (item2.status == 2 ? (<button className={z.btnt2}>Отправлено</button>) : (item2.status == 3 ? (<button className={z.btnt2}>Сделано</button>) : (<button className={z.btnt2} style={{background:'rgba(255, 0, 0, 0.199)'}} >Отменено</button>)))}  </div>

              <span>{item2.food.price} ₽</span>
            </div>
          </div>
        })}
      </div>) : (<></>)}


      {cook.length > 0 ? (<div className={z.m_zakaz}>
        <h1 className={z.zkz}>Заказы, полученные мной</h1>

        <div className={z.table1}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>№</th>
                <th>Дата</th>
                <th> Изготовитель</th>
                <th>Доставка</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th style={{ minWidth: '50px' }}></th>

              </tr>
            </thead>
            {cook.map((item, key) => {
              return <tbody style={{ width: '100%' }}>
                <tr>
                  <td><p style={{ marginLeft: '10px', color: '#06c160', fontWeight: 300 }}>{item.id}</p></td>
                  <td><p style={{ margin: '10px' }}>{(item.time_create).slice(0, 10)}</p></td>
                  <td><div className={z.profil} style={{ marginLeft: '30px', gap: '10px' }}>
                    <img src={item.creator && item.creator.image} alt="" />
                    <p>{item.fullname}</p>
                  </div></td>

                  <td><div className={z.mesto_vremya} style={{ margin: '0px 5%' }}>
                    <div className={z.m_i} style={{ gap: '13px', color: 'grey' }}>
                      <p ><IoCalendarOutline />{(item.date).slice(0, 10)}</p>
                      <p><MdOutlineWatchLater />{item.time}</p>
                    </div>
                    <p className={z.mesto}>{item.the_city},
                      {item.village == 0 ? (<></>) : (<> {item.village}, {item.home}, {item.office}, {item.building}, {item.convex}</>)}</p>
                  </div></td>
                  <td><p >{item.food.price} ₽</p></td>

                  <td style={{ textAlign: 'center' }}>
                    {item.status==1?(<button onClick={() => putStatus(item.id, 4)} className={z.keyingi_bosqich1} >Отмена заказа</button>):(<></>)}
                    <br /> 
                  {item.status==1?(<button className={z.keyingi_bosqich} onClick={() => putStatus(item.id, 2)}>Затем этап</button>):(<></>)}
                  <br />
                
                    {item.status == 1 ? (<button className={z.btnt2}>создано</button>) : (item.status == 2 ? (<button className={z.btnt2}>Отправлено</button>) : (item.status==3?(<button className={z.btnt2}>Сделано</button>) : (<button className={z.btnt2} style={{background:'rgba(255, 0, 0, 0.199)'}} >Отменено</button>)))}
                  </td>
                  <td><p style={{ marginLeft: '20px', cursor: 'pointer' }} onClick={() => { window.location = "/profile/1/" }} ><TbMessage2 /></p></td>
                </tr>
              </tbody>
            })}


          </table>
        </div>
        {cook.map((item2, key) => {
          return <div className={z.table2}>
            <div className={z.card_table}>
              <span style={{ color: '#06c160' }}>{item2.id}</span>
              <span>{(item2.date).slice(0, 10)}</span>
            </div>
            <div className={z.card_table1}>
              <div className={z.img_t}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="" />
                <p>{item2.fullname}</p>
              </div>
              <TbMessage2 style={{ color: '#06c160', fontSize: '22px' }} />
            </div>
            <div className={z.adress}>
              <p>{item2.the_city},
                {item2.village == 0 ? (<></>) : (<> {item2.village}, {item2.home}, {item2.office}, {item2.building}, {item2.convex}</>)}</p>
              <span style={{ color: 'grey' }}>{(item2.date).slice(0, 10)} {item2.time}</span>
            </div>
            <div className={z.btn_price}>
              <div>  {item2.status==1?(<button onClick={() => putStatus(item2.id, 4)} className={z.keyingi_bosqich1} >Отмена заказа</button>):(<></>)}
                    
                  {item2.status==1?(<button className={z.keyingi_bosqich} onClick={() => putStatus(item2.id, 2)}>Затем этап</button>):(<></>)}
              {item2.status == 1 ? (<button className={z.btnt2}>создано</button>) : (item2.status == 2 ? (<button className={z.btnt2}>Отправлено</button>) : (item2.status == 3 ? (<button className={z.btnt2}>Сделано</button>) : (<button className={z.btnt2} style={{background:'rgba(255, 0, 0, 0.199)'}}>Отменено</button>)))} 
              </div>

              <span>{item2.food.price} ₽</span>
            </div>
          </div>
        })}




      </div>) : (<></>)}


      <Footer />
    </div>
  )
}
