import React from 'react'
import ProductCard from '../../../../components/ProductCard'

import { myProducts } from '../../../../public/db/MyProduct'
import SearchForm from '../../../../components/SearchForm'


async function productPage({searchParams}:{searchParams: Promise<{search?:string}>}) {
const {search=""}= await searchParams;
const filteredProducts = myProducts.filter((x)=>{
  return x.name.toLowerCase().includes(search?.toLowerCase());
})
  return (
    <div className='w-full bg-gray-300 h-screen flex justify-center items-center '>
        <div className='w-full max-w-4xl  flex p-8 flex-col justify-between items-center gap-2.5 backdrop-blur-md bg-white/80'>
         <SearchForm/>
        <div className='flex justify-between flex-wrap'>
        {filteredProducts.map((x)=>(
            <ProductCard key={x.id} product={x}/>
        ))}
        </div>
        </div>
    </div>
  )
}

export default productPage