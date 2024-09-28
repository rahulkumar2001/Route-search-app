const axios = require('axios');

exports.getRoutes = async (req, res) => {
  const { from, to } = req.body;
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your Google Maps API Key

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json`, {
        params: {
          origin: from,
          destination: to,
          mode: 'transit', // Use 'driving', 'walking', 'bicycling', or 'transit' for different modes
          key: apiKey
        }
      }
    );

    // Format the response to fit your frontend needs
    const routes = response.data.routes.map((route) => {
      return {
        type: 'Metro/Bus',
        price: route.fare ? route.fare.value : 'N/A', // Some routes have fare information
        time: route.legs[0].duration.text,
        distance: route.legs[0].distance.text,
      };
    });

    res.json(routes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch routes from Google Maps API' });
  }
};
