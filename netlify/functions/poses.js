const yogaPoses = require('../../data/yogaPoses.json');

const handler = async (event) => {
  try {
    // Get the "name" query parameter
    const { name } = event.queryStringParameters || {};

    // If "name" is not provided, return an error response
    if (!name) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Please provide a name query parameter.",
        }),
      };
    }

    // Filter yoga poses based on the query parameter
    const results = yogaPoses.filter((pose) =>
      pose.sanskrit_name.toLowerCase().includes(name.toLowerCase())
    );

    // Return the results
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data: results,
      }),
    };
  } catch (error) {
    console.error("Error occurred in the handler:", error);

    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "An internal server error occurred.",
      }),
    };
  }
};

module.exports = { handler };
