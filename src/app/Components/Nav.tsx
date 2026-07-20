import Link from 'next/link'
import React from 'react'
const list: {id:number, name: string, href: string}[] = [
    {
        id: 1,
        name: "Home",
        href: "/",
    },
       {
        id: 2,
        name: "DashBoard",
        href: "/dashboard",
    },
       {
        id: 3,
        name: "login",
        href: "/login",
    },
       {
        id: 4,
        name: "Register",
        href: "/register",
    },
       {
        id: 5,
        name: "Forgot-Password",
        href: "/forgot-pasword",
    },

]

function Nav() {
  return (
    <div className='w-full py-4 flex justify-between items-center bg-blue-300 text-2xl text-white'>
    {list.map((link)=>{
        return(
            <Link key={link.id} href={link.href}>
                {link.name}
            </Link>
        )
    })}
    </div>
  )
}

export default Nav