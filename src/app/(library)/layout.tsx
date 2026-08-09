import React from 'react'
import BookNav from '../Components/BookNav'

function libraryLayout( {children}: {children: React.ReactNode}) {
  return (
    <div className='bg-stone-500'>
      <BookNav/>
      {children}
    </div>
  )
}

export default libraryLayout