import { useCallback, useState } from "react";

const useHttp = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        body: JSON.stringify(requestConfig.body),
        headers: requestConfig.headers || {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Unable to fetch data, please try again!");
      }
      setData(await response.json());
    } catch (error) {
      setError(error.message || "Something went wrong.");
    }
    setIsLoading(false);
  }, []);
  return { data, error, isLoading, sendRequest };
};
export default useHttp;
