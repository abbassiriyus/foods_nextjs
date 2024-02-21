import React, { useEffect } from 'react'
import s from '../styles/Chat.module.css'
import { TbSend } from "react-icons/tb";
import {  useState } from 'react';
import io from 'socket.io-client';
export default function chat() {
    
    function send(){
        var a=document.querySelector('#chatsend_inp').value
        document.querySelector('#chat_space').innerHTML+=`<p>${a}</p>`
        document.querySelector('#chatsend_inp').value=''
    }
    const [socket, setSocket] = useState(null);

    useEffect(() => {
      const newSocket = io('http://localhost:4003'); // Server manzili va porti
      setSocket(newSocket);
      return () => {
        newSocket.close();
      };
    }, []);
  return (
    <div>
        <div className={s.chatting}>
      <div className={s.anna_chat}>
      <div className={s.chatting_media}>
            <div className={s.chatting_media_df}>
            <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="img" />
                <h3><a href="#">Анна Казарцева</a></h3>
            </div>
        </div>
            <div className={s.big}>
<div  id='chat1' onClick={()=>{document.querySelector('#chat1').style="background:#06c160;color:white"}}  className={s.chatting1}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="img" />
                <div className={s.img_text}>
                    <h4>Анна Казарцева</h4>
                    <p>12 февраля 2024 в 17:59</p>
                    <p>Тюмень, ул.А.Митинского 3</p>
                    <p>Тест?</p>
                </div>
            </div>
            </div>
            <div className={s.chatting_media}>
            <div className={s.chatting_media_df}>
            <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="img" />
                <h3><a href="#">Анна Казарцева</a></h3>
            </div>
        </div>
            <div className={s.big}>
<div id='chat1' onClick={()=>{document.querySelector('#chat1').style="background:#06c160;color:white"}} className={s.chatting1}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="img" />
                <div className={s.img_text}>
                    <h4>Анна Казарцева</h4>
                    <p>12 февраля 2024 в 17:59</p>
                    <p>Тюмень, ул.А.Митинского 3</p>
                    <p>Тест?</p>
                </div>
            </div>
            </div>
            <div className={s.chatting_media}>
            <div className={s.chatting_media_df}>
            <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="img" />
                <h3><a href="#">Анна Казарцева</a></h3>
            </div>
        </div>
            <div className={s.big}>
<div  id='chat1' onClick={()=>{document.querySelector('#chat1').style="background:#06c160;color:white"}} className={s.chatting1}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="img" />
                <div className={s.img_text}>
                    <h4>Анна Казарцева</h4>
                    <p>12 февраля 2024 в 17:59</p>
                    <p>Тюмень, ул.А.Митинского 3</p>
                    <p>Тест?</p>
                </div>
            </div>
            </div>
            <div className={s.chatting_media}>
            <div className={s.chatting_media_df}>
            <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="img" />
                <h3><a href="#">Анна Казарцева</a></h3>
            </div>
        </div>
            <div className={s.big}>
<div  id='chat1' onClick={()=>{document.querySelector('#chat1').style="background:#06c160;color:white"}} className={s.chatting1}>
                <img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/3f90752ef464162ca8d883022a73c13d03a3c077/3f90752ef464162ca8d883022a73c13d03a3c077-wc200.jpeg" alt="img" />
                <div className={s.img_text}>
                    <h4>Анна Казарцева</h4>
                    <p>12 февраля 2024 в 17:59</p>
                    <p>Тюмень, ул.А.Митинского 3</p>
                    <p>Тест?</p>
                </div>
            </div>
            </div>
      </div>
            
            <div className={s.chatting2}>
                <div id='chat_space' className={s.chat_space}>
            <p id='chat_p'></p>

                </div>
                <div className={s.chat_inp}>
                    <input id='chatsend_inp' placeholder='Введите ваше сообщение' type="text" />
                    <button className={s.send_btn_dn} id='send_btn_dn' onClick={()=> send()}>Отправить</button> <span id='send_icon_dn'  onClick={()=> send()}><TbSend style={{fontSize:'30px',color:'#06c160'}} /></span>
                </div>
            </div>
        </div>
    </div>
  )
}
