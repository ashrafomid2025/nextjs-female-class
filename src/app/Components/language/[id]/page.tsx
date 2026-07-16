import React from 'react'

 async function page({params,searchParams}: {params: Promise<{id: number}>, searchParams: Promise<{lang?: string}> }) {
    const {id} = await params;
    const {lang = 'en'} = await searchParams;
  return (
    <div className='w-full h-screen justify-center items-center'>
        <h1 className='text-4xl text-blue-400'>This is post {id} and you are reading this in {lang} </h1>
    </div>
  )
}

export default page