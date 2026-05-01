import { fetchTiles } from "@/lib/data";
import React from "react";
import TileCard from "../shared/TileCard";

export default async function FeatureTiles() {
  const tiles = await fetchTiles();
  const featuredTiles = tiles.slice(0, 4);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {featuredTiles.map((tile) => (
        <TileCard tile={tile} key={tile.id} />
      ))}
    </div>
  );
}
