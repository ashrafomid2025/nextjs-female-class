import Link from "next/link";
import React from "react";
const List: { id: number; name: string; href: string }[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Dashboar",
    href: "/dashboard",
  },
  {
    id: 3,
    name: "Login",
    href: "/login",
  },
  {
    id: 4,
    name: "Register",
    href: "/register",
  },
  {
    id: 5,
    name: "Forgot password",
    href: "/forgot-password",
  },
];
function Nav() {
  return (
    <nav className="w-full flex justify-between  items-center gap-6 p-4 shadow-md dir-ltl bg-blue-600  text-white">
      {List.map((link) => {
        return (
          <Link key={link.id} href={link.href}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
