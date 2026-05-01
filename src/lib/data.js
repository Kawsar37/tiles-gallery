// https://tiles-gallery-json-server.onrender.com/tiles
export default async function fetchTiles() {
  const res = await fetch(
    "https://tiles-gallery-json-server.onrender.com/tiles",
  );
  const data = await res.json();
  return data;
}
