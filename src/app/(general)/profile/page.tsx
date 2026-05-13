"use client"
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useLogout } from "@/hooks/useLogout";
import { useUserStore } from "@/providers/user-store-provider";
import { UserStore } from "@/store/userStore";

export default function ProfilePage() {
  const {user:currentUser} = useCurrentUser();
  console.log(currentUser);
  const {logout} = useLogout();
  const router = useRouter();
  const {token} = useUserStore((state:UserStore)=> state);
  
  console.log(token);

  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 ">
      <h1>Welcome back</h1>
      <div className="font-semibold">You are {currentUser?.email}</div>
      <button
          className="mt-4 p-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-all"
          onClick={ ()=>  {logout(); router.push('/login')} }>
            Logout
          </button>
      
    </div>
  );
}