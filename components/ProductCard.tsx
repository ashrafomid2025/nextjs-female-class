import Link from 'next/link'
import React from 'react'

function ProductCard({product}: {product: {id: number, name:string, price: number}}) {
  return (
    <Link href={`product/${product.id}`} className='flex border p-10 rounded-md  flex-col gap-2 '>
        <h1 className='text-3xl font-bold'>{product.name}</h1>
        <p className='text-gray-500'>{product.price}</p>
    </Link>
  )
}

export default ProductCard