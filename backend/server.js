const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const metro = require('./routes/index');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/metro', metro);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
