import { fetchTiles } from "@/lib/data";

import AllTiles from "./AllTiles";

export default async function AllTilesPage() {
  const tiles = await fetchTiles();
  return <AllTiles tiles={tiles} />;
}
