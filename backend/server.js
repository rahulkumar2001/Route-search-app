const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/routes', routes.getRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
