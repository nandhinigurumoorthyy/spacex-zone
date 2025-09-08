import useFetch from "../hooks/useFetch";
import backgroundImage from "../assets/bg.jpg";

interface CompanyInfo {
  name: string;
  founder: string;
  founded: number;
  employees: number;
  valuation: number;
  summary: string;
}

export default function Home() {
  const { data, loading, error } = useFetch<CompanyInfo>("https://api.spacexdata.com/v4/company");

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error: {error}</p>;

  return (
    <div
    className="h-screen"
    style={{
      position: "relative",
      color: "white",
      padding: "20px",
      overflow: "hidden"
    }}
  >
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        filter: "blur(1px)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      <p className="mb-4">{data.summary}</p>
      <ul className="list-disc ml-6">
        <li className="pb-2">Founder: {data.founder}</li>
        <li className="pb-2">Founded: {data.founded}</li>
        <li className="pb-2">Employees: {data.employees}</li>
        <li className="pb-2">Valuation: ${data.valuation.toLocaleString()}</li>
      </ul></div>
    </div>
  );
}
