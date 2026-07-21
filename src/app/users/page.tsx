"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [users, setUsers] = useState<
    { id: number; name: string; email: string }[] | null
  >(null);
  useEffect(() => {
    async function getUsers() {
      const data = await fetch("something");
      const response = await data.json();
      setUsers(response);
    }
    getUsers();
  }, []);
  if (!users) {
    return;
  }
  return (
    <div>
      {users.map((x: { name: string; id: number; email: string }) => (
        <div key={x.id}>
          <h1>{x.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default page;
