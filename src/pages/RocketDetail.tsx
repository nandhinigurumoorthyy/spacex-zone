import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type {Rocket} from "../types/rocket";

export default function RocketDetail() {
  const { id } = useParams();
  const { data: rocket, loading, error } = useFetch<Rocket>(`https://api.spacexdata.com/v4/rockets/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error || !rocket) return <p>Error: {error}</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto bg-zinc-100 mt-10">
      <h1 className="text-3xl font-bold">{rocket.name}</h1>
      <img src={rocket.flickr_images[0]} alt={rocket.name} className="my-6 w-1/2 h-1/2 rounded-lg shadow-lg"/>
      <p className="mb-4">{rocket.description}</p>
      <div className="flex flex-col gap-2">
        <p><strong>First Flight:</strong> {rocket.first_flight}</p>
        <p><strong>Height:</strong> {rocket.height.meters} m</p>
        <p><strong>Diameter:</strong> {rocket.diameter.meters} m</p>
        <p><strong>Mass:</strong> {rocket.mass.kg} kg</p>
      </div>
    </div>
  );
}
