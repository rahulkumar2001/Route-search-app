const express = require('express'); 
const router = express.Router();
const {  recommandStation, stationRoute } = require('./dmrc');

router.get('/recommand-station', recommandStation);
router.get('/station-route/:origin/:destination', stationRoute)
module.exports = router