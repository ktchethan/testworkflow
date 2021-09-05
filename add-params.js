const {addParams, params} = require('./paramstore');

function addPatientMonitoringParams(req, res) {
  console.log(`adding ${JSON.stringify(req.body)}
    with headers ${JSON.stringify(req.headers)}`);
  if (req.headers && req.headers.authorization) {
    const [scheme, token] = req.headers.authorization.split(' ');
    if (scheme === 'Bearer' && token === 'secret') {
      addParams(req.body);
      console.log(`params: ${JSON.stringify(params)}`);
      return res.json({storedStatus: 'ok'});
    }
  }
  return res.status(401).json({storedStatus: 'unauthorized'});
}

module.exports = {addPatientMonitoringParams};
