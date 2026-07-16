
import { Contact, HelpCircle, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex justify-between items-center gap-2 bg-blue-300'>
        <div className=''>
            <h1 className='text-blue-600 font-bold'>Natura Applacation</h1>
            <Image
            src="https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww"
            className='h-18 w-18 rounded-full border-2 border-b-blue-950 border-t-blue-950 border-l-white border-r-white'
            alt='Navbar'
            width={1000}
            height={1000}>

            </Image>
        </div>
        <div className='flex justify-between items-center gap-4'> 
         <Link href={"/Home"}>
        <Home size={40}/>
         </Link>
          <Link href={"/Contact"}>
        <Contact size={40}/>
         </Link>
          <Link href={"/About Us"}>
        <HelpCircle size={40}/>
         </Link>
        </div>
    </div>
  )
}

export default Navbar