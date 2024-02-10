
import React, { useEffect,useState, useRef  } from 'react'
import { FaArrowRight,FaArrowLeftLong  } from "react-icons/fa6";
import s from "../styles/ForCooks.module.css"
import Image from 'next/image'
import img from "../images/logo.svg"
import img1 from "../images/rocket.png"
import img2 from "../images/1.png"
import img3 from "../images/sushi.webp"
import img4 from "../images/donut.png"
import img5 from "../images/taco.png"
import img6 from "../images/pizza.png"
import Script from 'next/script'
import { FaPlus } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import VanillaTilt from 'vanilla-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function forCooks() {
    const tiltRef = useRef(null);
    var [data,setData]=useState(
        [
          {
            name:'Эдуард Габайдуллин',
            img:'https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/33d3066f71313b3880233f25d267ae9f851f6e70/33d3066f71313b3880233f25d267ae9f851f6e70.jpg',
            kasb:'Фермер',
            desk:'Когда-нибудь жизнь даёт нам новые возможности, так и началась моя карьера пчеловода в 2020 году! А теперь и с сервисом «Повар на связи». Всегда есть момент для новых открытий, стартуйте! Здесь связь «покупатель-продавец» вышла на более удобный уровень, «прозрачный» и «прямой».'
          },
          {
            name:'Михаил Смирнов',
            img:'https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/369c623147260f2c4d78267b8267f4029f5cf015/369c623147260f2c4d78267b8267f4029f5cf015.JPEG',
            kasb:'Шеф-повар',
            desk:'Идея сервиса очень крутая! Я работаю шеф-поваром, и по роду деятельности часто сталкиваюсь с необычными продуктами и интересными блюдами! По сути, сервис даёт каждому возможность создать «ресторан у себя дома», не прибегая к дополнительным вложениям.'
          },
          {
            name:'Анна Мингалева',
            img:'https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/dce80a744236366da02deaa3aa099d493045777d/dce80a744236366da02deaa3aa099d493045777d.jpg',
            kasb:'Повар-кондитер',
            desk:'Повар на связи — сервис, облегчающий жизнь и кондитерам и заказчикам. После блокировки известной соц.сети, все разбежались по разным местам и стало сложнее найти своих клиентов или своего изготовителя. Это максимально актуальная и своевременная платформа для комфортного взаимодействия.'
          }
        ])
        var [page,setPage]=useState(0)
        function plus() {
          if(page<data.length-1){
          setPage(page+1)  
          }
        
        }
        function minus() {
          if(page>0){
            setPage(page-1)
            }
        }

    useEffect(() => {
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
  useEffect(()=>{
    Aos.init();
  })

  return (
    <div>
        <header>
          {/* bir */}
<div className={s.body1}>
<div className={s.header_0}>
<div className={s.header_1}>
    <div className={s.header_text}>
        <span>Привет!</span>
    
        <h1>ЛЮБИШЬ ГОТОВИТЬ?</h1>
        <div   className={s.header_img} id={s.dispa}>
            <div className={s.img_header} >
             <Image className={s.logo} src={img} alt="" />
             <Image className={s.rocket} src={img1} alt="" />
            </div>
             </div>
          
        <h3>ПРИГЛАШАЕМ  K СОТРУДНИЧЕСТВУ</h3>
        <p>Мы объединяем всех, кто любит готовить, a также кондитеров и фермеров, чтобы каждый мог разместить свою продукцию и зарабатывать больше!</p>
        <button>Регистрация в сервисе</button>
        <h4 className={s.header_p}>Займёт всего 3 минуты</h4>
    </div>
    <div  className={s.header_img} >
   <div  className={s.img_header}>
    <Image   className={s.logo} src={img} alt="" />
    <Image   className={s.rocket} src={img1}  alt="" />
   </div>
    </div>
</div>

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
     data-aos-duration="3000"  className={s.price_2}>
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
        <Image   data-aos="fade-up"
     data-aos-duration="3000"  className={s.sushi_rotate}  src={img3} alt="" />
        <Image data-aos="fade-up"
     data-aos-duration="3000"  className={s.sushi_rotate1} src={img3} alt="" />
        
</div>

</div>

{/* uch  */}


<div data-aos="fade-up"
     data-aos-duration="3000" className={s.otziv1}>
   <h1>КЛЮЧЕВЫЕ ФИШКИ СЕРВИСА</h1>

    <Image className={s.cupcake}  src={img2} alt="" />

   <Swiper
        pagination={{
          dynamicBullets: true,}}  modules={[Pagination]} className="mySwiper" >
        <SwiperSlide className={s.slide_swip}>   <div className={s.grafik}>
    <Image className={s.otziv_img} src={img} alt="" />
    <h2>ТОЛЬКО ДОСТОВЕРНЫЕ  <br /> ОТЗЫВЫ</h2>
    <p>Покупатель сможет оставлять отзыв только после получения заказа. <br />Хороший рейтинг позволит привлекать ещё больше клиентов!</p>
    </div></SwiperSlide>
        <SwiperSlide className={s.slide_swip}>
    <div className={s.grafik}>
    <Image className={s.otziv_img} src={img} alt="" />
    <h2>ВCЕ КЛИЕНТЫ — <br /> В ОДНОМ МЕСТЕ</h2>
    <p>Переписки в чатах только с теми, кто хочет оформить заказ на твоё блюдо.</p>
    </div></SwiperSlide>
        <SwiperSlide className={s.slide_swip}>  <div className={s.grafik}>
    <Image className={s.otziv_img} src={img} alt="" />
    <h2>ДОХОД И ГРАФИК ЗАВИСЯТ ОТ ТЕБЯ</h2>
    <p>Готовь заказы когда тебе удобно, предлагай продукцию знакомым и получай новых клиентов от нас. <br />Заработок не ограничен зарплатой!</p>
    </div></SwiperSlide>
  </Swiper>
<div className={s.otziv}>

    <div className={s.grafik}>
    <Image className={s.otziv_img} src={img} alt="" />
    <h2>ТОЛЬКО ДОСТОВЕРНЫЕ  <br /> ОТЗЫВЫ</h2>
    <p>Покупатель сможет оставлять отзыв только после получения заказа. <br />Хороший рейтинг позволит привлекать ещё больше клиентов!</p>
    </div>


    <div className={s.grafik}>
    <Image className={s.otziv_img} src={img} alt="" />
    <h2>ВCЕ КЛИЕНТЫ — <br /> В ОДНОМ МЕСТЕ</h2>
    <p>Переписки в чатах только с теми, кто хочет оформить заказ на твоё блюдо.</p>
    </div>



    <div className={s.grafik}>
    <Image className={s.otziv_img} src={img} alt="" />
    <h2>ДОХОД И ГРАФИК ЗАВИСЯТ ОТ ТЕБЯ</h2>
    <p>Готовь заказы когда тебе удобно, предлагай продукцию знакомым и получай новых клиентов от нас. <br />Заработок не ограничен зарплатой!</p>
    </div>
</div>
</div>



<main  data-aos="fade-up"
     data-aos-duration="3000" className={s.main}>
    <h3>
    Отзывы
    участников
    сервиса
    </h3>
<div className={s.image}>

<div  data-aos="fade-up"
     data-aos-duration="3000" className={s.img3} style={{background:`url(${data[page].img})`,backgroundSize: 'auto 100%'}}>
<div className={s.img4}></div>
</div>
</div>
<div   className={s.text}>
<Image className={s.name1}  src={img} alt="" />
<p>{data[page].desk}</p>
<h2>{data[page].name}</h2>
<h5>{data[page].kasb}</h5>
<div className={s.buttons}>
  <button style={page==0?{backgroundColor: "#06c1603e"}:{backgroundColor: "#06c160"}} onClick={()=>{minus()}}><FaArrowLeftLong /></button>
  <button style={page==data.length-1?{backgroundColor: "#06c1603e"}:{backgroundColor: "#06c160"}} onClick={()=>{plus()}}><FaArrowRight /></button>
</div>

</div>
    </main>




{/* pizza */}

<div data-aos="fade-up"
     data-aos-duration="3000"  className={s.pizza}>
      <div className={s.circle}></div>
      <Image className={s.pizza_6} src={img6} alt="" />
  <h1>ПОДДЕРЖКА УЧАСТНИКОВ</h1>
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
    <div className={s.svyaz}>
      <h2>ПРОЦЕСС</h2>
      <p>Берём на себя вопрос с привлечением покупателей, платежами и всей ИТ составляющей.
Мы хотим, чтобы твои доходы выросли благодаря сервису!</p>

<h2>НА СВЯЗИ</h2>
<p>Служба поддержки работает ежедневно с 8:00 до 22:00 (Мск).</p>
    </div>
  </div>
</div>



{/* 4 */}


<div  data-aos="fade-up"
     data-aos-duration="3000" className={s.registration}>
        <Image  className={s.taco} src={img5} alt="" />
        <Image className={s.donut} src={img4} alt="" />

    <h1>РЕГИСТРАЦИЯ В СЕРВИСЕ</h1>
    <div  className={s.servis_inp}>
    <div className={s.phone_inp}>
    <input type="text" name="" id="" placeholder='Телефон' />
        </div>
        <div className={s.phone_inp}>
    <input type="email" name="" id="" placeholder='Email' />
        </div>
        <div className={s.phone_inp}>
    <input type="password" name="" id="" placeholder='Пароль'/>
        </div>
        <p>Нажимая на кнопку «Зарегистрироваться», я даю согласие на обработку моих персональных данных <br /> в соответствии с <a href="">политикой информационной безопасности.</a> Мы не используем данные и не присылаем рассылки</p>
        <center><button>Зарегистрироваться</button></center>
    </div>
</div>


</div>
</div>


<div className={s.vopros}>

<div className={s.accordion}>
  <h1>ВОПРОСЫ <br />
И ОТВЕТЫ</h1>
<div className={s.accordion_item}>
<div className={s.accordion_title}><h2>О сервисе</h2><FaPlus /></div>
  <div className={s.accordion_p}>
Мы объединяем домашних кондитеров, частных и профессиональных поваров, фермеров, а также тех, кто просто умеет и любит готовить.

Сервис позволяет зарабатывать, находясь на своей кухне, с помощью выездного обслуживания или продажи своей продукции, а также заказывать любимые блюда и десерты, которые будут приготовлены индивидуально под ваш заказ.

Мы поможем сэкономить время на заказ блюда, или поиск специалиста, поскольку каждый сможет найти подходящего специалиста на карте своего города, просмотрев его меню, фотографии кухни и отзыв.</div>
</div>
</div>

<div className={s.page_image}>
  <div className={s.min_circle1}></div>
  <div className={s.circle1}></div>
  <img ref={tiltRef}  src="https://cdn-icons-png.flaticon.com/512/7357/7357733.png" alt="" />
  <div className={s.max_circle}>
   <div><h4>— Не нашли ответа на свой вопрос?</h4>
    <p>Задайте его нам!</p></div>
  </div>

</div>

</div>







<Script src='../path/to/script.js' />
    </header>
    </div>
  )
}
