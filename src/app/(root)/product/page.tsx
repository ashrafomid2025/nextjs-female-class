import React from 'react'
import ProductCard from '../../../../components/ProductCard'
import { myProducts } from '../../../../public/db/MyProduct'


function productPage() {

  return (
    <div className='w-full bg-gray-300 h-screen flex justify-center items-center '>
        <div className='w-full max-w-4xl flex p-5 justify-between items-center gap-2.5 backdrop-blur-md bg-white/80'>
        {myProducts.map((x)=>(
            <ProductCard key={x.id} product={x}/>
        ))}
        </div>
    </div>
  )
}

export default productPage