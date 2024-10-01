const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const metro = require('./routes/index');
const app = express();
const PORT = 5001;

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods if needed
  credentials: true, // If using credentials (like cookies or authorization headers)
}));

app.use(bodyParser.json());

app.use('/metro', metro);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
