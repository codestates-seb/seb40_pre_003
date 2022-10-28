// const BASE_URL = 'http://localhost:5000/';
import axios from 'axios';
import { useEffect, useState } from 'react';

function useAxios(url) {
  console.log('here is useAxios');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    axios
      .get(url, { signal: abortCont.signal })
      .then((res) => {
        console.log('RES', res);
        setData(data);
        setError(null);
      })
      .catch((error) => {
        console.log('useAxios error', error);
        setError(error);
      });
    return;
  }, [url]);

  return [data, error];
}

export default useAxios;
