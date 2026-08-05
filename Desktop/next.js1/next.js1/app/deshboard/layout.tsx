import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import React from "react";
import teacherPage from "./@teacher/page";
import teacher from "./@teacher/page";

export default function DashboarLayout({
  childeren,
  analytics,
  theam,
  teacher,
}: {
  childeren: React.ReactNode;
  analytics: React.ReactNode;
  theam: React.ReactNode;
  teacher: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="p-6 max-w-6xl mx-auto space-y-6 ">
        <div>{childeren}</div>
        <div className="grid grid-cols-1 bg-gray-300  md:grid-cols-2 gap-6">
          <div>{analytics}</div>
          <div>{theam}</div>
          <div>{teacher}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
