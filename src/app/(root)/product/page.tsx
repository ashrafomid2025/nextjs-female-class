import React from 'react'
import ProductCard from '../../../../components/ProductCard'
const products = [
    {
        id: 1 ,
         name: "Apple", 
         price: 120,
    },
    {
        id: 2,
         name: "Peach", 
         price: 150,
    },
    {
        id: 3 ,
         name: "Pear", 
         price: 100,
    },
    {
        id: 4 ,
         name: "Melon", 
         price: 200,
    },
] 

function productPage() {

  return (
    <div className='w-full bg-gray-300 h-screen flex justify-center items-center '>
        <div className='w-full max-w-4xl flex p-5 justify-between items-center gap-2.5 backdrop-blur-md bg-white/80'>
        {products.map((x)=>(
            <ProductCard key={x.id} product={x}/>
        ))}
        </div>
    </div>
  )
}

export default productPage