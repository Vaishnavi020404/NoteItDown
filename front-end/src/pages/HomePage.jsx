import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import RateLimitedUI from '../components/RateLimitedUI'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const HomePage = () => {
  const [isRateLimited,setIsRateLimited] =useState(false)
  const [notes,setNotes]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/notes')
        console.log(res.data)
        setNotes(res.data)
        setIsRateLimited(false)
      }catch (error) {
        console.error('Error fetching notes:', error)
        console.log(error)
        if(error.response?.status === 429){
          setIsRateLimited(true) 
      }else{
        toast.error("Failed to fetch notes")
      }
    }finally{
        setLoading(false)
      }

      fetchNotes()
  }},[])

  return (
    <div className='min-h-screen'>
      <NavBar/>
      {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage