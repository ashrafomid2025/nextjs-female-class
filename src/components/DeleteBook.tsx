"use client";
import React, { useActionState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import DeleteSingleBook from "@/actions/book.action";
import { useRouter } from "next/navigation";

function DeleteBook({ id }: { id: number }) {
  const [data, action] = useActionState(DeleteSingleBook, {
    status: false,
    message: "",
  });
  const router = useRouter();
  if (data.status) {
    router.push("/book");
  }
  return (
    <form action={action}>
      <Input className="hidden" defaultValue={id} name="id" />
      <Button type="submit" variant="destructive" className="w-full">
        Delete
      </Button>
    </form>
  );
}

export default DeleteBook;
