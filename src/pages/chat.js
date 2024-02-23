import React, { useEffect } from 'react'
import s from '../styles/Chat.module.css'
import { TbSend } from "react-icons/tb";
import { useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import url from "./host/config"
const socket = io.connect("http://localhost:4003");
export default function chat() {

 

    const [room, setRoom] = useState("");

    // Messages States
    const [message, setMessage] = useState([]);
    const [messageReceived, setMessageReceived] = useState([]);
    var [chat, setChat] = useState([])
    const joinRoom = (key, id) => {
        var a = document.querySelectorAll('#chat1')
        for (let i = 0; i < a.length; i++) {
            if (key == i) {
                a[i].style = "background:#06c160;color:white"
            } else {
                a[i].style = "background:white;color:black"
            }

        }
      setRoom(id)
        socket.emit("join_room", id );

    };

    const sendMessage = () => {
        var message=document.querySelector("#chatsend_inp").value
        var chat = (JSON.parse(localStorage.getItem("user")))
        console.log(chat);
        socket.emit("send_message", { 
            message,
             room,
            chat:chat[0].id });
    };

    function getChat() {
        var chat = (JSON.parse(localStorage.getItem("user")))
       
        axios.get(`${url()}/api/room/${chat[0].id}`).then(res => {
            setChat(res.data)
        }).catch(err => {

        })
    }
    useEffect(() => {
        getChat()
    }, [])
    useEffect(() => {
        socket.on("receive_message", (data) => {
            // setMessageReceived(data.message);
            console.log(data);
        });
    }, [socket]);

    return (
        <div>
        {chat.length!=0?(  <>
            <div className={s.chatting}>
                <div className={s.anna_chat}>
                    {chat.map((item, key) => {
                        if (item.user) {
                            return <><div onClick={() => { joinRoom(key, item.id) }} className={s.big}>
                                <div id='chat1' className={s.chatting1}>
                                    <img style={{ width: '50px', height: '50px' }} src={item.user.image} alt="img" />
                                    <div className={s.img_text}>
                                        <h4>{item.user.name} {item.user.lastname} {item.user.username} </h4>
                                        <p>12 февраля 2024 в 17:59</p>
                                        <p>{item.address}</p>
                                    </div>
                                </div>
                            </div>
                            </>
                        }
                    })}


                </div>

                <div className={s.chatting2}>
                    <div id='chat_space' className={s.chat_space}>
                     {messageReceived.map(item=>{
                       <p id='chat_p'>{item.message}</p> 
                     })}   

                    </div>
                    <div className={s.chat_inp}>
                        <input id='chatsend_inp' placeholder='Введите ваше сообщение' type="text" />
                        <button className={s.send_btn_dn} id='send_btn_dn' onClick={() => sendMessage()}>Отправить</button> <span id='send_icon_dn' onClick={() => sendMessage()}>
                            <TbSend style={{ fontSize: '30px', color: '#06c160' }} /></span>
                    </div>
                </div>
            </div>
</>):(<></>)}  



        </div>
    )
}
