"use client"
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation';
import React from 'react'
   
   function loginbtn() {
    function handleClick(){
        console.log("You clicked this page");
        redirect("/dashboard")
    }
     return (
     <div className='w-full flex  justify-center items-center gap-2 p-5'>
     <Button onClick={handleClick}>Click</Button>
     </div>
     )
   }
   
   export default loginbtn