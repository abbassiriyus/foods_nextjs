import React, { useEffect } from 'react'
import s from '../styles/Chat.module.css'
import { TbSend } from "react-icons/tb";
import { useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import url from "./host/config"
const socket = io.connect(url());
export default function chat() {
const [room, setRoom] = useState("");
// Messages States
const [message, setMessage] = useState([]);
const [profilimg, setProfilImg] = useState('');
const [myProfilimg, setMyProfilImg] = useState('');
var [chat, setChat] = useState([])
const joinRoom = (key, id, image) => {
setProfilImg(image)
var a = document.querySelectorAll('#chat1')
for (let i = 0; i < a.length; i++) {
if (key == i) {
a[i].style = "background:#06c160;color:white"
} else {
a[i].style = "background:white;color:black"
}

}

setRoom(id)
socket.emit("join_room", id);
axios.get(`${url()}/api/messages/${id}`).then(res => {
for (let i = 0; i < res.data.length; i++) {
res.data[i].date=formatDate(res.data[i].time_create)
}
setMessage(res.data)
setTimeout(() => {
var s=document.querySelector('#chat_space')
s.scrollTo({
top: document.documentElement.scrollHeight*99999,
behavior: 'smooth'
});
 }, 1000);
})
};
function formatDate(dateTime) {
const options = {
year: 'numeric',
month: 'long',
day: 'numeric',
hour: 'numeric',
minute: 'numeric',
// timeZone: 'UTC',
timeZone: 'Asia/Tashkent',
};

const formattedDate = new Date(dateTime).toLocaleString('ru-RU', options);
return formattedDate;
}
const sendMessage = () => {
var chat1 = (JSON.parse(localStorage.getItem("user")))
var message = document.querySelector("#chatsend_inp").value
if(message!=''){
 socket.emit("send_message", {
message,
room,
chat: chat1[0].id
});
document.querySelector("#chatsend_inp").value = ""
}
 
};

function getChat() {
var chat = (JSON.parse(localStorage.getItem("user")))
setMyProfilImg(chat[0].image)
axios.get(`${url()}/api/room/${chat[0].id}`).then(res => {
for (let i = 0; i < res.data.length; i++) {
if(res.data[i].user){
res.data[i].date=formatDate(res.data[i].user.online)
 }
}
setChat(res.data.filter(item=>item.user))
}).catch(err => {
})
}
useEffect(() => {
getChat()
}, [])
useEffect(() => {
var chat = (JSON.parse(localStorage.getItem("user")))
socket.on("receive_message", (data) => {
// setMessageReceived(data.message);
for (let i = 0; i < data.length; i++) {
data[i].date=formatDate(data[i].time_create)
 }
setMessage(data)
// // if(data[data.length].user_id!==chat[0].id){
// const audio = new Audio('/path/to/music.mp3'); // Müzik dosyasının yolunu buraya yazın
// audio.play();
// // }
 setTimeout(() => {
var s=document.querySelector('#chat_space')
s.scrollTo({
top: document.documentElement.scrollHeight*99999,
behavior: 'smooth'
});
 }, 1000);
// window.location.href=''
});
}, []);

return (
<div>
{(chat.length != 0)  ? (<>
<div className={s.chatting}>
<div className={s.anna_chat}>
{chat.map((item, key) => {
if (item.user) {
return <><div onClick={() => { joinRoom(key, item.id, item.user.image) }} className={s.big}>
<div id='chat1' className={s.chatting1}>
<img style={{ width: '50px', height: '50px' }} src={item.user.image} alt="img" />
<div className={s.img_text}>
<h4>{item.user.name} {item.user.lastname} {item.user.username} </h4>
<p>{item.date}</p>
<p>{item.address}</p>
</div>
</div>
</div>
</>
}
})}

</div>

<div className={s.chatting2}>
<div id='chat_space'className={s.chat_space}>
{message.map(item => {
var d = JSON.parse(localStorage.getItem('user'))
if (item.user_id === d[0].id) {
return <div style={{ margin: 'auto', marginRight: "20px", marginTop: '20px' }} className={s.chat_one}><p id='chat_p' style={{ backgroundColor: '#06c16093' }} >{item.message}
<br /><br />
<span>{item.date}</span>
</p> <img src={myProfilimg} alt="" /></div>
} else {
return <div style={{ marginleft: "20px", marginTop: '20px' }} className={s.chat_one}><img src={profilimg} alt="" /><p id='chat_p' >{item.message}<br /><br />
<span>{item.date}</span></p>
</div>
}
})}

</div>
<div className={s.chat_inp}>
<input id='chatsend_inp' placeholder='Введите ваше сообщение' type="text" />
<button className={s.send_btn_dn} id='send_btn_dn' onClick={() => sendMessage()}>Отправить</button> <span id='send_icon_dn' onClick={() => sendMessage()}>
<TbSend style={{ fontSize: '30px', color: '#06c160' }} /></span>
</div>
</div>
</div>
</>) : (<></>)}

</div>
)
}
