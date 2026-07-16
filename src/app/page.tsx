import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='w-full h-screen flex justify-between items-center bg-blue-100'>
      <Image className='h-90 w-90 rounded-full border-2 border-white animate-[bounce_2s_infinite]' src= "https://images.unsplash.com/photo-1782139334420-8c73ac5e7d62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
      alt='Picture1'
      height={1000}
      width={1000}
      />
         <Image className='h-90 w-90 rounded-full border-4 border-b-white border-t-white animate-[bounce_3s_infinite]' src= "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww"
      alt='Picture2'
      height={1000}
      width={1000}
      />
         <Image className='h-90 w-90 rounded-full border-2 border-white animate-[bounce_4s_infinite]' src= "https://images.unsplash.com/photo-1771838026270-28fd7e3bef1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww"
      alt='Picture4'
      height={1000}
      width={1000}
      />

    </div>
  )
}

export default page