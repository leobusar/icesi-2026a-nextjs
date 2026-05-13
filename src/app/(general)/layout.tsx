import { NavBar } from "@/components/nav-bar/NavBar";
import { CounterStoreProvider } from "@/providers/counter-store-provider";
import { UserStoreProvider } from "@/providers/user-store-provider";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <UserStoreProvider>
      <CounterStoreProvider>
        <NavBar></NavBar>
        {children}
      </CounterStoreProvider>
    </UserStoreProvider>
  );
}