




import React from 'react'
import { FaRegFilePdf } from "react-icons/fa6";
import s from "../styles/useful.module.css"
export default function useful() {
  return (
    <div>
<div className={s.documents_big}> 
<h1>Полезные материалы</h1>
<div className={s.documents}>
   
    <div className={s.document}>
    <div className={s.pdf}>
    <FaRegFilePdf className={s.doc} />
    </div>
    <div className={s.pdf_text}>
    <p>Как фотографировать блюда.pdf</p>
    </div>
    </div>

    <div className={s.document}>
    <div className={s.pdf}>
    <FaRegFilePdf className={s.doc} />
    </div>
    <div className={s.pdf_text}>
    <p>Как фотографировать кухню.pdf</p>
    </div>
    </div>
    <div className={s.document}>
    <div className={s.pdf}>
    <FaRegFilePdf className={s.doc} />
    </div>
    <div className={s.pdf_text}>
    <p>Как рассчитать КБЖУ.pdf</p>
    </div>
    </div>
    <div className={s.document}>
    <div className={s.pdf}>
    <FaRegFilePdf className={s.doc} />
    </div>
    <div className={s.pdf_text}>
    <p>Как скопировать ссылку на витрину.pdf</p>
    </div>
    </div>

    <div className={s.document}>
    <div className={s.pdf}>
    <FaRegFilePdf className={s.doc} />
    </div>
    <div className={s.pdf_text}>
    <p>Как увеличить продажи на сервисе.pdf</p>
    </div>
    </div>
    <div className={s.document}>
    <div className={s.pdf}>
    <FaRegFilePdf className={s.doc} />
    </div>
    <div className={s.pdf_text}>
    <p>Прием заказа и оформление доставки.pdf</p>
    </div>
    </div>
    <div className={s.document}>
    <div className={s.pdf}>
    <FaRegFilePdf className={s.doc} />
    </div>
    <div className={s.pdf_text}>
    <p>Рекомендации по составлению меню и ценообразованию.pdf</p>
    </div>
    </div>
    <div className={s.document}>
    <div className={s.pdf}>
    <FaRegFilePdf className={s.doc} />
    </div>
    <div className={s.pdf_text}>
    <p>Услуга Подписка на доставку.pdf</p>
    </div>
    </div>

    <div className={s.document}>
    <div className={s.pdf}>
    <FaRegFilePdf className={s.doc} />
    </div>
    <div className={s.pdf_text}>
    <p>Правила сотрудничества с сервисом.pdf</p>
    </div>
    </div>
    <div className={s.document}>
    <div className={s.pdf}>
    <FaRegFilePdf className={s.doc} />
    </div>
    <div className={s.pdf_text}>
    <p>Как устанавливать цены на блюда.pdf</p>
    </div>
    </div>
</div>
</div>
    </div>
  )
}






