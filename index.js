const express = require('express');
const app = express();
const {addPatientMonitoringParams} = require('./add-params');
const {getPatientMonitoringStats} = require('./get-stats');

app.use(express.json());
app.post('/pm-params', addPatientMonitoringParams);
app.get('/pm-stats', getPatientMonitoringStats);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
