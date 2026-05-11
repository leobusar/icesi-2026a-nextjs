import { NavBar } from "@/components/nav-bar/NavBar";
import { CounterStoreProvider } from "@/providers/counter-store-provider";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <CounterStoreProvider>
      <NavBar></NavBar>
      {children}
    </CounterStoreProvider>
  );
}