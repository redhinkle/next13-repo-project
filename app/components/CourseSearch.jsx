'use client'
import { useState } from 'react'

const CourseSearch = () => {
    const [query, setQuery] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(query)
    }

  return (
      <form className='search-form' onSubmit={handleSubmit}>
          <input type="text" className='search-input' placeholder='Search Courses...' value={query} onChange={(e) => setQuery(e.target.value)} />
          <button className="search-button" type='submit'>Submit</button>
    </form>
  )
}

export default CourseSearch