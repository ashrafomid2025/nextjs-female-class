export async function CreateNewBook(
  prevState: {
    state: boolean;
    data: string;
  },
  formData: FormData,
) {
  const data = await fetch("http://localhost:8000/api/book", {
    method: "POST",

    body: formData,
  });
  return {
    state: true,
    data: "one book inserted successfully",
  };
}

export async function getSingleBook(id: number) {
  const data = await fetch(`http://localhost:8000/api/book/${id}`, {
    method: "GET",
  });
  const response = await data.json();
  return response.data;
}
