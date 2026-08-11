"use client";
import { CreateNewBook } from "@/actions/book.action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";

function page() {
  const [data, action] = useActionState(CreateNewBook, {
    state: false,
    data: "",
  });
  return (
    <div className="w-full my-24 min-h-screen flex justify-center bg-stone-100 items-center">
      <div className="w-full max-w-4xl ">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Add New Book</CardTitle>
            <CardDescription>
              you can add new book, by filling the form
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action={action}
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              <div className="grid gap-2">
                <Label htmlFor="title">Book Title</Label>
                <Input name="title" type="text" id="title" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="isbn">Book isbn</Label>
                <Input name="isbn" type="text" id="isbn" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Book Price</Label>
                <Input name="price" type="text" id="price" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="published_at">Published At</Label>
                <Input name="published_at" type="date" id="published_at" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="total_copies">Total Copies</Label>
                <Input name="total_copies" type="number" id="total_copies" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="available_copies">Available Copies</Label>
                <Input
                  name="available_copies"
                  type="number"
                  id="available_copies"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cover_image">Cover Image</Label>
                <Input
                  name="cover_image"
                  type="file"
                  accept="image/*"
                  id="cover_image"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="author_id">Author Id</Label>
                <Input name="author_id" type="number" id="author_id" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Input name="status" type="text" id="status" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="genre">Genre</Label>
                <Input name="genre" type="text" id="genre" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  className="resize-none"
                  id="description"
                />
              </div>

              <div className="grid gap-2">
                <Button type="submit">Save</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default page;
