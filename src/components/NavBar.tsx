import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 text-white px-6 py-10 flex gap-28 text-center shadow">
      <Link to="/" className="font-bold text-4xl">🛰️ SpaceX Zone</Link>
      <div className="flex gap-8 text-center items-center">
      <Link to="/history">History</Link>
      <Link to="/launches">Launches</Link>
      <Link to="/rockets">Rockets</Link></div>
    </nav>
  );
}
