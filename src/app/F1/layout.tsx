import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="w-full bg-blue-500 text-center text-white py-5">
        Navbar
      </nav>
      {children}
      <footer className="w-full bg-gray-500 text-center text-white py-5">
        Footer
      </footer>
    </div>
  );
}

export default layout;
