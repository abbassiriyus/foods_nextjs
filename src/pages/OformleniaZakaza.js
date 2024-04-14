import React, { useEffect, useState } from "react";
import o from "../styles/oformlenia_zakaz.module.css"
import { IoIosArrowForward } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import Navbar from "./componet/navbar";
import Footer from "./componet/footer";
import axios from "axios";
import url from "./host/config"
import { toast,Bounce } from 'react-toastify';

// import { message } from "antd";
export default function Oformlenia_zakaz() {
  
  var [radio,setRadio]=useState(true)
  
  var [data,setData]=useState({})


  const Openanotherperson = (ches) => {
    if(ches){
    document.querySelector("#gets_person2_zakaz1").style = "display:flex";
    }else{
      document.querySelector("#gets_person2_zakaz1").style = "display:none";
    }
  };
  const Openanotherperson2 = () => {
    document.querySelector("#gets_person2_zakaz2").style = "display:block";
  };
  const Opendostavkazakaz = () => {
    document.querySelector("#big_dostavka_zakaz").style = "display:block";
    document.querySelector("#inp_checkbox_and_text_zakaz p").style =
      "display:none";
    document.querySelector("#radio-zakaz").style =
      "accent-color: #06c160; ";
    document.querySelector("#radio-zakaz").style =
      "accent-color: #fff; ";
  };
  const Openzakaz = () => {
    document.querySelector("#big_dostavka_zakaz").style = "display:none";
    document.querySelector("#inp_checkbox_and_text_zakaz p").style =
      "display:block";
    document.querySelector("#radio-zakaz").style =
      "accent-color: #fff; ";
    document.querySelector("#radio-zakaz").style =
      "accent-color: #06c160; ";
  };

  const nodropradio = () => {
    document.querySelector("#radio-zakaz").style =
      "accent-color: #fff; border: 1px solid #909090a2; ";
  };

var [allprice,setAllPrice]=useState(0)
  useEffect(()=>{
    var oneproduct=localStorage.getItem("zakazall")
    var a=0
    for (let i = 0; i < JSON.parse(oneproduct).food.length; i++) {
    a=a+((JSON.parse(oneproduct).food[i]).count*(JSON.parse(oneproduct).food[i]).price)
    }
    setAllPrice(a)
    
    setData(JSON.parse(oneproduct))
  },[])
  function postdata(){
    var data1=new FormData()
    var user=JSON.parse(localStorage.getItem("user"))
    data1.append('creator',user[0].id) 
    data1.append('food_id',data.food_id)
    var error_message=true
    if(document.querySelector('#checkbox-zakaz').checked){
      if ((document.querySelector('#fullname12').value).length==0) {
       toast.error("Вы не ввели имя", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        })
        error_message=false
      }
      if ((document.querySelector('#phone12').value).length==0) {
       toast.error("Не указан номер телефона", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        })
        error_message=false
      }
        data1.append('fullname',document.querySelector('#fullname12').value)
       data1.append('phone',document.querySelector('#phone12').value)
       data1.append('to_my_friend',true) 
  }else{
    data1.append('fullname',user[0].name)
    data1.append('phone',user[0].phone)
    data1.append('to_my_friend',false)
    if(!user[0].name){
     toast.error("Вы не ввели имя", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      })
      error_message=false
    }
    if(!user[0].phone){
     toast.error("Не указан номер телефона", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      })
      error_message=false
    }
  }
  if(radio){
    data1.append('the_city',data.place)
    if(!data.place){
     toast.error("Адрес не введен", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      })
      error_message=false
    }
    data1.append('village','0')
    data1.append('home','0')
    data1.append('office','0')
    data1.append('building','0')
    data1.append('convex','0')
  }else{
    data1.append('the_city',(data.place).split(' '))
    data1.append('village',document.querySelector("#input1").value)
    data1.append('home',document.querySelector("#input2").value)
    data1.append('office',document.querySelector("#input3").value)
    data1.append('building',document.querySelector("#input4").value)
    data1.append('convex',document.querySelector("#input5").value)
    if((document.querySelector("#input1").value).length==0 && (document.querySelector("#input2").value).length==0 && (document.querySelector("#input3").value).length==0 && (document.querySelector("#input4").value).length==0 && (document.querySelector("#input5").value).length==0){
     toast.error("Полный адрес не введен", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      })
      error_message=false
    }
  }
  data1.append('time',document.querySelector("#input_time").value)
  data1.append('date',document.querySelector("#input_day").value)
  if((document.querySelector("#input_time").value).length==0 && (document.querySelector("#input_time").value).length==0){
   toast.error("Время введено неверно", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    })
    error_message=false
  }  

  
if(error_message){
  axios.post(`${url()}/api/food_seller`,data1).then(res=>{
 
    var my_data=JSON.parse(localStorage.getItem("user"))
    var sendmessage=`sender:${my_data[0].name}, phone:${my_data[0].phone}.
    name: ${data1.get('fullname')}  ${data1.get('phone')}.
    time:${data1.get("date")} ${data1.get("time")}. 
    address:${data1.get('the_city')+" "+data1.get('village')+" "+data1.get('home')+" "+data1.get('office')+" "+data1.get('building')}. 
    food:
    `
    for (let i = 0; i < data.food.length; i++) {
      sendmessage+=`${i+1}) name:"${data.food[i].foods_name}" count:${data.food[i].count} price:${data.food[i].price}`
    }
    sendmessage+=". message:"
    sendmessage+=document.querySelector('#menasa').value
    axios.get(`${url()}/api/room`).then(res=>{
      var room_yes=false
    for (let i = 0; i < res.data.length; i++) {
     if((res.data[i].user1==data.user_id && res.data[i].user2==my_data[0].id) || (res.data[i].user2==data.user_id && res.data[i].user1==my_data[0].id)){
    room_yes=res.data[i].id
     }
    }
    
    if(room_yes){
      var senddata=new FormData()
      senddata.append("user_id",my_data[0].id)
      senddata.append("room_id",room_yes)
      senddata.append("message",sendmessage)
    axios.post(`${url()}/api/messages`,senddata).then(res=>{
    toast.error("сообщение отправлено")
    window.location="/profile/1/"
    }).catch(err=>{
    console.log(err);
    })
    }else{
      var sendroom=new FormData()
      sendroom.append("user1",my_data[0].id)
      sendroom.append("user2",data.user_id)
    axios.post(`${url()}/api/room`,sendroom ).then(res=>{
      var senddata=new FormData()
     
      senddata.append("user_id",my_data[0].id)
      senddata.append("room_id",res.data.id)
      senddata.append("message",sendmessage)
    axios.post(`${url()}/api/messages`,senddata).then(res=>{
    toast.error("сообщение отправлено")
    window.location="/profile/"
    }).catch(err=>{
    console.log(err);
    })
    })
    
    
    }
    
    })
    
    
    
    
    
    
      // window.location='/profile/'
    }).catch(err=>{
      console.log("xato");
    })
    1
}

  }



  return (
  <div >

<Navbar/>


      <div className={o.App_offormlenia_zakaz}>
      <div className={o.where_Oformlenia_zakaz}>
        <a href="#">
          Главная
          <span>
            <IoIosArrowForward />
          </span>
        </a>
        <p>Корзина</p>
      </div>
      <div className={o.My_order_oformlenia}>
        <h1>ОФОРМИТЬ ЗАКАЗ</h1>
      </div>
      <div className={o.big_oformlinia_zaka}>
        <div className={o.first_oformlenia_zakaz}>
    <div className={o.padding2}>
    <div className={o.count_what_do_oformlenia_zakaz}>
            <div className={o.count_offermlenia_zakaz}>
              <h3>01</h3>
            </div>
            <div className={o.text_oformlenia_zakaz}>
              <div className={o.df_in_which_stage_zakaz}>
                <div className={o.count_offermlenia_zakaz2}>
                  <h3>01</h3>
                </div>
                <h2>ПОЛУЧАТЕЛЬ</h2>
              </div>

              <div className={o.gets_person_zakaz}>
                <div className={o.name_person_zakaz}>
                  <p>{data.name}</p>
                </div>
                <div className={o.phone_number_zakaz}>
                  <p>{data.phone}</p>
                </div>
              </div>
              <div className={o.get_another_person_zakaz}>
                <input
                  type="checkbox"
                  id="checkbox-zakaz"
                  onChange={(e)=>{Openanotherperson(e.target.checked)}}
                />
                <h4>Другой получатель</h4>
              </div>
              <div className={o.gets_person2_zakaz} id="gets_person2_zakaz1">
                <div className={o.name_person_zakaz}>
                  <input type="text" name="" id="fullname12" placeholder="Имя" />
                </div>
                <div className={o.phone_number_zakaz}>
                  <input type="text" name="" id="phone12" placeholder="Телефон" />
                </div>
              </div>
              <div className={o.get_another_person_zakaz2}>
                <input
                  type="checkbox"
                  id="checkbox-zakaz"
                  onChange={Openanotherperson2}
                />
                <h4>Другой получатель</h4>
              </div>
              <div className={o.gets_person3_zakaz} id="gets_person2_zakaz2">
                <div className={o.name_person_zakaz}>
                  <input type="text" name="" id="" placeholder="Имя" />
                </div>
                <div className={o.phone_number_zakaz}>
                  <input type="text" name="" id="" placeholder="Телефон" />
                </div>
              </div>
            </div>
          </div>
          <hr className={o.hr_for_dostavka_or_zaka} />  
          <div className={o.count_what_do_oformlenia_zakaz}>
            <div className={o.count_offermlenia_zakaz}>
              <h3>02</h3>
            </div>
            <div className={o.detals_of_the_zakaz}>
              <div className={o.df_in_which_stage_zakaz}>
                <div className={o.count_offermlenia_zakaz2}>
                  <h3>02</h3>
                </div>
                <h2>ДЕТАЛИ ЗАКАЗА</h2>
              </div>

              <div className={o.inp_checkbox_and_text_zakaz} id="inp_checkbox_and_text_zakaz">
                <div className={o.radio_inp_text_zakaz}>
                  <input
                    type="radio"
                    
                    onClick={()=>{Openzakaz();setRadio(true)}}
                    name="qwe"
                    id="radio-zakaz"
                    className={o.radio_dostavka_zakaz2} />
                  <h3>Самовызов</h3>
                </div>
                <p>{data.place}</p>
              </div>
              <div className={o.inp_checkbox_and_text_zakaz} id="inp_checkbox_and_text_zakaz">
                <div className={o.radio_inp_text_zaka}>
                  <input
                    type="radio"
                    onClick={()=>{Opendostavkazakaz();setRadio(false)}}
                    name="qwe"
                    id="radio-zakaz"
                    className={o.radio_dostavka_zakaz}
                  />
                  <h3>Доставка</h3>
                </div>
                <div className={o.big_dostavka_zakaz} id="big_dostavka_zakaz">
                  <div className={o.first_info_dostavka_zakaz}>
                    <div className={o.small_div_dostavka}>
                      <p>{data.place?(data.place).split(" ")[0]:""}</p>
                      <input type="text" placeholder="Улица" name="" id="input1" />
                    </div>
                    <div className={o.middle_dostavka_div}>
                      <div className={o.another_info_zakaz}>
                        <input type="text" placeholder="Дом" name="" id="input2" />
                        <input
                          type="text"
                          placeholder="Квартира офис"
                          name=""
                          id="input3"
                        />
                      </div>
                      <div className={o.another_info_zakaz}>
                        <input
                          type="text"
                          placeholder="Подъезд"
                          name=""
                          id="input4"
                        />
                        <input type="text" placeholder="Этаж" name="" id="input5" />
                      </div>
                    </div>
                  </div>
                  <p>
                    Точную стоимость доставки на ваш адрес повар сообщит при
                    подтверждении заказа
                  </p>
                </div>
                <div className={o.data_zakaz_time}>
                  <h3>Желаемая дата и время</h3>
                  <div className={o.inp_time_data_dostavka}>
                    <input type="date" name="" id="input_day" />
                    <select name="" id="input_time">
                      <option value="21:00 - 21:30">21:00 - 21:30</option>
                      <option value="21:30 - 22:00">21:30 - 22:00</option>
                      <option value="22:00 - 22:30">22:00 - 22:30</option>
                      <option value="22:30 - 23:00">22:30 - 23:00</option>
                      <option value="23:00 - 23:30">23:00 - 23:30</option>
                      <option value="23:30 - 00:00">23:30 - 00:00</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className={o.hr_for_dostavka_or_zakaz} />
          <div className={o.count_what_do_oformlenia_zakaz}>
            <div className={o.count_offermlenia_zakaz}>
              <h3>03</h3>
            </div>
            <div className={o.detals_of_the_zakaz}>
              <div className={o.df_in_which_stage_zakaz}>
                <div className={o.count_offermlenia_zakaz2}>
                  <h3>03</h3>
                </div>
                <h2>ОПЛАТА</h2>
              </div>

              <div className={o.oplata_zakaza_way_money}>
                <input
                  type="radio"
                  name="ss"
                  id="radio-zakaz"
                  className={o.radio_oplata_money}
                />
                <h3>Напрямую изготовителю после подтверждения заказа</h3>
              </div>
              <div className={o.oplata_zakaza_way_card}>
                <input
                  onClick={nodropradio}
                  type="radio"
                  name="ss"
                  disabled
                  id="radio-zakaz"
                  className={o.radio_oplata_card}
                />
                <div className={o.text_about_bank_card}>
                  <h3>Банковской картой на сайте (скоро)</h3>
                </div>
              </div>
              <div className={o.importand_think_oplata}>
                <div className={o.first_think_oplata}>!</div>
                <div className={o.second_think_oplata}>
                  <p>Онлайн-оплата находится в разработке.</p>
                  <p id="onlain-oplata-zakaz">
                    А пока можно оплатить изготовителю напрямую удобным
                    способом.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className={o.hr_for_dostavka_or_zakaz} />
          <div className={o.count_what_do_oformlenia_zakaz}>
            <div className={o.count_offermlenia_zakaz}>
              <h3>04</h3>
            </div>
            <div className={o.comment_for_zakaz}>
              <div className={o.df_in_which_stage_zakaz}>
                <div className={o.count_offermlenia_zakaz2}>
                  <h3>04</h3>
                </div>
                <h2>
                  КОММЕНТАРИЙ <span>К ЗАКАЗУ</span>
                </h2>
              </div>

              <textarea className={o.texta} name=" " id="menasa" cols="30" rows="10"></textarea>
              <div className={o.button_for_pay_goods}>
                <button onClick={()=>postdata()}>Оформить</button>
              </div>
            </div>
          </div>
    </div>
        </div>




        <div className={o.second_oformlenia_zakaz}>
          <h4>Для вас приготовит:</h4>
          <div className={o.info_customer_zakaz}>
            <div className={o.her_img_zakaz}>
              <img
                src={data.user_image}
                alt=""
              />
            </div>
            <div className={o.her_name_zakaz}>
              <a href="#">
                <h4>{data.name}</h4>
              </a>
              <p>{data.ish_yonalishi}</p>
            </div>
          </div>
          <div className={o.count_of_zakaz}>
            <h4>Состав заказа:</h4>
            <p>
              <MdEdit /> Изменить
            </p>
          </div>
{data.food?(data.food).map((item,key)=>{
  return <div className={o.how_it_cook_zakaz} style={{display:'flex',justifyContent:'space-between'}} >
  <p>{item.foods_name}</p><br />
  <span>{item.count} порция • {item.price} ₽</span>
</div>
}):<></>}
          
          
          <div className={o.overall_price_zakaz}>
            <h2>итого: {allprice} ₽</h2>
          </div>
          <button onClick={()=>postdata()}>Оформить заказ</button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  );
}
