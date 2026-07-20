"use client";
import Navbar from "@/components/Nav";
import React, { useState } from "react";

function layout({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState("");
  return (
    <div>
      <Navbar />
      <input
        className="border py-1"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {children}
    </div>
  );
}

export default layout;
