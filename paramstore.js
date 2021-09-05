
const params = {};

function addParams(p) {
  for (const [key, value] of Object.entries(p)) {
    if (!params[key]) params[key] = [];
    params[key].push(value);
  }
}

module.exports = {addParams, params};
