import React from "react";

function RootLayout({
  course,
  student,
  teacher,
  children,
}: {
  children: React.ReactNode;
  course: React.ReactNode;
  student: React.ReactNode;
  teacher: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="grid w-full grid-cols-2 gap-4">
        <div className="border p-4">{student}</div>
        <div className="border p-7">{course}</div>
        <div className="border p-8">{teacher}</div>
      </div>
    </div>
  );
}

export default RootLayout;
