import React from 'react'
import Nav from '../Components/Nav'
import { Input } from '@/components/ui/input'
import Footer from '../Components/Footer'
import Loginbtn from '@/app/Components/Loginbtn'

function layout({children}:{children: React.ReactNode}) {
  return (
    <div>
     <Nav/>
     <Input placeholder='Write Something in here'></Input>
     {children}
     <Loginbtn/>
     <Footer/>
    </div>
  )
}

export default layout