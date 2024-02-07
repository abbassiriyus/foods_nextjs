import React, { useEffect } from 'react'
import s from "../styles/ForCooks.module.css"
import first_img from "../images/rocket.png"
import first_img2 from "../images/logo.svg"
import VanillaTilt from 'vanilla-tilt';
import Card from "./card.js"
import Image from 'next/image'
export default function forCooks() {

    return (
  
<div style={{display:"flex",justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'}}>
<Card/>
<Card/>
<Card/>
<Card/>

    </div>
  )
}
