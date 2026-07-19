"use client"

import { useSearchParams, useRouter } from "next/navigation";

import { useState } from "react"

function SearchForm() {
    const searchParams=useSearchParams();
    const router=useRouter();
   const [search, setSearch]= useState(searchParams.get("search") || "");

   function handleClick(){
    const params = new URLSearchParams();
    if(search){
        params.set("search", search);
    } else{
        params.delete("search");
    }
    router.push(`product?${params.toString()}`)
    // if(params){
    //     router.push(`/product/${params.get("search")}`)
    // }
   }
  return (
    <div className="w-full px-10 py-2 flex gap-1.5 ">
        <input type="text" className='border w-9/12 py-2' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={handleClick} className="bg-purple-600 text-white py-2 px-8 rounded-md">Search</button>
    </div>
  )
}

export default SearchForm