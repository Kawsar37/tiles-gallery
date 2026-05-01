import Link from "next/link";
import React from "react";

export default function TileCard({ tile }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={tile.image} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          {tile.title}
          <div
            className={`badge ${tile.inStock ? "badge-success" : "badge-error"}`}
          >
            {tile.inStock ? "Available" : "Unavailable"}
          </div>
        </h2>

        <div className="card-actions justify-between">
          <p className="font-semibold">
            Price: {tile.price} {tile.currency}
          </p>

          <Link href={"/tile-details"} className="badge badge-outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
