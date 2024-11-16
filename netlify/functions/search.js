const { json } = require('@netlify/functions');
const yogaPoses = require('../../data/yogaPoses.json'); 

const handler = async (event) => {
  const { name } = event.queryStringParameters;
  const results = yogaPoses.filter((pose) =>
    pose.sanskrit_name.toLowerCase().includes(name.toLowerCase())
  );
  return json(results);
};

module.exports = { handler };
