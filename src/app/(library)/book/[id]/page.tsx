import { getSingleBook } from "@/actions/book.action";
import { Book } from "@/lib/types/book.type";
import React from "react";

async function page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const book: Book = await getSingleBook(Number(id));
  return (
    <div className="my-24">
      <h1 className="text-5xl">{book.title}</h1>
    </div>
  );
}

export default page;
