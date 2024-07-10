import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Siderbar = () => {
  const isMenuOpen= useSelector(store=>store.app.isMenuOpen)
  //early return 
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1  className='pt-5 font-bold'>You➤ </h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>
      <h1 className=' pt-5 font-bold'>Explore</h1>
      <ul>
        <li>music</li>
        <li>Gaming</li>
        <li>sports</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Siderbar
