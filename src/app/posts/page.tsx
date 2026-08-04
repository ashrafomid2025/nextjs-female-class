
import React from 'react'

async function page() {
   async function getUsers(){
      const data =  await fetch("https://jsonplaceholder.typicode.com/posts");
   const jawab= await data.json();
   return jawab;
    }
 const data = await getUsers()
  return (
    <div className='w-full max-w-6xl mx-auto flex flex-col justify-center items-center'>
     {data.map((x: {id: number, title: string, body: string})=>{
        return(
            <div className='w-full flex justify-between items-center gap-2 border-2 border-blue-500 flex-col py-6 px-6 rounded-2xl' key={x.id}>
              <h1 className='text-2xl text-blue-900'>{x.title} </h1>
              <p className='text-xl text-gray-600'>{x.body} </p>
            </div>
        )
     })}
    </div>
  )
}

export default page