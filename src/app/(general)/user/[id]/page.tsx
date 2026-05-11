import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string
    }
}


export default async function UserDetailPage({params}: Props) {
  const id: number =  parseInt((await params).id);

  if (id>100)
    notFound()

  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 ">
      <h1>User detail {id}</h1>
    </div>
  );
}

