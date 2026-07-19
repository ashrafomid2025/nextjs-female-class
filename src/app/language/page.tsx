        
     import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div className='w-full h-screen flex justify-center items-center gap-4 flex-col text-4xl text-blue-950'>
      <Link href="language/1?lang=english">This is the first Post in English</Link>
      <Link href="language/1?lang=french">This is the first Post in French</Link>
      <Link href="language/1?lang=turkish">This is the first Post in Turkish</Link>
      <Link href="language/2?lang=english">This is the first Post in English</Link>
      <Link href="language/2?lang=french">This is the first Post in French</Link>
      <Link href="language/2?lang=turkish">This is the first Post in Turkish</Link>
  
    </div>

  )
}

export default Page