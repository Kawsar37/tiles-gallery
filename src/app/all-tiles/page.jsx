import { fetchTiles } from "@/lib/data";

import AllTiles from "./AllTiles";

export const metadata = {
  title: "All Tiles",
  description:
    "All tiles page where showing all tiles that available in tiles gallery",
};

export default async function AllTilesPage() {
  const tiles = await fetchTiles();
  return <AllTiles tiles={tiles} />;
}
