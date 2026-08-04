import Link from 'next/link'
import React from 'react'

function page() {
  return ( 
    <div className='h-25 text-center'>
        <h1 className='text-gray-700  text-2xl '>This is our contact page</h1>
          <Link className='text-blue-600 underline' href="/dashbord1/link">visit from this page</Link>
    </div>
  )
}

export default page