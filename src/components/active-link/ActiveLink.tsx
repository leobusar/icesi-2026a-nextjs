"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './ActiveLink.module.css';

interface Props {
    text: string; 
    path: string;
}

export default function ActiveLink({text, path}: Props) {
  const pathName=usePathname();
  console.log(pathName);
  return (
    <Link key={path} href={path} className={`flex items-center m-2 text-white ${style.link} ${pathName==path? style.active:""}`}>{text}</Link>
  );
}