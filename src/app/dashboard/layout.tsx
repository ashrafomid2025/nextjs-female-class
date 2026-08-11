import React from "react";

function layout({
  children,
  course,
  Students,
  teacher,
  login,
}: {
  children: React.ReactNode;
  course: React.ReactNode;
  teacher: React.ReactNode;
  Students: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return (
      <div>
        <h1 className="w-full py-5 bg-blue-500 text-center text-white text-6xl">
          Header
        </h1>
        {children}
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="w-full p-6 text-center border">{Students}</div>
          <div className="w-full p-6 text-center border">{course}</div>
          <div className="w-full p-6 text-center border">{teacher}</div>
        </div>
        <h1 className="bg-gray-300 w-full text-center text-5xl py-5">Footer</h1>
      </div>
    );
  } else {
    return <div className="w-full p-6 text-center border">{login}</div>;
  }
  // intercepting routes => مسیر های تداخلی
  
}

export default layout;
