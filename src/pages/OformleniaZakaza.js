import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import "./oformlenia_zakaz.css";

export default function Oformlenia_zakaz() {
  const Openanotherperson = () => {
    document.querySelector(".gets-person2-zakaz").style = "display:flex";
  };
  const Openanotherperson2 = () => {
    document.querySelector(".gets-person3-zakaz").style = "display:block";
  };
  const Opendostavkazakaz = () => {
    document.querySelector(".big-dostavka-zakaz").style = "display:block";
    document.querySelector(".inp-checkbox-and-text-zakaz p").style =
      "display:none";
    document.querySelector(".radio-dostavka-zakaz").style =
      "accent-color: #06c160; ";
    document.querySelector(".radio-dostavka-zakaz2").style =
      "accent-color: #fff; ";
  };
  const Openzakaz = () => {
    document.querySelector(".big-dostavka-zakaz").style = "display:none";
    document.querySelector(".inp-checkbox-and-text-zakaz p").style =
      "display:block";
    document.querySelector(".radio-dostavka-zakaz").style =
      "accent-color: #fff; ";
    document.querySelector(".radio-dostavka-zakaz2").style =
      "accent-color: #06c160; ";
  };

  const nodropradio = () => {
    document.querySelector(".radio-oplata-card").style =
      "accent-color: #fff; border: 1px solid #909090a2; ";
  };
  return (
    <div className="App-offormlenia-zakaz">
      <div className="where-Oformlenia-zakaz">
        <a href="#">
          Главная
          <span>
            <IoIosArrowForward />
          </span>
        </a>
        <p>Корзина</p>
      </div>
      <div className="My-order-oformlenia">
        <h2>ОФОРМИТЬ ЗАКАЗ</h2>
      </div>

      <div className="big-oformlinia-zaka">
        <div className="first-oformlenia-zakaz">
          <div className="count-what-do-oformlenia-zakaz">
            <div className="count-offermlenia-zakaz">
              <h3>01</h3>
            </div>
            <div className="text-oformlenia-zakaz">
              <div className="df-in-which-stage-zakaz">
                <div className="count-offermlenia-zakaz2">
                  <h3>01</h3>
                </div>
                <h2>ПОЛУЧАТЕЛЬ</h2>
              </div>

              <div className="gets-person-zakaz">
                <div className="name-person-zakaz">
                  <p>Sojida</p>
                </div>
                <div className="phone-number-zakaz">
                  <p>+7 (902) 663-33-71</p>
                </div>
              </div>
              <div className="get-another-person-zakaz">
                <input
                  type="checkbox"
                  id="checkbox-zakaz"
                  onChange={Openanotherperson}
                />
                <h4>Другой получатель</h4>
              </div>
              <div className="gets-person2-zakaz">
                <div className="name-person-zakaz">
                  <input type="text" name="" id="" placeholder="Имя" />
                </div>
                <div className="phone-number-zakaz">
                  <input type="text" name="" id="" placeholder="Телефон" />
                </div>
              </div>
              <div className="get-another-person-zakaz2">
                <input
                  type="checkbox"
                  id="checkbox-zakaz"
                  onChange={Openanotherperson2}
                />
                <h4>Другой получатель</h4>
              </div>
              <div className="gets-person3-zakaz">
                <div className="name-person-zakaz">
                  <input type="text" name="" id="" placeholder="Имя" />
                </div>
                <div className="phone-number-zakaz">
                  <input type="text" name="" id="" placeholder="Телефон" />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-for-dostavka-or-zakaz" />
          <div className="count-what-do-oformlenia-zakaz">
            <div className="count-offermlenia-zakaz">
              <h3>02</h3>
            </div>
            <div className="detals-of-the-zakaz">
              <div className="df-in-which-stage-zakaz">
                <div className="count-offermlenia-zakaz2">
                  <h3>02</h3>
                </div>
                <h2>ДЕТАЛИ ЗАКАЗА</h2>
              </div>

              <div className="inp-checkbox-and-text-zakaz">
                <div className="radio-inp-text-zakaz">
                  <input
                    type="radio"
                    onClick={Openzakaz}
                    name=""
                    id="radio-zakaz"
                    className="radio-dostavka-zakaz2"
                  />
                  <h3>Самовызов</h3>
                </div>
                <p>Тюмень, Тульская улица, 4</p>
              </div>
              <div className="inp-checkbox-and-text-zakaz">
                <div className="radio-inp-text-zakaz">
                  <input
                    type="radio"
                    onClick={Opendostavkazakaz}
                    name=""
                    id="radio-zakaz"
                    className="radio-dostavka-zakaz"
                  />
                  <h3>Доставка</h3>
                </div>
                <div className="big-dostavka-zakaz">
                  <div className="first-info-dostavka-zakaz">
                    <div className="small-div-dostavka">
                      <p>Тюмень</p>
                      <input type="text" placeholder="Улица" name="" id="" />
                    </div>
                    <div className="middle-dostavka-div">
                      <div className="another-info-zakaz">
                        <input type="text" placeholder="Дом" name="" id="" />
                        <input
                          type="text"
                          placeholder="Квартира офис"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="another-info-zakaz">
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
                <div className="data-zakaz-time">
                  <h3>Желаемая дата и время</h3>
                  <div className="inp-time-data-dostavka">
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
          <hr className="hr-for-dostavka-or-zakaz" />
          <div className="count-what-do-oformlenia-zakaz">
            <div className="count-offermlenia-zakaz">
              <h3>03</h3>
            </div>
            <div className="detals-of-the-zakaz">
              <div className="df-in-which-stage-zakaz">
                <div className="count-offermlenia-zakaz2">
                  <h3>03</h3>
                </div>
                <h2>ОПЛАТА</h2>
              </div>

              <div className="oplata-zakaza-way-money">
                <input
                  type="radio"
                  name=""
                  id="radio-zakaz"
                  className="radio-oplata-money"
                />
                <h3>Напрямую изготовителю после подтверждения заказа</h3>
              </div>
              <div className="oplata-zakaza-way-card">
                <input
                  onClick={nodropradio}
                  type="radio"
                  name=""
                  id="radio-zakaz"
                  className="radio-oplata-card"
                />
                <div className="text-about-bank-card">
                  <h3>Банковской картой на сайте (скоро)</h3>
                </div>
              </div>
              <div className="importand-think-oplata">
                <div className="first-think-oplata">!</div>
                <div className="second-think-oplata">
                  <p>Онлайн-оплата находится в разработке.</p>
                  <p id="onlain-oplata-zakaz">
                    А пока можно оплатить изготовителю напрямую удобным
                    способом.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-for-dostavka-or-zakaz" />
          <div className="count-what-do-oformlenia-zakaz">
            <div className="count-offermlenia-zakaz">
              <h3>04</h3>
            </div>
            <div className="comment-for-zakaz">
              <div className="df-in-which-stage-zakaz">
                <div className="count-offermlenia-zakaz2">
                  <h3>04</h3>
                </div>
                <h2>
                  КОММЕНТАРИЙ <span>К ЗАКАЗУ</span>
                </h2>
              </div>

              <textarea name=" " id="" cols="30" rows="10"></textarea>
              <div className="button-for-pay-goods">
                <button>Оформить</button>
              </div>
            </div>
          </div>
        </div>
        <div className="second-oformlenia-zakaz">
          <h4>Для вас приготовит:</h4>
          <div className="info-customer-zakaz">
            <div className="her-img-zakaz">
              <img
                src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/c43e52072ef279dc7f24086ca28f0ead9e9f01bc/c43e52072ef279dc7f24086ca28f0ead9e9f01bc-wc100.jpeg"
                alt=""
              />
            </div>
            <div className="her-name-zakaz">
              <a href="#">
                <h4>Анастасия Ковалева</h4>
              </a>
              <p>Домашний повар</p>
            </div>
          </div>
          <div className="count-of-zakaz">
            <h4>Состав заказа:</h4>
            <p>
              <MdEdit /> Изменить
            </p>
          </div>
          <div className="how-it-cook-zakaz">
            <p>Котлеты Домашние</p>
            <span>1 порция • 479 ₽</span>
          </div>
          <div className="overall-price-zakaz">
            <h2>итого: 479 ₽</h2>
          </div>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}
