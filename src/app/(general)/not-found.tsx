import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="font-sans flex  flex-col items-center justify-items-center h-screen w-screen  ">
      <h1>Page not found</h1>
      <p>Sorry, page not found</p>
      <Link className="mt-4 p-2 bg-gray-900 text-white rounded hover:bg-gray-600 transition-all" href="/">    
        Return to home
      </Link>
    </div>
  );
}