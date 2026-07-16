import React from 'react'
import Link from "next/link";
const listNav: {id: number, name: string, link: string}[]= [
    {
        id:1,
        name: "Home",
        link:"/",
    },
    {
        id:2,
        name: "Services",
        link:"/services",
    },
    {
        id:3,
        name: "About",
        link:"/about",
    },
    {
        id:4,
        name: "Contact",
        link:"/contact",
    },
]

function NavPage() {
  return (
    <nav className='py-2 px-8 text-white bg-blue-600'>
        <h1>Logo</h1>
        <div className='flex gap-4 items-center'>
            {listNav.map((link)=>(
                <Link key={link.id} href={link.link}>
                {link.name}
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default NavPage