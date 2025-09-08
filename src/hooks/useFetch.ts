import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;
    setLoading(true);

    axios.get<T>(url)
      .then(res => {
        if (!cancel) {
          setData(res.data);
          setError(null);
        }
      })
      .catch(err => {
        if (!cancel) setError(err.message);
      })
      .finally(() => !cancel && setLoading(false));

    return () => { cancel = true; };
  }, [url]);

  return { data, loading, error };
}
