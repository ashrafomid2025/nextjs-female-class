import BookNavbar from "@/components/BookNavbar";
import React from "react";

function LibraryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-stone-100">
      <BookNavbar />
      {children}
    </div>
  );
}

export default LibraryLayout;
