import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import RateLimitedUI from '../components/RateLimitedUI'
import { toast } from 'react-hot-toast'
import api from '../lib/axios'
import NotesNotFound from '../components/NotesNotFound'
import NoteCard from '../components/NoteCard'

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get('/notes')
        console.log('API Response:', res.data)
        console.log('Is Array?', Array.isArray(res.data))
        
        // Handle different response formats
        let notesData = res.data
        
        // If response is wrapped in an object, extract the array
        if (notesData && typeof notesData === 'object' && !Array.isArray(notesData)) {
          notesData = notesData.notes || notesData.data || []
        }
        
        // Ensure it's an array before setting state
        if (Array.isArray(notesData)) {
          setNotes(notesData)
        } else {
          console.error('Expected array but got:', typeof notesData, notesData)
          setNotes([])
          toast.error("Invalid data format received")
        }
        
        setIsRateLimited(false)
      } catch (error) {
        console.error('Error fetching notes:', error)
        if (error.response?.status === 429) {
          setIsRateLimited(true) 
        } else {
          toast.error("Failed to load notes")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchNotes() 
  }, []) 

  return (
    <div className='min-h-screen'>
      <NavBar/>
      {isRateLimited && <RateLimitedUI/>}
      <div className="max-w-6xl mx-auto p-4 mt-6">
        {loading && <div className='text-primary py-10'>Loading notes...</div>}
        {notes.length === 0 && !loading && !isRateLimited && <NotesNotFound/>}

        {!isRateLimited && Array.isArray(notes) && notes.length > 0 && 
        (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} setNotes={setNotes} />
          ))}
        </div>)}
      </div>
    </div>
  )
}

export default HomePage