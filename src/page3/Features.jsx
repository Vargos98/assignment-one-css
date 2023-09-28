import React from 'react'
import './features.css'
import { BiLock } from 'react-icons/bi'
import background from './background.png';
const Features = () => {
    return (
        <div className='box-3'>
            <img src={background} className="image-bg" alt="" />

            <div className='inner-box'>
            <p className='title'><BiLock/> SUBSCRIBE TO ANY PLAN</p>
            <h1 className='Heading'> Get more features in Google Photos</h1>
            <p className='para'>
                Bring your favorite moments to lofe with more Google Photos
                editing tools for Android and IOS, including Magic Eraser.
                Subject to eligibilty.

            </p>
            <div className='btn-box'>
            <button className='btn-features'>View details</button>
            </div>
            
            </div>
            
        </div>
    )
}

export default Features