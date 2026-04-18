import { unstable_noStore as noStore } from "next/cache";
import { Splash } from "./_components/splash";

export default async function Home() {
  noStore();

  return (
    <main>
      <Splash />
    </main>
  );
}
