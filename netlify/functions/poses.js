const { formatJSONResponse } = require('@netlify/functions');
const yogaPoses = require('../../data/yogaPoses.json');

const handler = async (event) => {
  return formatJSONResponse(yogaPoses);
};

module.exports = { handler };
