"use client";

import { Label, SearchField } from "@heroui/react";
import React, { useState } from "react";
import TileCard from "@/components/shared/TileCard";

export default function AllTiles({ tiles }) {
  const [text, setText] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(text),
  );

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
              placeholder="Search..."
            />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {filteredTiles.map((tile) => (
          <TileCard tile={tile} key={tile.id} />
        ))}
      </div>
    </div>
  );
}
