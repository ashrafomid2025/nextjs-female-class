
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function BookNav() {
  return (
    <div className='w-full py-8 border-2 shadow-2xl rounded-2xl shadow-blue-100 fixed top-0 left-0 border-blue-300 bg-transparent backdrop-blur-lg flex justify-between px-8'>
     <h1 className='font-black text-3xl text-blue-900'>New Library</h1>
<Link href="/book">
<Button variant="outline">
    Books
</Button>
</Link>
          
    </div>
  )
}

export default BookNav