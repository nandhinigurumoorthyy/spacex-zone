import useFetch from "../hooks/useFetch";
import type {Launch}  from "../types/launch";

export default function Launches() {
  const { data: launches, loading, error } = useFetch<Launch[]>("https://api.spacexdata.com/v5/launches");

  if (loading) return <p>Loading...</p>;
  if (error || !launches) return <p>Error: {error}</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🔭 SpaceX Launches</h1>
      <ul className="space-y-4">
        {launches.slice(0, 10).map(launch => (
          <li key={launch.id} className="border border-gray-300 p-5 bg-gray-100 rounded-lg shadow">
            <h2 className="font-semibold text-lg">{launch.name}</h2>
            <p className="text-gray-600">{new Date(launch.date_utc).toLocaleString()}</p>
            <p>{launch.details || "No details available"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
