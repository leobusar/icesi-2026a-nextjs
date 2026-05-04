import { NavBar } from "@/components/nav-bar/NavBar";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar></NavBar>
      {children}
    </div>
  );
}