import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import RateLimitedUI from '../components/RateLimitedUI'

const HomePage = () => {
  const [isRateLimited,setIsRateLimited] =useState(true)
  return (
    <div className='min-h-screen'>
      <NavBar/>
      {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage