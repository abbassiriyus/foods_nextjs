import d from "../styles/zakazkorzinki.module.css"
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function App() {
return (
<div className={d.App_korzinka}>
<div className={d.where_korzinka}>
<a href="#">Главная<span><IoIosArrowForward /></span></a>
<p>Корзина</p>
</div>
<div className={d.My_goods}>
<h2>ВАШ ЗАКАЗ</h2>
</div>

<div className={d.korzinka_big_and_about_div}>
<div className={d.first_korzinka_div}>
<div className={d.small_first_korzinka_div}>
<p>Кондитер</p>
<h3>babecake.tmn</h3>
</div>
<div className={d.delete_first_korzinka_div}>
<RiDeleteBin5Line className={d.trash_delete_korzinka} />
</div>
</div>
<hr className={d.korzinka_bottom} />
<div className={d.second_korzinka_div}>
<div className={d.img_name_price_korzinka}>
<div className={d.korzinka_img}>
<img src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e66c63a20c4a2c336bab23752d311e184be565ae/e66c63a20c4a2c336bab23752d311e184be565ae-wc100.jpeg" alt=""/>
</div>
<div className={d.name_price_korzinka}>
<h3>бенто коты</h3>
<p>400 • 1 000 ₽</p>
</div>
</div>
<div className={d.overall_price_plus_minus_korzinka}>
<h3>1 000 ₽</h3>
<div className={d.minus_korzinka}>
<FaMinus />
</div>
<h2>1</h2>
<div className={d.plus_korzinka}>
<FaPlus />
</div>
<RiDeleteBin5Line className={d.trash_delete_korzinka} />
</div>
<div className={d.after_media_six_hundred}>
<div className={d.media_img_name_price_korzinka}>
<div className={d.media_img_name_price_korzinka_kotta}>
<div className={d.korzinka_img}>
<img
src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e66c63a20c4a2c336bab23752d311e184be565ae/e66c63a20c4a2c336bab23752d311e184be565ae-wc100.jpeg"
alt=""
/>
</div>
<div className={d.name_price_korzinka}>
<h3>бенто коты</h3>
<p>400 • 1 000 ₽</p>
</div>
</div>
<div className={d.media_img_name_price_korzinka_trash}>
<RiDeleteBin5Line className={d.trash_delete_korzinka} />
</div>
</div>
<div className={d.media_overall_price_plus_minus_korzinka}>
<div className={d.media_overall_price_plus_minus_korzinka_text}>
<h3>1 000 ₽</h3>
</div>
<div className={d.media_overall_price_plus_minus_korzinka_count}>
<div className={d.minus_korzinka}>
<FaMinus />
</div>
<h2>1</h2>
<div className={d.plus_korzinka}>
<FaPlus />
</div>
</div>
</div>
</div>
</div>
<hr className={d.korzinka_top} />
<div className={d.price_over_korzinka}>
<h3>ИТОГО: 1 000 ₽</h3>
<button>Оформить заказ</button>
</div>
</div>
</div>
);
}

export default App;