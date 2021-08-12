import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../src/constants/index'
import "./ApodDisplay.css"


export default function PastApod(props) {
   const { date } = props
   const[pastApod, setPastApod] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
        .then(res => {
            console.log('data', res.data)
            setPastApod(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [date])
   
    return (
    

       <div className='apod-container'>
           <div className='description-container'>
               <h3>{pastApod.date}</h3>
               <h2>{pastApod.title}</h2>
               <p className='description'>{pastApod.explanation}</p>
               <p>{pastApod.copyright && `Copyright: ${pastApod.copyright}`}</p>
            </div>
            <div className='image-container'>
                <img src={pastApod.url} alt='Apod'></img>
            </div>    
       </div>
   ) 
}