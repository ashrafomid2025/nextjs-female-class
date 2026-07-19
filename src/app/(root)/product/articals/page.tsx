import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex max-w-6xl my-16 mx-auto'>
        <Link href="articals/1?lang=fa">This is the first artical in Farsi</Link>
        <Link href="articals/1?lang=english">This is the second arical in English</Link>
        <Link href="articals/1?lang=urdo">This is the third artical in Urdo</Link>
        <Link href="articals/2?lang=fa">This is the third artical in Farsi</Link>
        <Link href="articals/2?lang=en">This is the third artical in English</Link>
        <Link href="articals/2?lang=urdo">This is the third artical in Urdo</Link>
    </div>
  )
}

export default page