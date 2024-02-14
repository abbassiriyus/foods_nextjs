import React, { useEffect, useState, useRef } from 'react'
import { FaArrowRight, FaArrowLeftLong } from "react-icons/fa6";
import s from "../styles/ForCooks.module.css"
import Image from 'next/image'
import img from "../images/logo.png"
import img1 from "../images/rocket.png"
import img2 from "../images/1.png"
import img3 from "../images/sushi.webp"
import img4 from "../images/donut.png"
import img5 from "../images/taco.png"
import img6 from "../images/pizza.png"
import Script from 'next/script'
import { FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Aos from 'aos';
import 'aos/dist/aos.css';
import VanillaTilt from 'vanilla-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import accordion_data from './data/accaordion_data';
import axios from 'axios';
import url from './host/config';

export default function forCooks() {
  const tiltRef = useRef(null);
  var [data, setData] = useState([{}])
    

  var [page, setPage] = useState(0)
  function plus() {
    if (page < data.length - 1) {
      setPage(page + 1)
    }

  }
  function SelectAc(key){
    console.log(key);
for (let i = 0; i < accordion_data.length; i++) {
if(key==i){
document.querySelectorAll(".accordion_p")[i].style="height:auto;padding-bottom:30px"
document.querySelectorAll(".plus")[i].style="transform: rotate(45deg);color: #06c160;"
document.querySelectorAll(".title_accordion")[i].style="color: #06c160;"
}else{
  document.querySelectorAll(".accordion_p")[i].style="height:0px;padding-bottom:0px;overflow: hidden"
  document.querySelectorAll(".plus")[i].style="transform: rotate(0deg);color: #06c160;"
  document.querySelectorAll(".title_accordion")[i].style="color: grey;"
}
}
  }
  function minus() {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  function getData() {
    axios.get(`${url}/api/carousel_forcooks`).then(res=>{
      setData(res.data)
    }).catch(err=>{
      console.log("not geting");
    })
  }

  useEffect(() => {
    getData()
    // VanillaTilt.js'i bileşenin montajı sırasında etkinleştirin
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    }
    // AOS kutubxonasini boshlash
  }, []);
  useEffect(() => {
    Aos.init();
  })

  return (
    <div>
      <header>
        {/* bir */}
        <div className={s.body1}>
          <div className={s.header_0}>

          <header className={s.header}>
    <div className={s.text}>
        <p>Привет!</p>
        <h1>Любишь <br /> готовить?</h1>
        <div className={s.circle} data-tilt id={s.dd}>
            <Image className={s.img1} src={img} alt="" />
            <Image  className={s.img2} src={img1}alt="" />
        </div>
        <h3>Приглашаем <br /> к сотрудничеству </h3>
        <span>Мы объединяем всех, кто любит готовить,  а также кондитеров и фермеров, чтобы каждый  мог разместить свою продукцию и зарабатывать больше!</span>
        <h5>Займёт всего 3 минуты</h5>
    </div>
    <div data-tilt className={s.circle}>
        <Image className={s.img1} data-tilt src={img} alt="" />
        <Image  className={s.img2} src={img1} alt="" />
    </div>
</header>

            {/* ikki */}

            <div className={s.servis}>
              <h2>КАК РАБОТАЕТ СЕРВИС?</h2>
              <p>— Максимально просто и прозрачно, честное слово!</p>
              <div className={s.zakaz1}>
                <div className={s.menu}>
                  <div data-aos="fade-up"
                    data-aos-duration="3000" className={s.zakaz}>
                    <h2>ПРОХОДИ РЕГИСТРАЦИЮ</h2>
                    <p>Напиши подробно о себе, выбери категории меню, загрузи аватарку и укажи адрес своей кухни!</p>
                    <div className={s.number}>
                      <p>01</p>
                    </div>
                  </div>
                  <div data-aos="fade-up"
                    data-aos-duration="3000" className={s.price_2}>
                    <div id={s.none} className={s.price_sushi}>
                      <h2>СОЗДАВАЙ СВОЕ  МЕНЮ</h2>
                      <p>Ты лучше всех готовишь плов?
                        Или у тебя самые красивые десерты?
                        Создай блюдо в личном кабинете, добавь описание, назови цену и прикрепи качественную фотографию</p>
                      <div className={s.number}>

                        <p>02</p>
                      </div>
                      <button className={s.btn_block}>Регистрация в сервисе</button>
                    </div>


                  </div>

                  <div data-aos="fade-up"
                    data-aos-duration="3000" className={s.zakaz}>
                    <h2>ОТКЛИКАЙСЯ  НА ЗАКАЗЫ</h2>
                    <p>Приглашай пользователей через свои соц. сети, откликайся на заказы и зарабатывай вместе с нами!</p>
                    <div className={s.number}>
                      <p>03</p>
                    </div>
                    <button className={s.btn_none}>Регистрация в сервисе</button>
                  </div>
                </div>
                <div data-aos="fade-up"
                  data-aos-duration="3000" className={s.price_2}>
                  <div className={s.price_sushi}>
                    <h2>СОЗДАВАЙ СВОЕ  МЕНЮ</h2>
                    <p>Ты лучше всех готовишь плов?
                      Или у тебя самые красивые десерты?
                      Создай блюдо в личном кабинете, добавь описание, назови цену и прикрепи качественную фотографию</p>
                    <div className={s.number}>

                      <p>02</p>
                    </div>
                    <button>Регистрация в сервисе</button>
                  </div>


                </div>
                <Image data-aos="fade-up"
                  data-aos-duration="3000" className={s.sushi_rotate} src={img3} alt="" />
                <Image data-aos="fade-up"
                  data-aos-duration="3000" className={s.sushi_rotate1} src={img3} alt="" />

              </div>

            </div>

            {/* uch  */}


            <div data-aos="fade-up"
              data-aos-duration="3000" className={s.otziv1}>
              <h1>КЛЮЧЕВЫЕ ФИШКИ СЕРВИСА</h1>

              <Image ref={tiltRef} className={s.cupcake} src={img2} alt="" />

              <Swiper
              centeredSlides="true"
                pagination={{
                  dynamicBullets: true,
                }}
                 modules={[Pagination]} className="mySwiper" >
                <SwiperSlide className={s.slide_swip}>
                  <div className={s.grafik}>
                    <Image className={s.otziv_img}  style={{height:'70px',width:"auto"}}  src={img} alt="" />
                    <h2>ТОЛЬКО ДОСТОВЕРНЫЕ  <br /> ОТЗЫВЫ</h2>
                    <p>Покупатель сможет оставлять отзыв только после получения заказа. <br />Хороший рейтинг позволит привлекать ещё больше клиентов!</p>
                  </div></SwiperSlide>
                <SwiperSlide className={s.slide_swip}>
                  <div className={s.grafik}>
                    <Image className={s.otziv_img}  style={{height:'70px',width:"auto"}}  src={img} alt="" />
                    <h2>ВCЕ КЛИЕНТЫ — <br /> В ОДНОМ МЕСТЕ</h2>
                    <p>Переписки в чатах только с теми, кто хочет оформить заказ на твоё блюдо.</p>
                  </div></SwiperSlide>
                <SwiperSlide className={s.slide_swip}>  <div className={s.grafik}>
                  <Image style={{height:'70px',width:"auto"}}  className={s.otziv_img} src={img} alt="" />
                  <h2>ДОХОД И ГРАФИК ЗАВИСЯТ ОТ ТЕБЯ</h2>
                  <p>Готовь заказы когда тебе удобно, предлагай продукцию знакомым и получай новых клиентов от нас. <br />Заработок не ограничен зарплатой!</p>
                </div></SwiperSlide>
              </Swiper>
              <div className={s.otziv}>
                <div className={s.grafik}>
                  <Image className={s.otziv_img}  style={{height:'70px',width:"auto"}} src={img} alt="" />
                  <h2>ТОЛЬКО ДОСТОВЕРНЫЕ  <br /> ОТЗЫВЫ</h2>
                  <p>Покупатель сможет оставлять отзыв только после получения заказа. <br />Хороший рейтинг позволит привлекать ещё больше клиентов!</p>
                </div>


                <div className={s.grafik}>
                  <Image className={s.otziv_img}  style={{height:'70px',width:"auto"}}  src={img} alt="" />
                  <h2>ВCЕ КЛИЕНТЫ — <br /> В ОДНОМ МЕСТЕ</h2>
                  <p>Переписки в чатах только с теми, кто хочет оформить заказ на твоё блюдо.</p>
                </div>



                <div className={s.grafik}>
                  <Image className={s.otziv_img}  style={{height:'70px',width:"auto"}}  src={img} alt="" />
                  <h2>ДОХОД И ГРАФИК ЗАВИСЯТ ОТ ТЕБЯ</h2>
                  <p>Готовь заказы когда тебе удобно, предлагай продукцию знакомым и получай новых клиентов от нас. <br />Заработок не ограничен зарплатой!</p>
                </div>
              </div>
            </div>



            <main data-aos="fade-up"
              data-aos-duration="3000" className={s.main}>
              <h3>
                Отзывы
                участников
                сервиса
              </h3>
              <div className={s.image}>

                <div data-aos="fade-up"
                  data-aos-duration="3000" className={s.img3} style={{ background: `url(${data[page].image})`, backgroundSize: 'auto 100%' }}>
                  <div className={s.img4}></div>
                </div>
              </div>
              <div className={s.text}>
                <Image className={s.name1} style={{width:'100px',height:'auto'}} src={img} alt="" />
                <p>{data[page].desk}</p>
                <h2>{data[page].name}</h2>
                <h5>{data[page].kasb}</h5>
                <div className={s.buttons}>
                  <button style={page == 0 ? { backgroundColor: "#06c1603e" } : { backgroundColor: "#06c160" }} onClick={() => { minus() }}><FaArrowLeftLong /></button>
                  <button style={page == data.length - 1 ? { backgroundColor: "#06c1603e" } : { backgroundColor: "#06c160" }} onClick={() => { plus() }}><FaArrowRight /></button>
                </div>

              </div>
            </main>




            {/* pizza */}

            <div data-aos="fade-up"
              data-aos-duration="3000" className={s.pizza}>
              <div ref={tiltRef} className={s.circle}> <Image className={s.pizza_6} src={img6} alt="" /></div>

              <h1>ПОДДЕРЖКА УЧАСТНИКОВ</h1>
              <Swiper
              // centeredSlides="true"
              spaceBetween={30}
              breakpoints={{
                499: {
                  width: 499,
                  slidesPerView: 1,
                  centeredSlides:true,
                },
                576: {
                  width: 576,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  spaceBetween:10,
                  slidesPerView: 2,
                },
              }}
              slidesPerView={1}
                pagination={{
                  dynamicBullets: true,
                }} modules={[Pagination]} className="mySwiper" >
                <SwiperSlide className={s.slide_swip}>
                  <div className={s.sostav}>
                    <h2>ПРОДВИЖЕНИЕ</h2>
                    <p>
                      Активно рекламируем участников сервиса, а так же их блюда и продукты.
                      Если захочешь — поможем стать популярным и зарабатывать больше на любимом деле.</p>

                  </div>
                </SwiperSlide>
                <SwiperSlide className={s.slide_swip}>
                  <div className={s.sostav}>
                    <h2>СОСТАВ</h2>
                    <p>Поможем тебе создать привлекательное меню, предоставим советы по ценообразованию и гайд для расчёта КБЖУ блюд.

                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={s.slide_swip}>
                  <div className={s.sostav}>
                    <h2>ПРОЦЕСС</h2>
                    <p>Берём на себя вопрос с привлечением покупателей, платежами и всей ИТ составляющей.
                      Мы хотим, чтобы твои доходы выросли благодаря сервису!</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={s.slide_swip}>
                  <div className={s.sostav}>
                    <h2>НА СВЯЗИ</h2>
                    <p>Служба поддержки работает ежедневно с 8:00 до 22:00 (Мск).</p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className={s.pizza_div}>
                <div className={s.sostav}>
                  <h2>ПРОДВИЖЕНИЕ</h2>
                  <p>
                    Активно рекламируем участников сервиса, а так же их блюда и продукты.
                    Если захочешь — поможем стать популярным и зарабатывать больше на любимом деле.</p>


                  <h2>СОСТАВ</h2>
                  <p>Поможем тебе создать привлекательное меню, предоставим советы по ценообразованию и гайд для расчёта КБЖУ блюд.

                  </p>
                </div>
                <div className={s.sostav}>
                  <h2>ПРОЦЕСС</h2>
                  <p>Берём на себя вопрос с привлечением покупателей, платежами и всей ИТ составляющей.
                    Мы хотим, чтобы твои доходы выросли благодаря сервису!</p>

                  <h2>НА СВЯЗИ</h2>
                  <p>Служба поддержки работает ежедневно с 8:00 до 22:00 (Мск).</p>
                </div>
              </div>
            </div>



            {/* 4 */}


          


          </div>
        </div>

  <div data-aos="fade-up"
              data-aos-duration="3000" className={s.registration}>
              <Image className={s.taco} src={img5} alt="" />
              <Image className={s.donut} src={img4} alt="" />

              <h1>РЕГИСТРАЦИЯ В СЕРВИСЕ</h1>
              <div className={s.servis_inp}>
                <div className={s.phone_inp}>
                  <input type="text" name="" id="" placeholder='Телефон' /><IoIosInformationCircleOutline />
                </div>
                <div className={s.phone_inp}>
                  <input type="email" name="" id="" placeholder='Email' /><IoIosInformationCircleOutline />
                </div>
                <div className={s.phone_inp}>
                  <input type="password" name="" id="password" placeholder='Пароль' />
                  <IoEyeOutline onClick={()=>{
document.querySelector("#password").type="text"
document.querySelector("#eyes1").style="display:none"
document.querySelector("#eyes2").style="display:block"
                  }} id='eyes1' className={s.eye1} /> 
                  <IoEyeOffOutline className={s.eye1}  style={{display:"none"}} id='eyes2' onClick={()=>{
document.querySelector("#password").type="password"
document.querySelector("#eyes2").style="display:none"
document.querySelector("#eyes1").style="display:block"
                  }}  />
  <IoIosInformationCircleOutline />
                </div>
                <p>Нажимая на кнопку «Зарегистрироваться», я даю согласие на обработку моих персональных данных <br /> в соответствии с <a href="">политикой информационной безопасности.</a> Мы не используем данные и не присылаем рассылки</p>
                <center><button>Зарегистрироваться</button></center>
              </div>
            </div>
        <div  data-aos="fade-up"
                    data-aos-duration="3000" className={s.vopros}>

          <div className={s.accordion}>
            <h1>ВОПРОСЫ <br />
              И ОТВЕТЫ</h1>
              {accordion_data.map((item,key)=>{
  return <div className={s.accordion_item} onClick={()=>{SelectAc(key)}}>
              <div className={s.accordion_title}><h2 className='title_accordion'>{item.title}</h2><FaPlus className='plus' id={s.plus_acc} /></div>
              <div  className="accordion_p" id={s.hidden} style={{height:'0px',overflow: 'hidden'}}>
               {item.desc}</div>
            </div>
              })}
           
          </div>

          <div className={s.page_image}>
            <div className={s.min_circle1}></div>
            <div className={s.circle1}></div>
            <img  ref={tiltRef} src="https://cdn-icons-png.flaticon.com/512/7357/7357733.png" alt="" />
            <div className={s.max_circle}>
              <div><h4>— Не нашли ответа на свой вопрос?</h4>
                <p>Задайте его нам!</p>
                <center><button>Задать вопрос</button></center>
                </div>
            </div>

          </div>




           
        </div>







        <Script src='../path/to/script.js' />
      </header>  
       {/* <div className={s.modal_vopros}>
              <div className={s.modal1}>
              <div className={s.closeline}>
              <h2>Напишите нам</h2><AiOutlineClose className={s.closeline2} />
              </div>
              <div className={s.vopros_inp}>
           <div className={s.text}>
           <input type="text" placeholder='Имя' />
           </div>
              </div>
              <div className={s.vopros_inp}>
              <div className={s.text}>
           <input type="text" placeholder='Телефон' />
           </div>
              </div>
              <div className={s.vopros_inp}>
              <div className={s.text}>
           <input type="email" placeholder='Email' />
           </div>
              </div>
           <center>   <select id={s.select_value}>
                <option value="">
                Личный кабинет
                </option>
                <option value="">
                Личный кабинет
                </option>
                <option value="">
                Личный кабинет
                </option>
                <option value="">
                Личный кабинет
                </option>
              </select></center>
              <div className={s.vopros1_inp}>
              <div className={s.desc}>
              <input type="text" placeholder='Ваш вопрос'/>
              </div>
              </div>
              <p>Нажимая на кнопку «Отправить», я даю согласие на обработку моих персональных данных в соответствии <span>с политикой информационной безопасности.</span> Мы не используем данные и не присылаем рассылки</p>
              <button>Отправить</button>
              </div>

              </div> */}
    </div>
  )
}
