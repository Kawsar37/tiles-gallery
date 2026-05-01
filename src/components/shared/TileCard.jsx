import Link from "next/link";
import React from "react";

export default function TileCard({ tile }) {
  return (
    <div className="card bg-base-100 shadow-sm h-full">
      <figure>
        <img src={tile.image} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {tile.title}
          <div
            className={`badge ${tile.inStock ? "badge-success" : "badge-error"}`}
          >
            {tile.inStock ? "Available" : "Unavailable"}
          </div>
        </h2>

        <div className="card-actions justify-start">
          <p className="font-semibold">
            Price: {tile.price} {tile.currency}
          </p>
        </div>
        <Link
          href={`tile/${tile.id}`}
          className="badge badge-outline ml-auto mt-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
