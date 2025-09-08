import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type {Rocket}  from "../types/rocket";

export default function Rockets() {
  const { data: rockets, loading, error } = useFetch<Rocket[]>("https://api.spacexdata.com/v4/rockets");
  const [search, setSearch] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error || !rockets) return <p>Error: {error}</p>;

  const filtered = rockets.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛰️ Rockets</h1>
      <input
        type="text"
        placeholder="Search Rockets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-6 w-1/2 border-gray-400"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(rocket => (
          <Link key={rocket.id} to={`/rockets/${rocket.id}`} className="border border-gray-400 bg-zinc-100 rounded-lg shadow hover:shadow-lg">
            <img src={rocket.flickr_images[0]} alt={rocket.name} className="h-48 w-full object-cover rounded-t-lg"/>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{rocket.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">{rocket.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
