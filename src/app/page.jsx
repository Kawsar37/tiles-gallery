import FeatureTiles from "@/components/homepage/FeatureTiles";
import SwiperBanner from "@/components/homepage/SwiperBanner";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="mt-7 sm:mt-10">
      <SwiperBanner />

      <div className="my-7 sm:my-10 flex flex-col items-center gap-6 text-center container mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-400">
          Discover Your Perfect Aesthetic
        </h1>
        <Link
          href={"/all-tiles"}
          className="btn btn-outline text-lg btn-warning rounded-full"
        >
          Browse Now
        </Link>

        <Marquee>
          <div className="font-semibold text-2xl text-slate-500 flex gap-6">
            <p>
              <span className="text-blue-400 ml-6">New Arrivals:</span> Ceramic
              Blue Gloss Tile, White Marble Floor Tile, Wood Texture Porcelain
              Tile
            </p>{" "}
            |{" "}
            <p>
              {" "}
              <span className="text-blue-400">Weekly Feature:</span> Modern
              Geometric Patterns
            </p>{" "}
            |<p className="mr-6">Join the Community...</p>|
          </div>
        </Marquee>
      </div>

      <div className=" max-w-[80%] mx-auto">
        <h1 className="text-4xl text-blue-400 font-semibold text-center">
          Featured Tiles
        </h1>

        <FeatureTiles />
      </div>
    </div>
  );
}
