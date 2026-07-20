import Link from "next/link";
import React from "react";
const list: { id: number; name: string; href: string }[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 3,
    name: "Login",
    href: "/login",
  },
  {
    id: 4,
    name: "Register page",
    href: "/register",
  },
  {
    id: 5,
    name: "forgot password",
    href: "/forgot-password",
  },
];
function Navbar() {
  return (
    <div className="w-full py-4 flex justify-between gap-3 bg-blue-500 text-white">
      {list.map((link) => {
        return (
          <Link key={link.id} href={link.href}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
