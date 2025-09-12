import { useEffect, useState } from "react";
import { TubeLine } from "../types/index";
import { sortBytstatusSeverity } from "../utils/tubeStatus";

type Data = TubeLine[];

const useFecthTubeStatus = (): [boolean, TubeLine[] | undefined, unknown] => {
  const url = `${process.env.BACK_END_URL}?app_key=${process.env.API_KEY}`;
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(false);
  useEffect(() => {
    try {
      fetch(url)
        .then((response) => {
          response.json().then((data) => {
            setLoading(false);
            setData(data.sort(sortBytstatusSeverity));
            setError(false);
          });
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    } catch (error) {
      setError(error);
    }
  }, []);

  return [loading, data, error];
};
export default useFecthTubeStatus;
