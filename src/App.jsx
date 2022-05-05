import React, { useState,useEffect } from 'react'

import images from './images/patern.svg'
import image from './images/icon-dice.svg'


// Component
const App = () => {

const url = 'https://api.adviceslip.com/advice';
const [ tip,setAdvice ] = useState([]);

const getAdvice = async ()=>{
    const response = await fetch(url);
    const tip = await response.json()
    setAdvice([tip]) 
}

useEffect(()=>{
getAdvice()
},[])

const newAdvice = ()=>{
    getAdvice()
}

    return (
    <div className='advice-box'>
        <article className='box'>
            {tip.map((item)=>{
                const {slip} = item;
                const {id,advice} = slip

            return <div key={id}>
                <p className='adviceNumber'>ADVICE #{id}</p>
                <p key={id}>{advice}</p>
            </div>
            })}
            <img className='box-img' src={images} alt="AdviceBox image" />
            <button className='btn' onClick={newAdvice}>
                <img className='dice-img' src={image} alt="dice buttom" />
            </button>
        </article>
    </div>
    )
}

export default App