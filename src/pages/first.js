import React from 'react'
import s from '../styles/first.module.css'
import { IoIosStar } from "react-icons/io";
import Navbar from '../pages/componet/navbar';
import Footer from '../pages/componet/footer';
export default function first() {
  return (
  <div >
<Navbar/>
    <div className={s.qiz}>
        <div className={s.qiz1}>
            <div className={s.rasm}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d981cb0a3686c40e126d8ec1a47ef0acb1b1bd5e/d981cb0a3686c40e126d8ec1a47ef0acb1b1bd5e-wc200.jpeg" alt="img"/><br/>
                <button>Повар проверен</button>
            </div>
            <div className={s.osebe}>
                <div className={s.bir}>
                    <h3>Карпцова  Богдана</h3>
                    <div className={s.star2}>
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                    <span>5.0</span>
                </div>
                <div className={s.ikki}>
                    <button style={{width: '140px'}}>Категории блюд</button>
                    <button style={{width: '100px'}}>Торты</button>
                    <button style={{width: '100px'}}>Пирожные</button>
                </div>
                <div className={s.uch}>
                    <h2>О себе</h2><br/>
                    <p>Всем Привет, меня зовут Богдана !👋🏻
                        6 лет назад мы вместе с моей сестрой Анжеликой основали бренд ABsisters 💗 и начали свой кондитерский путь в Санкт-Петербурге.
                        Два года назад я переехала в Тюмень и радую жителей этого чудесного города своими тортиками и десертами🧁🍰 
                        С удовольствием сделаю ваш праздник не только вкусным, но и красивым 🙌🏻 увлекаюсь декором столов 🌸</p>
                </div>
            </div>
        </div>

        <div className={s.qiz2}>
            <div className={s.sms}>
                <div className={s.sakkiz}>
                    <span>8 отзывов</span>
                </div>
                <div className={s.sakkiz_btn}>
                    <button>Написать</button>
                </div>
            </div>
            <div className={s.add}>
                <div className={s.add1}>
                    <div className={s.adress}>
                            <div className={s.ad1}>
                                <span>Адрес</span>
                                <p>Червишевский тракт, 47к3, Тюмень, Россия</p>
                            </div>
                           
                       
                        <div className={s.ad1}>
                            <span>Специализация</span>
                            <p>Кондитер</p>
                        </div>

                        <div className={s.ad1}>
                            <span>Сколько лет в деле</span>
                            <p>10 лет</p>
                        </div>

                        <div className={s.ad1}>
                            <span>Дата регистрации</span>
                            <p>16 августа 2022</p>
                        </div>

                    </div>
                    
                </div>
              
            </div>
        </div>
    </div>

    <div className={s.cards_menu}>
        <h3><strong>Меню</strong></h3>
    </div>
    <div className={s.cards}>
        <div className={s.cards_flex}>


            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>

                    <div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>

                    <div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>

                    <div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>

                    <div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>

                    <div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>


<div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>

                    <div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>

                    <div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>

                    <div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>

                    <div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>

                    <div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.card}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/d504a089caeca175ac6bfe2eec34e7a3a6ea1065/d504a089caeca175ac6bfe2eec34e7a3a6ea1065-wc800.jpeg"
                    alt="img"/>
                <h2>Набор mini</h2>
                <div className={s.df}>
                    <div className={s.d}>
                        <h4>1 300 ₽</h4>
                        <p>300</p>
                    </div>

                    <div className={s.dff}>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.pakazat_btn}>
            <button>Показать все</button>
        </div>
    </div>


<div className={s.otziv}>
        <div className={s.otzivipakupateley}>
            <h2>ОТЗЫВЫ ПОКУПАТЕЛЕЙ</h2><span>8 ОТЗЫВОВ</span>
        </div>

        <div className={s.anastasiya}>
            <div className={s.img}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/90441d4b3eef7b706b71c5ec40131f8605f2bc2b/90441d4b3eef7b706b71c5ec40131f8605f2bc2b-wc100.jpeg"
                    alt="img"/>
                <div className={s.sss}>
                    <div className={s.nname}>
                        <div className={s.anas}>
                            <h4>Анастасия</h4>
                        </div>
                        <span>29 октября 2023</span>
                    </div>
                    <div className={s.sttar}>
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                </div>
            </div>



            
            <div className={s.ot}>
                <p>
                    Очень вкусный бенто тортик! И получилось идеально воплотить рисунок с реальной фотографии собаки,
                    это превзошло все ожидания 🤍
                </p>
            </div>
        </div>

        <div className={s.anastasiya}>
            <div className={s.img}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/90441d4b3eef7b706b71c5ec40131f8605f2bc2b/90441d4b3eef7b706b71c5ec40131f8605f2bc2b-wc100.jpeg"
                    alt="img"/>
                <div className={s.sss}>
                    <div className={s.nname}>
                        <h4>Анастасия</h4><span>29 октября 2023</span>
                    </div>
                    <div className={s.sttar}>
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                </div>
            </div>
            <div className={s.ot}>
                <p>
                    Очень вкусный бенто тортик! И получилось идеально воплотить рисунок с реальной фотографии собаки,
                    это превзошло все ожидания 🤍
                </p>
            </div>
        </div>

        <div className={s.anastasiya}>
            <div className={s.img}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/90441d4b3eef7b706b71c5ec40131f8605f2bc2b/90441d4b3eef7b706b71c5ec40131f8605f2bc2b-wc100.jpeg"
                    alt="img"/>
                <div className={s.sss}>
                    <div className={s.nname}>
                        <h4>Анастасия</h4><span>29 октября 2023</span>
                    </div>
                    <div className={s.sttar}>
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                </div>
            </div>
            <div className={s.ot}>
                <p>
                    Очень вкусный бенто тортик! И получилось идеально воплотить рисунок с реальной фотографии собаки,
                    это превзошло все ожидания 🤍
                </p>
            </div>
        </div>


<div className={s.anastasiya}>
            <div className={s.img}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/90441d4b3eef7b706b71c5ec40131f8605f2bc2b/90441d4b3eef7b706b71c5ec40131f8605f2bc2b-wc100.jpeg"
                    alt="img"/>
                <div className={s.sss}>
                    <div className={s.nname}>
                        <h4>Анастасия</h4><span>29 октября 2023</span>
                    </div>
                    <div className={s.sttar}>
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                </div>
            </div>
            <div className={s.ot}>
                <p>
                    Очень вкусный бенто тортик! И получилось идеально воплотить рисунок с реальной фотографии собаки,
                    это превзошло все ожидания 🤍
                </p>
            </div>
        </div>

        <div className={s.anastasiya}>
            <div className={s.img}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/90441d4b3eef7b706b71c5ec40131f8605f2bc2b/90441d4b3eef7b706b71c5ec40131f8605f2bc2b-wc100.jpeg"
                    alt="img"/>
                <div className={s.sss}>
                    <div className={s.nname}>
                        <h4>Анастасия</h4><span>29 октября 2023</span>
                    </div>
                    <div className={s.sttar}>
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                </div>
            </div>
            <div className={s.ot}>
                <p>
                    Очень вкусный бенто тортик! И получилось идеально воплотить рисунок с реальной фотографии собаки,
                    это превзошло все ожидания 🤍
                </p>
            </div>
        </div>

        <div className={s.anastasiya}>
            <div className={s.img}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/90441d4b3eef7b706b71c5ec40131f8605f2bc2b/90441d4b3eef7b706b71c5ec40131f8605f2bc2b-wc100.jpeg"
                    alt="img"/>
                <div className={s.sss}>
                    <div className={s.nname}>
                        <h4>Анастасия</h4><span>29 октября 2023</span>
                    </div>
                    <div className={s.sttar}>
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                </div>
            </div>
            <div className={s.ot}>
                <p>
                    Очень вкусный бенто тортик! И получилось идеально воплотить рисунок с реальной фотографии собаки,
                    это превзошло все ожидания 🤍
                </p>
            </div>
        </div>

        <div className={s.anastasiya}>
            <div className={s.img}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/90441d4b3eef7b706b71c5ec40131f8605f2bc2b/90441d4b3eef7b706b71c5ec40131f8605f2bc2b-wc100.jpeg"
                    alt="img"/>
                <div className={s.sss}>
                    <div className={s.nname}>
                        <h4>Анастасия</h4><span>29 октября 2023</span>
                    </div>
                    <div className={s.sttar}>
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                </div>
            </div>
            <div className={s.ot}>
                <p>
                    Очень вкусный бенто тортик! И получилось идеально воплотить рисунок с реальной фотографии собаки,
                    это превзошло все ожидания 🤍
                </p>
            </div>
        </div>


<div className={s.anastasiya}>
            <div className={s.img}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/90441d4b3eef7b706b71c5ec40131f8605f2bc2b/90441d4b3eef7b706b71c5ec40131f8605f2bc2b-wc100.jpeg"
                    alt="img"/>
                <div className={s.sss}>
                    <div className={s.nname}>
                        <h4>Анастасия</h4><span>29 октября 2023</span>
                    </div>
                    <div className={s.sttar}>
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                </div>
            </div>
            <div className={s.ot}>
                <p>
                    Очень вкусный бенто тортик! И получилось идеально воплотить рисунок с реальной фотографии собаки,
                    это превзошло все ожидания 🤍
                </p>
            </div>
        </div>
        <div className={s.otziv_btn}>
            <button>Показать все</button>
        </div>
    </div>


    







  <Footer/>





  


  </div>
  )
}
