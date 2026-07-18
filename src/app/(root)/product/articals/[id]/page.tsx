import { SearchParams } from 'next/dist/server/request/search-params';
import React from 'react'

async function page({params, searchParams}:{params: Promise<{id:number}>, searchParams:Promise<{lang?:string}>}) {
    const {id}= await params;
    const {lang='english'} = await searchParams;
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <h1 className='text-4xl '>this is the artical {id}, You are readin this artical in {lang}</h1>
    </div>
  )
}

export default page