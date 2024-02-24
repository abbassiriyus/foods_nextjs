import React, { useEffect, useState } from 'react'
import s from "../styles/Dishes.module.css"
import { FiPlus } from "react-icons/fi";
import { TbPaperclip } from "react-icons/tb";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import axios from 'axios';
import url from './host/config';
export default function dishes() {
    var [page, setPage] = useState(0)
    var [data, setData] = useState([])
    var [foods, setFoods] = useState([])

    var [oneFood, setOneFood] =useState({})


    function getData() {
        axios(`${url()}/api/foods`).then(res => {
            var local = JSON.parse(localStorage.getItem('user'))
            var data1 = res.data.filter(item => item.user_povar_id == local[0].id)
            setFoods(data1)
            axios(`${url()}/api/category`).then(res1 => {
                setData(res1.data)
            }).catch(err => {
            })
        }).catch(err => {
        })
    }

    function deleteData(id) {
        axios.delete(`${url()}/api/foods/${id}`).then(res => {
            console.log("delete succses");
            getData()
        }).catch(err => {
        })
    }
    function postData() {
        var data = new FormData()
        var dat = JSON.parse(localStorage.getItem("user"))
        data.append('user_povar_id', dat[0].id)
        data.append("category_id", document.querySelector("#category_id").value)
        data.append("foods_name", document.querySelector("#foods_name").value)
        data.append("portion", document.querySelector("#portion").value)
        data.append("dastafka_us", document.querySelector("#storage_condition").value)
        data.append("weight", document.querySelector("#weight").value)
        data.append("description", document.querySelector("#description").value)
        data.append("preparation_time", document.querySelector("#preparation_time").value)
        data.append("storage_condition", document.querySelector("#storage_condition").value)
        data.append("calorie", document.querySelector("#calorie").value)
        data.append("proteins", document.querySelector("#proteins").value)
        data.append("oils", document.querySelector("#oils").value)
        data.append("carbs", document.querySelector("#carbs").value)
        data.append("packages", document.querySelector("#packages").value)
        data.append("price", document.querySelector("#price").value)
        data.append("image", document.querySelector("#image").value)


        axios.post(`${url()}/api/foods`, data).then(res => {
            getData()
            setPage(0)
        }).catch(err => {

        })


    }

    function getkey(key) {
        console.log(key);
        var dat = [...advantages]
        if (dat[key].yes) {
            dat[key].yes = false
        } else {
            dat[key].yes = true

        }
        setAdvantages(dat)
    }

    var [advantages, setAdvantages] = useState([])
    function getAdvantages() {
        axios.get(`${url()}/api/advantages`).then(res => {
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].yes = false
            }
            setAdvantages(res.data)
        })
    }
    useEffect(() => {
        getData()
        getAdvantages()
    }, [])

    return (
        <div>
            <div className={s.dishes}>

                {page == 0 ? (
                    <div className={s.dicv}>
                        {foods.map((item, key) => {
                            return <div className={s.yangi_card}>
                                <div className={s.img_i}>
                                    <div className={s.udalitЬ}>
                                        <div onClick={() => { deleteData(item.id) }} className={s.vedro} >
                                            <FaTrash />
                                        </div>
                                    </div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className={s.c_soz}>
                                    <h1 className={s.c_h1}><FaPen className={s.ruchka} /> <p>Редактировать</p></h1>
                                    <h1 className={s.c_h2}>{item.foods_name}</h1>
                                    <p className={s.c_p1}>{item.price}</p>
                                    <p className={s.c_p2}>{item.weight}</p>
                                </div>
                            </div>
                        })}

                        <div onClick={() => { setPage(1) }} className={s.dishes_button} id='plus'>
                            <div className={s.circle}><FiPlus /></div>
                            <h5>Добавить блюдо</h5>
                        </div>
                    </div>
                ) : (

                    <div className={s.d_i} id='inputlar'>
                        <h1>РЕДАКТИРОВАТЬ БЛЮДО</h1>

                        <div className={s.dishes_inp}>


                            <div className={s.inputlar1}>
                                <div className={s.input_s_dobavkoy}>
                                    <div className={s.in}>

                                        <select className={s.select} name="" id="category_id" placeholder='Категория' >

                                            {data.map((item, key) => {
                                                return <option className={s.option} value={item.id}>
                                                    <p>{item.title}</p>
                                                </option>
                                            })}

                                        </select>
                                    </div>
                                </div>
                                <input placeholder='Название блюда' defaultValue={oneFood.foods_name} id='foods_name' className={s.inputlar_11} type="text" /><br />
                                <textarea placeholder='Описание и состав' defaultValue={oneFood.description} id='description' className={s.inputlar_2} type="text" /><br />
                                <input placeholder='Количество порций' defaultValue={oneFood.portion} id='portion' className={s.inputlar_1} type="text" /><br />
                                <input placeholder='Вес (примерно:300г)' defaultValue={oneFood.weight}  id='weight' className={s.inputlar_1} type="text" /><br />
                                <input placeholder='Время приготовления' defaultValue={oneFood.preparation_time}  id='preparation_time' className={s.inputlar_1} type="text" /><br />
                                <textarea placeholder='Условия хранения' defaultValue={oneFood.storage_condition}  id='storage_condition' className={s.inputlar_2} type="text" /><br />
                            </div>
                            <div className={s.liniya}></div>
                            <div className={s.inputlar2}>
                                <input placeholder='Калорийность' defaultValue={oneFood.calorie}  id='calorie' className={s.inputlar_1} type="text" /><br />
                                <input placeholder='Белки, г' defaultValue={oneFood.proteins}  id='proteins' className={s.inputlar_1} type="text" /><br />
                                <input placeholder='Жиры, г' defaultValue={oneFood.oils}  id='oils' className={s.inputlar_1} type="text" /><br />
                                <input placeholder='Углеводы, г' defaultValue={oneFood.carbs}  id="carbs" className={s.inputlar_1} type="text" /><br />
                                <div className={s.input_a}>
                                    <a href="#" className={s.inp_a}>Как рассчитать калорийность и БЖУ?</a><br />
                                </div>
                                <input placeholder='Упаковка' defaultValue={oneFood.packages}  id='packages' className={s.inputlar_1} type="text" /><br />
                                <input placeholder='Цена, р'  defaultValue={oneFood.price}   id='price' className={s.inputlar_1} type="text" /><br />
                                <div className={s.liniya2}></div>
                                <div className={s.inp2_sozlari}>
                                    <div className={s.inp2_s_p1}>
                                        <p className={s.s_p1}>Вкусовые <br /> предпочтения:</p><br />
                                    </div>
                                    <div className={s.inp2_s_p3}>
                                        {advantages.map((item, key) => {
                                            return <p onClick={() => { getkey(key) }} style={item.yes ? { background: '#06c160' } : { background: 'white' }} className={s.inp2_s_p2}>{item.title}</p>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={s.inp_x}>
                            <div className={s.i_g} >
                                <input type="file" name="" id="image" />
                                <p><TbPaperclip /></p><a href="#">Рекомендуем форматы: jpeg, png, не более 10 файлов</a>
                            </div>
                            <div className={s.bb}>
                                <button className={s.b1} onClick={() => { postData() }} >Добавить</button>
                                <button className={s.b2} onClick={() => {setPage(0);setFoods([])}}>Назад</button>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
function getData() {
axios(`${url()}/api/foods`).then(res=>{
    var local=JSON.parse(localStorage.getItem('user'))
    var data1=res.data.filter(item=>item.user_povar_id==local[0].id)
    setFoods(data1)
axios(`${url()}/api/category`).then(res1=>{
    setData(res1.data)
    }).catch(err=>{
    })
}).catch(err=>{
})
}

function deleteData(id) {
    axios.delete(`${url()}/api/foods/${id}`).then(res=>{
    console.log("delete succses");
    getData()
    }).catch(err=>{
    })
}

useEffect(()=>{
getData()
},[])

return (
<div>
<div className={s.dishes}>

{page==0?(
<div className={s.dicv}>
    {foods.map((item,key)=>{
     return  <div className={s.yangi_card}>
<div className={s.img_i}>
<div className={s.udalitЬ}>
<div onClick={()=>{deleteData(item.id)}} className={s.vedro} >
<FaTrash  />
</div>
</div>
<img src={item.image} alt="" />
</div>
<div className={s.c_soz}>
<h1 className={s.c_h1}><FaPen className={s.ruchka} /> <p>Редактировать</p></h1>
<h1 className={s.c_h2}>{item.foods_name}</h1>
<p className={s.c_p1}>{item.price}</p>
<p className={s.c_p2}>{item.weight}</p>
</div>
</div> 
    })}

<div onClick={()=>{setPage(1)}} className={s.dishes_button} id='plus'>
<div className={s.circle}><FiPlus /></div>
<h5>Добавить блюдо</h5>
</div>
</div>
):(

<div className={s.d_i} id='inputlar'>
<h1>РЕДАКТИРОВАТЬ БЛЮДО</h1>

<div className={s.dishes_inp}>


<div className={s.inputlar1}>
<div className={s.input_s_dobavkoy}>
<div className={s.in}>
{/* <MdOutlineKeyboardArrowDown id='arrow_d' onClick={()=>{och()}} className={s.arrow_d} /> <MdOutlineKeyboardArrowUp id='arrow_u' className={s.arrow_u} onClick={()=>{yop()}} /><br /> */}

<select className={s.select} name="" id="" placeholder='Категория' >

{data.map((item,key)=>{
    return <option className={s.option} value={item.id}>
<p>{item.title}</p>
</option>
})}

</select>
</div>
</div>
<input placeholder='Название блюда' id='foods_name' className={s.inputlar_11} type="text" /><br />
<textarea placeholder='Описание и состав' id='description' className={s.inputlar_2} type="text" /><br />
<input placeholder='Количество порций' id='portion' className={s.inputlar_1} type="text" /><br />
<input placeholder='Вес (примерно:300г)' id='weight' className={s.inputlar_1} type="text" /><br />
<input placeholder='Время приготовления' id='preparation_time' className={s.inputlar_1} type="text" /><br />
<textarea placeholder='Условия хранения' id='storage_condition' className={s.inputlar_2} type="text" /><br />
</div>
<div className={s.liniya}></div>
<div className={s.inputlar2}>
<input placeholder='Калорийность' id='calorie' className={s.inputlar_1} type="text" /><br />
<input placeholder='Белки, г' id='proteins' className={s.inputlar_1} type="text" /><br />
<input placeholder='Жиры, г' id='oils' className={s.inputlar_1} type="text" /><br />
<input placeholder='Углеводы, г' id="carbs" className={s.inputlar_1} type="text" /><br />
<div className={s.input_a}>
<a href="#" className={s.inp_a}>Как рассчитать калорийность и БЖУ?</a><br />
</div>
<input placeholder='Упаковка' id='packages' className={s.inputlar_1} type="text" /><br />
<input placeholder='Цена, р' id='price' className={s.inputlar_1} type="text" /><br />
<div className={s.liniya2}></div>
<div className={s.inp2_sozlari}>
<div className={s.inp2_s_p1}>
<p className={s.s_p1}>Вкусовые <br /> предпочтения:</p><br />
</div>
<div className={s.inp2_s_p3}>
<p className={s.inp2_s_p12}>Вегитарианское</p>
<p className={s.inp2_s_p2}>Без сахара</p>
<p className={s.inp2_s_p2}>Без лактозы</p>
<p className={s.inp2_s_p2}>Без глютена</p>
<p className={s.inp2_s_p2}>Без орехов и бабов</p>
<p className={s.inp2_s_p2}>Острое</p>
</div>
</div>
</div>
</div>

<div className={s.inp_x}>
<div className={s.i_g} >
<input type="file" name="" id="image" />
<p><TbPaperclip /></p><a href="#">Рекомендуем форматы: jpeg, png, не более 10 файлов</a>
</div>
<div className={s.bb}>
<button className={s.b1}  >Добавить</button>
<button className={s.b2} onClick={()=>setPage(0)}>Назад</button>
</div>
</div>

</div>
)}
</div>
</div>
)
}
