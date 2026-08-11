import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function BookNavbar() {
  return (
    <div className="w-full flex justify-between fixed top-0 left-0 px-8 py-8 border-b-2 border-gray-300 bg-transparent  backdrop-blur-md">
      <h1>MyLibrary</h1>
      <Link href="/book">
        <Button variant="outline" size="default">
          Go Home
        </Button>
      </Link>
    </div>
  );
}

export default BookNavbar;
