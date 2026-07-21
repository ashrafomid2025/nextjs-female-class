import React from "react";

async function page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  if (id == 1000) {
    throw new Error("Product Not found");
  }
  return (
    <div>
      <h1>this is the details about product {id}</h1>
    </div>
    // application => dev, build => optimize
  );
}

export default page;
