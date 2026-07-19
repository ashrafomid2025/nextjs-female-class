import React from 'react'
import { myProducts } from '../../../../../public/db/MyProduct'

async function page({params}:{params:Promise<{product_id: number}>}) {
  const {product_id}= await params;
  const foundProduct= myProducts.find((x)=> x.id == product_id);
  if(!foundProduct) return(
    <h1 className='text-center font-bold text-3xl pt-4 text-red-700'>Nothing was found</h1>
  )
  return (
    <div className='w-full gap-8 h-screen flex justify-center items-center  '>
        <h1 className='text-8xl font-bold text-black'>{foundProduct?.name}</h1>
        <p></p>
    </div>
  )
}

export default page