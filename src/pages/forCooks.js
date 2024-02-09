
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
import Script from 'next/script'
import Aos from 'aos';
import 'aos/dist/aos.css';
import VanillaTilt from 'vanilla-tilt';


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
<div className={s.header_0}>
<div className={s.header_1}>
    <div className={s.header_text}>
        <span>Привет!</span>
    
        <h1>ЛЮБИШЬ ГОТОВИТЬ?</h1>
        <div ref={tiltRef}  className={s.header_img} id={s.dispa}>
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
    <Image ref={tiltRef}  className={s.logo} src={img} alt="" />
    <Image ref={tiltRef}  className={s.rocket} src={img1}  alt="" />
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
                <div className={s.circle}></div>
                <div className={s.circle1}></div>
                <p>01</p>
            </div>
        </div>

        <div data-aos="fade-up"
     data-aos-duration="3000" className={s.zakaz}>
            <h2>ОТКЛИКАЙСЯ  НА ЗАКАЗЫ</h2>
            <p>Приглашай пользователей через свои соц. сети, откликайся на заказы и зарабатывай вместе с нами!</p>
            <div className={s.number}>
                <p>03</p>
            </div>
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
        <Image ref={tiltRef}  data-aos="fade-up"
     data-aos-duration="3000"  className={s.sushi_rotate}  src={img3} alt="" />
        <Image data-aos="fade-up"
     data-aos-duration="3000"  className={s.sushi_rotate1} src={img3} alt="" />
        
</div>

</div>

{/* uch  */}


<div data-aos="fade-up"
     data-aos-duration="3000" className={s.otziv1}>
   <h1>КЛЮЧЕВЫЕ  ФИШКИ СЕРВИСА</h1>

    <Image ref={tiltRef}  className={s.cupcake}  src={img2} alt="" />

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



<main className={s.main}>
    <h3>
    Отзывы
    участников
    сервиса
    </h3>
<div className={s.image}>

<div className={s.img3} style={{background:`url(${data[page].img})`,backgroundSize: 'auto 100%'}}>
<div className={s.img4}></div>
</div>
</div>
<div  className={s.text}>
<Image className={s.name}  src={img} alt="" />
<p>{data[page].desk}</p>
<h2>{data[page].name}</h2>
<h5>{data[page].kasb}</h5>
<div className={s.buttons}>
  <button style={page==0?{backgroundColor: "#06c1603e"}:{backgroundColor: "#06c160"}} onClick={()=>{minus()}}><FaArrowLeftLong /></button>
  <button style={page==data.length-1?{backgroundColor: "#06c1603e"}:{backgroundColor: "#06c160"}} onClick={()=>{plus()}}><FaArrowRight /></button>
</div>

</div>
    </main>
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
<Script src='../path/to/script.js' />
    </header>
    </div>
  )
}
