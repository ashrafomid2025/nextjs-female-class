"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
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
    {
        id:5,
        name: "Products",
        link:"/product",
    },
]

function NavPage() {
  const pathName=  usePathname();

  return (

    <nav className='py-2 px-8 text-white flex justify-between items-center  bg-purple-800'>
        <h1>Logo</h1>
        <div className='flex gap-4 items-center'>
            {listNav.map((link)=>{
                const isActive= pathName ===link.link || 
                (pathName.startsWith(link.link) && link.link !== "/");
                return(
                <Link className={isActive ? "text-yellow-500 font-bold" : ""} key={link.id} href={link.link}>
                {link.name}
                </Link>
)})}
        </div>
    </nav>
  )
}

export default NavPage