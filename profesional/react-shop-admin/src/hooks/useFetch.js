import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await axios.get(endpoint);
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      console.error(e);
    }
    
  }, []);
  return data;
};
export default useFetch;
