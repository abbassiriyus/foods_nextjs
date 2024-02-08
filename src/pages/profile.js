import React from 'react'
import s from "../styles/profile.module.css"
export default function profil() {
  return (
    <div>
      <div className={s.line}>
        <div className={s.line01}>
          <a href="#">Профиль</a>
        </div>
        <div className={s.line1}>
          <a href="#">Чаты</a>
        </div>
        <div className={s.line1}>
          <a href="#">Мои блюди</a>
        </div>
        <div className={s.line2}>
          <a href="#">Полезные материалы</a>
        </div>
      </div>

      <div className={s.reg}>
        <div className={s.reg1}>
          <div className={s.reg1_1}>
            <img
              src="https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg"
              alt="img"
            />
            <br />
            <span>data registratsi</span> <span>08 fevralya 2024</span>
            <div className={s.reg1_name}>
              <h2>Xadicha</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
