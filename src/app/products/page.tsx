import React from "react";
function getRandomNumber(num: number) {
  return Math.floor(Math.random() * num);
}
function page() {
  const num = getRandomNumber(2);
  if (num == 1) {
    throw new Error("Something went wrong in products page");
  }

  return (
    <div>
      <h1>this is the product page</h1>
    </div>
  );
}

export default page;
