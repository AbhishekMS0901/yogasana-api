const yogaPoses = require("../../data/yogaPoses.json");

const handler = async (event) => {
  try {
    // Get the "name" query parameter from the event
    const { name } = event.queryStringParameters || {};

    // Validate if "name" is provided
    if (!name) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Please provide a name query parameter.",
        }),
      };
    }

    // Filter yoga poses based on the name
    const results = yogaPoses.filter((pose) =>
      pose.sanskrit_name.toLowerCase().includes(name.toLowerCase())
    );

    // Return the filtered results
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Methods": "GET, POST", // Allowed methods
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        success: true,
        data: results,
      }),
    };
  } catch (error) {
    console.error("Error in handler:", error);

    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "An error occurred while processing your request.",
      }),
    };
  }
};

module.exports = { handler };
