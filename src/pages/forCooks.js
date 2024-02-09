import React, { useEffect } from 'react'
import s from "../styles/ForCooks.module.css"
import Image from 'next/image'
import img from "../images/logo.svg"
import img1 from "../images/rocket.png"
import img2 from "../images";
import Script from 'next/script'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'


export default function forCooks() {
    useEffect(() => {
    AOS.init(); // AOS kutubxonasini boshlash
  }, []);
  return (
    <div>
        <header>
          {/* bir */}
<div className={s.header_0}>
<div className={s.header_1}>
    <div className={s.header_text}>
        <span>Привет!</span>
        <h1>ЛЮБИШЬ ГОТОВИТЬ?</h1>
        <div className={s.header_img} data-tilt id={s.dispa}>
            <div className={s.img_header} data-tilt>
             <Image className={s.logo} src={img} alt="" />
             <Image className={s.rocket} src={img1} alt="" />
            </div>
             </div>
          
        <h3>ПРИГЛАШАЕМ  K СОТРУДНИЧЕСТВУ</h3>
        <p>Мы объединяем всех, кто любит готовить, a также кондитеров и фермеров, чтобы каждый мог разместить свою продукцию и зарабатывать больше!</p>
        <button>Регистрация в сервисе</button>
        <h4 className={s.header_p}>Займёт всего 3 минуты</h4>
    </div>
    <div className={s.header_img} data-tilt>
   <div className={s.img_header} data-tilt>
    <Image className={s.logo} src={img} alt="" />
    <Image className={s.rocket} src={img1}  alt="" />
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

</div>

{/* uch  */}


<div data-aos="fade-up"
     data-aos-duration="3000" className={s.otziv1}>
   <h1>КЛЮЧЕВЫЕ  ФИШКИ СЕРВИСА</h1>
    <img src="" alt="" />

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


</div>
<Script src='../path/to/script.js' />
    </header>
    </div>
  )
}
