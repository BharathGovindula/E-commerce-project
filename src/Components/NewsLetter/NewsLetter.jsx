import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get EXclusive Offers On YOur Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder="Enter your email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
