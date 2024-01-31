import React from 'react'
import './Home.css'
import '../assets/images/location.png';
import location from '../assets/images/location.png'
const Home = () => {
  return (
    <div className='search'>
       <img src= {location} alt="Location Icon"  />
      <input
          type="text"
          id="searchInput"
          placeholder="Type your location"
          className='location'
        />
        <input
          type="text"
          id="searchInput1"
          placeholder="  Search for doctors"
          className='doctor'
        />
        <button className='book'>
            Book Consulation
        </button>
    </div>
  )
}

export default Home