import useFetch from "../hooks/useFetch";
import type { HistoryEvent } from "../types/history";

export default function History() {
  const { data: events, loading, error } = useFetch<HistoryEvent[]>("https://api.spacexdata.com/v4/history");

  if (loading) return <p>Loading...</p>;
  if (error || !events) return <p>Error: {error}</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🌕 SpaceX History</h1>
      <ul className="space-y-4">
        {events.map(event => (
          <li key={event.id} className="border border-gray-300 bg-gray-100 p-5 rounded-lg shadow">
            <h2 className="font-semibold text-lg">{event.title}</h2>
            <p className="text-gray-600">{new Date(event.event_date_utc).toLocaleDateString()}</p>
            <p>{event.details}</p>
            {event.links.article && (
              <a href={event.links.article} target="_blank" className="text-blue-500 underline">
                Read more
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
