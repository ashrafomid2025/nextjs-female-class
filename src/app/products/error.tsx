"use client";
import React from "react";

function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  function handleClick() {
    reset();
  }
  return (
    <div>
      <h1>{error.message}</h1>
      <button
        onClick={handleClick}
        className="py-2 px-5 bg-blue-500 text-white"
      >
        try again
      </button>
    </div>
  );
}

export default ErrorPage;
