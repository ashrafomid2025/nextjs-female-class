import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="bg-blue-200 flex flex-col text-center text-2xl p-6 rounded-2xl border border-gray-600">
      <h1>this is the team page</h1>
      <Link className="underline text-blue-500" href="/deshboard/in-active">
        {" "}
        visit inactive students
      </Link>
    </div>
  );
}

export default page;
