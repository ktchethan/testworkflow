const {params} = require('./paramstore');

function getPatientMonitoringStats(req, res) {
  console.log(`getting
    with headers ${JSON.stringify(req.headers)}`);
  if (req.headers && req.headers.authorization) {
    const [scheme, token] = req.headers.authorization.split(' ');
    if (scheme === 'Bearer' && token === 'secret') {
      // The tests will succeed even if you return an empty object here
      const minmaxes = Object.entries(params).map(([key, values])=>
        ({[key]: {min: Math.min(...values), max: Math.max(...values)}}));
      return res.json(minmaxes);
    }
  }
  return res.status(401).json({error: 'unauthorized'});
}

module.exports = {getPatientMonitoringStats};
