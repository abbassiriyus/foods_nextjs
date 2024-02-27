import React from "react";
import o from "../styles/oformlenia_zakaz.module.css"
import { IoIosArrowForward } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import Navbar from "./componet/navbar";
import Footer from "./componet/footer";
// import "../styles/oformlenia_zakaz.css";

export default function Oformlenia_zakaz() {
  const Openanotherperson = () => {
    document.querySelector(".gets-person2-zakaz").style = "display:flex";
  };
  const Openanotherperson2 = () => {
    document.querySelector(".gets-person3-zakaz").style = "display:block";
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
{/*  */}
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
                  <p>Sojida</p>
                </div>
                <div className={o.phone_number_zakaz}>
                  <p>+7 (902) 663-33-71</p>
                </div>
              </div>
              <div className={o.get_another_person_zakaz}>
                <input
                  type="checkbox"
                  id="checkbox-zakaz"
                  onChange={Openanotherperson}
                />
                <h4>Другой получатель</h4>
              </div>
              <div className={o.gets_person2_zakaz}>
                <div className={o.name_person_zakaz}>
                  <input type="text" name="" id="" placeholder="Имя" />
                </div>
                <div className={o.phone_number_zakaz}>
                  <input type="text" name="" id="" placeholder="Телефон" />
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
              <div className={o.gets_person3_zakaz}>
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
                    onClick={Openzakaz}
                    name=""
                    id="radio-zakaz"
                    className={o.radio_dostavka_zakaz2} />
                  <h3>Самовызов</h3>
                </div>
                <p>Тюмень, Тульская улица, 4</p>
              </div>
              <div className={o.inp_checkbox_and_text_zakaz} id="inp_checkbox_and_text_zakaz">
                <div className={o.radio_inp_text_zaka}>
                  <input
                    type="radio"
                    onClick={Opendostavkazakaz}
                    name=""
                    id="radio-zakaz"
                    className={o.radio_dostavka_zakaz}
                  />
                  <h3>Доставка</h3>
                </div>
                <div className={o.big_dostavka_zakaz} id="big_dostavka_zakaz">
                  <div className={o.first_info_dostavka_zakaz}>
                    <div className={o.small_div_dostavka}>
                      <p>Тюмень</p>
                      <input type="text" placeholder="Улица" name="" id="" />
                    </div>
                    <div className={o.middle_dostavka_div}>
                      <div className={o.another_info_zakaz}>
                        <input type="text" placeholder="Дом" name="" id="" />
                        <input
                          type="text"
                          placeholder="Квартира офис"
                          name=""
                          id=""
                        />
                      </div>
                      <div className={o.another_info_zakaz}>
                        <input
                          type="text"
                          placeholder="Подъезд"
                          name=""
                          id=""
                        />
                        <input type="text" placeholder="Этаж" name="" id="" />
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
                    <input type="date" name="" id="" />
                    <select name="" id="">
                      <option value="">21:00 - 21:30</option>
                      <option value="">21:30 - 22:00</option>
                      <option value="">22:00 - 22:30</option>
                      <option value="">22:30 - 23:00</option>
                      <option value="">23:00 - 23:30</option>
                      <option value="">23:30 - 00:00</option>
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
                  name=""
                  id="radio-zakaz"
                  className={o.radio_oplata_money}
                />
                <h3>Напрямую изготовителю после подтверждения заказа</h3>
              </div>
              <div className={o.oplata_zakaza_way_card}>
                <input
                  onClick={nodropradio}
                  type="radio"
                  name=""
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

              <textarea className={o.texta} name=" " id="" cols="30" rows="10"></textarea>
              <div className={o.button_for_pay_goods}>
                <button>Оформить</button>
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
                src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/c43e52072ef279dc7f24086ca28f0ead9e9f01bc/c43e52072ef279dc7f24086ca28f0ead9e9f01bc-wc100.jpeg"
                alt=""
              />
            </div>
            <div className={o.her_name_zakaz}>
              <a href="#">
                <h4>Анастасия Ковалева</h4>
              </a>
              <p>Домашний повар</p>
            </div>
          </div>
          <div className={o.count_of_zakaz}>
            <h4>Состав заказа:</h4>
            <p>
              <MdEdit /> Изменить
            </p>
          </div>
          <div className={o.how_it_cook_zakaz}>
            <p>Котлеты Домашние</p><br />
            <span>1 порция • 479 ₽</span>
          </div>
          <div className={o.overall_price_zakaz}>
            <h2>итого: 479 ₽</h2>
          </div>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  );
}
