"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
interface User{
  id: number,
  name: string,
  email: string,
}
async function page() {
       const [users, setUsers] = useState<User[]>([]);
       const[loading, setLoading] = useState(true)
       useEffect(()=>{
         async function getPsots(){
   const res= await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await res.json();
   setUsers(data);
   setLoading(false);
 };
 getPsots()
 }
 ,[]);
 if(loading){
  return <h1 className='text-2xl text-blue-500'>Loading...</h1>
 }
    
  return (
<div className='w-full flex justify-center items-center gap-4 p-5 flex-col'>
  {users.map((x)=>{
    return(
      <div className='flex items-center gap-4  justify-between flex-col' key={x.id}>
        <h1 className='w-full h-screen'>{x.name} </h1>
         <div>
          <Link className='text-3xl p-5 border-2 border-purple-700 ' href="/email">
          {x.email}
          </Link>
         </div>
      </div>
    )
  })}
</div>
  )
}

export default page