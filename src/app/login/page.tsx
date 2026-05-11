'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const router = useRouter();


  const onSubmit = () => {
    if(!email || !password)
        alert("Please enter username")
    else{
        if (email=="email@example.com")
            router.push("/profile");
    }
  }


  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 ">
      <h1>Login Page</h1>
      <label htmlFor="email" className="mt-4">email</label>
      <input type="text" 
      className="w-80 h-8 px-2 border  border-solid border-block rounded text-black"
      value={email} onChange={(e)=>setEmail(e.target.value)} />
      <label htmlFor="password" className="mt-4">password</label>
      <input type="password" 
      className="w-80 h-8 px-2 border  border-solid border-block rounded text-black"
      value={password} onChange={(e)=>setPassword(e.target.value)} />

      <button 
      className="mt-4 p-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-all"
      onClick={onSubmit}
      >Login</button>
    </div>
  );
}