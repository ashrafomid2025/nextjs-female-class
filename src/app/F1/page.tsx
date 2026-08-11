import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1>this is folder 1</h1>
      <Link href="/F1/f2">Go to folder 2</Link>
      <Link href="/f3">Go to folder 3</Link>
    </div>
  );
}

export default page;
