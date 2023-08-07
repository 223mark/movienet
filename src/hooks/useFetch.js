import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const movieUrl = "https://api.themoviedb.org/3/";
  const apiEndpoint = movieUrl + url;
  console.log(apiEndpoint);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
 


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
          const response = await axios.get(apiEndpoint, {
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTg3MjVmMmFmN2VhYzU4YjZjMTY3N2FlNmJjZDU3MSIsInN1YiI6IjY0YjhlNDM0YWI2ODQ5MDBlMjMwNWNlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-VeZllYKmSJctuk5ZFxOhocqzGjbdDeRBZfboW2nFe8'
  }
        });
  
        setData(response.data.results);
      } catch (err) {
        setError(err.message);
        
      }
      setLoading(false);
    };
    fetchData();
  }, [apiEndpoint]);

    // reFetch for to refetch back data just in case
  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(apiEndpoint);
      setData(res.data.results);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;