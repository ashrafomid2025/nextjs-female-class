"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
 const products =[
 {
    id: 1,
    name: "Apple",
    image: "https://images.unsplash.com/photo-1477830530828-c849c4b9bf2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"
 },
  {
    id: 2,
    name: "pear",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 },
  {
    id: 3,
    name: "peach",
    image: "https://plus.unsplash.com/premium_photo-1675727579804-3d0f9ded5922?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXRzJTIwcGVhY2h8ZW58MHx8MHx8fDA%3D"
 },
  {
    id: 4,
    name: "blueBerray",
    image: "https://images.unsplash.com/photo-1594002348772-bc0cb57ade8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"
 },
 ];
function page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query= searchParams.get("search") || "";
    const [text, setText]= useState(query);
    useEffect(()=>{
     setText(query);
    }, [query]);
    const handleSearch =  ()=>{
        router.push(`/products?search=${text}`);
    };
    const result = products.filter ((item)=>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
  return (
    <div className='p-18 w-full border-2 border-blue-800 flex justify-between items-center flex-col'>
     <h1 className='p-8 text-4xl text-blue-900'>Search Products</h1>
     <div className='w-full flex justify-center items-center'>
     <input
     className='border-2 border-blue-700 p-6 rounded-2xl'
     type='text'
     value={text}
     onChange={(e)=> setText(e.target.value)}
     placeholder='Search.....'
     />

     <button
     onClick={handleSearch}
      className='p-6 rounded-2xl m-2 bg-blue-700 text-white text-2xl'>
        Search
     </button>
     </div>
{/* part one input */}
     <hr/>
      <div className='flex justify-between items-center gap-6 flex-row'>
     {result.map((item)=>(
        <div key={item.id}
        className='flex gap-4 items-center'
        >
        <img
        className='border-2 rounded-2xl'
        src={item.image}
        width="70"
        height="70"
        alt={item.name}
        />
        <a href={`/products/${item.name}`}>
        {item.name}
        </a>
        
        </div>
     ))}
     </div>
    </div>
  )
}

export default page