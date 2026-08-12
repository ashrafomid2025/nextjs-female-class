import { getSingleBook } from "@/actions/book.action";
import DeleteBook from "@/components/DeleteBook";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book } from "@/lib/types/book.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const book: Book = await getSingleBook(Number(id));
  return (
    <div className="w-full min-h-screen max-w-6xl my-32 mx-auto grid gap-4 grid-cols-1 md:grid-cols-7">
      <div className="md:col-span-2 w-full">
        <img
          className="w-full h-80 object-cover border rounded-md"
          src={`http://localhost:8000/storage/${book.cover_image}`}
          alt={book.title}
        />
      </div>
      <div className="md:col-span-3 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <h1>Description</h1>
        <p>{book.description}</p>

        <div className="w-fit p-4 rounded-md bg-green-500 text-white">
          <span>{book.price}</span>
          <span>AFG</span>
        </div>
      </div>
      <div className="md:col-span-2 w-full">
        <div className="border rounded-md p-4">
          <div className="w-full flex my-4 justify-between gap-2">
            <Badge>
              Available Copies <span>{book.available_copies}</span>
            </Badge>
            <Badge>
              Total Copies <span>{book.total_copies}</span>
            </Badge>
          </div>
          <DeleteBook id={Number(book.id)} />
        </div>
      </div>
    </div>
  );
}

export default page;
