const { json } = require("@netlify/functions");
const yogaPoses = require("../../data/yogaPoses.json");

const handler = async (event) => {
  return json(yogaPoses);
};

module.exports = { handler };
