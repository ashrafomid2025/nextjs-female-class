import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1>this is the course page</h1>
      <Link href="/dashboard/done-course">visit done Courses</Link>
    </div>
  );
}

export default page;
