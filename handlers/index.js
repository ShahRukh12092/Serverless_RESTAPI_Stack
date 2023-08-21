const isNumeric = (value) => {
  return /^\d+$/.test(value);
};

module.exports.returnMessage = async (event) => {
  try {
    let surveyId = event.pathParameters.surveyId;
    if (!isNumeric(surveyId)) throw new Error("Invalid Survey Id");
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "welcome to serverless",
          surveyId,
        },
        null,
        2
      ),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: error.message,
        },
        null,
        2
      ),
    };
  }
};
