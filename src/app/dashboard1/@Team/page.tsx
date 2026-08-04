import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='h-40 text-center'>
        <h1 className='text-gray-700 text-2xl '>This is the team work page</h1>
        <Link className='text-blue-900 underline' href="/dashboard1/Active">
        Click here 
        </Link>
    </div>
  )
}

export default page