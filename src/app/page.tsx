import { unstable_noStore as noStore } from "next/cache";
import { Splash } from "./_components/splash";

export default async function Home() {
  noStore();
  

  return (
  <div className="bg-gray-50">
    <div className=" bg-gray-50 md:max-w-screen-lg md:justify-center min-h-screen m-auto py-2">
      <Splash/>
    </div>
  </div>
    )
}

