// src/services/apiService.js

import axios from 'axios';
const fetchData = async (url) => {
    try {
        // http://localhost:3000/metro/recommand-station?search=mundka
      const response = await axios.get(`http://localhost:5001${url}`); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      return error
    } 
  };
export default fetchData;
