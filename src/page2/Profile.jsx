import React from 'react'
import './profile.css';
import pic from './pic.jpeg';
import cartoon from './cartoon.jpg';
const Profile = () => {
  return (
    <div>
        <div className='box-1'>
            <h3 className='heading-prof'>Your profiles</h3>
            <p>See how your different profiles appear in Google services</p>
            <div>
                <img src={pic} className='image'alt="logo" />
                <img src={cartoon} className='image' alt='logo'/>
            </div>

            <div className="under">
            </div>

            <a href="#" className='anchor'>See profiles</a>

        </div>
    </div>
  )
}

export default Profile