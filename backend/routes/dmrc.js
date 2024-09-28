const axios = require('axios');
require('dotenv').config();

const recommandStation = async (req, res) => {
  try {
    const search = req.query.search
    const response = await axios.get(`https://backend.delhimetrorail.com/api/v2/en/station_by_keyword/all/${search}`, {
      headers: {
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "application/json",
        "Priority": "u=1, i",
        "Sec-CH-UA": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
        "Sec-CH-UA-Mobile": "?0",
        "Sec-CH-UA-Platform": "\"macOS\"",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Referer": "https://delhimetrorail.com/",
        "Referrer-Policy": "strict-origin"
      }
    });

    // Send the response data back to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching station data:', error);
    res.status(500).json({ error: 'Failed to fetch station data' });
  }
}

const stationRoute = async (req, res) => {
  const { origin, destination } = req.params;
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://backend.delhimetrorail.com/api/v2/en/station_route/${origin}/${destination}/least-distance/2024-09-28T21:54:03.791`,
      headers: { 
        'accept': '*/*', 
        'accept-language': 'en-US,en;q=0.9', 
        'content-type': 'application/json', 
        'origin': 'https://delhimetrorail.com', 
        'priority': 'u=1, i', 
        'referer': 'https://delhimetrorail.com/', 
        'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"macOS"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-site', 
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'
      }
    };
    const response = await axios.request(config)
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching station route data:', error);
    res.status(500).json({ error: 'Failed to fetch station route data' });
  }
}
module.exports = {
  recommandStation,
  stationRoute
};