import { auth } from "@/auth";
import Carousel from "@/components/Carousel";
import Destination from "@/components/Destination";
import Favourites from "@/components/Favourites";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const session = await auth();
  return (
    <center>
      {session?.user?.id ? (
        <div>
          <Navbar />

          <Destination />
          <Favourites />
        </div>
      ) : (
        <div>
          <Navbar />
          <Carousel />
          <Destination />
          <Favourites />
        </div>
      )}
    </center>
  );
}
