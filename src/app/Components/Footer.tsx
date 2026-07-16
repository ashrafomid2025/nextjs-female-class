import { Clock, Info, Mail, Phone } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='w-full h-full text-center bg-blue-300'>
        <h1 className='text-white text-3xl font-bold pt-3'>This is our Information page</h1>
    <div className=' w-full h-60 p-10 flex justify-center items-center gap-4'>
      <Mail  size={40} className='text-gray-950 transition-all duration-300 hover: translate-y-1 '/>
      <Phone size={40} className='text-gray-950 transition-all duration-300 hover: translate-y-1 '/>
      <Clock size={40} className='text-gray-950 transition-all duration-300 hover: translate-y-1 '/>
      <Info  size={40} className='text-gray-950 transition-all duration-300 hover: translate-y-1 '/>
    </div>

    </div>
  )
}

export default Footer