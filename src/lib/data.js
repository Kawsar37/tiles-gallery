// https://tiles-gallery-json-server.onrender.com/tiles
export async function fetchTiles() {
  const res = await fetch(
    "https://tiles-gallery-json-server.onrender.com/tiles",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch tiles");
  }
  const data = await res.json();
  return data;
}

export async function fetchTile(id) {
  const res = await fetch(
    `https://tiles-gallery-json-server.onrender.com/tiles/${id}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch tile");
  }
  const data = await res.json();
  return data;
}
