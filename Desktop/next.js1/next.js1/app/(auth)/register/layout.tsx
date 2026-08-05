import Nav from "@/components/ui/Nav";
import React from "react";

function Layout({ childern }: { childern: React.ReactNode }) {
  return (
    <div>
      <Nav />
      {childern}
    </div>
  );
}

export default Layout;
