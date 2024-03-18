import { unstable_noStore as noStore } from "next/cache";
import { Splash } from "./_components/splash";

export default async function Home() {
  noStore();
  

  return (
    <div className="flex flex-col items-center bg-gray-50 justify-center min-h-screen py-2">
      <Splash/>
    </div>
    )
}

