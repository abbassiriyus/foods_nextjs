import React from 'react'
import s from '../styles/chat.module.css'
export default function chat() {

    function send(){
        var a=document.querySelector('#chatsend_inp').value
        document.querySelector('#chat_space').innerHTML+=`<p>${a}</p>`
        document.querySelector('#chatsend_inp').value=''
    }
  return (
    <div>
        <div className={s.change_chat}>
            <div className={s.change}>
                <a href="#">Профиль</a>
            </div>
            <div className={s.change} style={{backgroundColor:'#06c160'}}>
                <a href="#" style={{color:'white'}}>Чаты</a>
            </div>
            <div className={s.change}>
                <a href="#">Мои блюда</a>
            </div>
            <div className={s.change2}>
                <a href="#">Полезные материалы</a>
            </div>
        </div>


        <div className={s.chatting}>
            <div className={s.big}>
<div className={s.chatting1}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="img" />
                <div className={s.img_text}>
                    <h4>Анна Казарцева</h4>
                    <p>12 февраля 2024 в 17:59</p>
                    <p>Тюмень, ул.А.Митинского 3</p>
                    <p>Тест?</p>
                </div>
            </div>
            </div>
            
            <div className={s.chatting2}>
                <div id='chat_space' className={s.chat_space}>
<p id='chat_p'>dhbcjd</p>

                </div>
                <div className={s.chat_inp}>
                    <input id='chatsend_inp' placeholder='Введите ваше сообщение' type="text" />
                    <button onClick={()=> send()}>Отправить</button>
                </div>
            </div>
        </div>
    </div>
  )
}
