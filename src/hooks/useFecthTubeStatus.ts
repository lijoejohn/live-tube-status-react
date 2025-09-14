import { useEffect, useState } from "react";
import { TubeLine } from "../types/index";
import { sortBytstatusSeverity } from "../utils/tubeStatus";

type Data = TubeLine[];

/**
 * Custom React hook to fetch and manage the status of Tube lines.
 * Handles loading, error, and data states, and sorts the results by status severity.
 *
 * @returns A tuple containing:
 *   [0] loading - boolean indicating if the fetch is in progress,
 *   [1] data - the sorted TubeLine array or undefined,
 *   [2] error - any error encountered during fetch, or false if no error.
 */
const useFecthTubeStatus = (): [boolean, TubeLine[] | undefined, unknown] => {
  const url = `${process.env.BACK_END_URL}?app_key=${process.env.API_KEY}`;
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.sort(sortBytstatusSeverity));
        setError(false);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [loading, data, error];
};
export default useFecthTubeStatus;
