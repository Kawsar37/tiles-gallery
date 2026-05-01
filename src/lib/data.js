// https://tiles-gallery-json-server.onrender.com/tiles
export async function fetchTiles() {
  const res = await fetch(
    "https://tiles-gallery-json-server.onrender.com/tiles",
  );
  const data = await res.json();
  return data;
}

export async function fetchTile(id) {
  const res = await fetch(
    `https://tiles-gallery-json-server.onrender.com/tiles/${id}`,
  );
  const data = await res.json();
  return data;
}
