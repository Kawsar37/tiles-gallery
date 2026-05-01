import { fetchTile } from "@/lib/data";
import { Chip } from "@heroui/react";
import React from "react";
import { Ban, Check } from "@gravity-ui/icons";

export default async function TileDetailsPage({ params }) {
  const { id } = await params;
  const tile = await fetchTile(id);
  return (
    <div className="max-w-[80%] mx-auto mt-7 sm:mt-10">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img src={tile.image} alt="tile" className="w-120" />
        </figure>
        <div className="card-body text-xl">
          <h2 className="card-title text-3xl">{tile.title}</h2>
          <p>{tile.description}</p>
          <p>Category: {tile.category}</p>
          <p>Tile Dimensions: {tile.dimensions}</p>
          <p>Material: {tile.material}</p>
          <p className="text-xl font-semibold">Price: {tile.price} USD</p>

          <div className="card-actions justify-between">
            {tile.inStock ? (
              <Chip color="success">
                <Check width={12} />
                <Chip.Label>In Stock</Chip.Label>
              </Chip>
            ) : (
              <Chip color="danger">
                <Ban width={12} />
                <Chip.Label>Out of Stock</Chip.Label>
              </Chip>
            )}

            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
