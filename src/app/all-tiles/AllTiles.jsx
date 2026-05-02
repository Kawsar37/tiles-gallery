"use client";

import { Label, SearchField } from "@heroui/react";
import React, { useState } from "react";
import TileCard from "@/components/shared/TileCard";

export default function AllTiles({ tiles }) {
  const [text, setText] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(text.toLowerCase()),
  );

  console.log("filter tiles", text);

  return (
    <div className=" max-w-[85%] mx-auto mt-7 sm:mt-10">
      <h1 className="text-4xl text-blue-400 font-semibold text-center">
        All Tiles
      </h1>

      <div>
        <SearchField name="search">
          <Label>Search</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-70"
              id="input-box"
              placeholder="Search..."
            />
            <SearchField.ClearButton onClick={() => setText("")} />
          </SearchField.Group>
        </SearchField>
      </div>

      {filteredTiles.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {filteredTiles.map((tile) => (
            <TileCard tile={tile} key={tile.id} />
          ))}
        </div>
      ) : (
        <div className="min-h-[60vh] flex items-center justify-center">
          <h3 className="text-2xl font-semibold text-blue-300">
            No Tiles Found!
          </h3>
        </div>
      )}
    </div>
  );
}
