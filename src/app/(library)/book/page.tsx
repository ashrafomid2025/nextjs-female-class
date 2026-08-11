import BookCard from "@/components/book-card";
import { Book } from "@/lib/types/book.type";
import { headers } from "next/headers";
import React from "react";

async function page() {
  async function getBooks() {
    const data = await fetch("http://localhost:8000/api/book");
    const response = await data.json();
    return response.data;
  }

  const allBooks: Book[] = await getBooks();
  return (
    // localhost:8000/api/book
    <div className="w-full my-24 max-w-6xl mx-auto grid grid-cols-4 gap-2">
      {allBooks.map((book: Book) => (
        <BookCard key={book.isbn} book={book} />
      ))}
    </div>
  );
}

export default page;
