import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Book } from "@/lib/types/book.type";
import { Badge } from "./ui/badge";
import Link from "next/link";

function BookCard({ book }: { book: Book }) {
  return (
    <Card>
      <CardHeader className="p-0">
        <Link href={`/book/${book.id}`}>
          <img
            src={`http://localhost:8000/storage/${book.cover_image}`}
            className="w-full h-72"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="w-full flex justify-between">
          <h1 className="font-semibold text-xl">{book.title}</h1>
          <Badge
            variant={book.status == "available" ? "outline" : "destructive"}
          >
            {book.status}
          </Badge>
        </div>
        <div>
          <span>
            {book.price}{" "}
            <span className="text-sm align-super text-purple-500">AFG</span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default BookCard;
