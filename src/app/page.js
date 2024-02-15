import MainBar from "@/components/MainBar";
import { SideBar } from "@/components/SideBar";

export default function Home() {
  return (
    <main className="md:flex">
      <aside className="hidden md:block min-h-screen md:w-[48%] lg:w-[30%] xl:w-[22%] border-r-2 border-gray-300 space-y-4">
        <SideBar />
      </aside>
      <MainBar />
    </main>
  );
}
