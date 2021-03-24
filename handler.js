"use strict";

const query = require("querystring");

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello, Serverless!!!!!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.helloUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola Usuario ${event.pathParameters.name}`,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.createUser = async (event) => {
  const body = query.parse(event["body"]);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Petición Crear Usuario`,
        input: `Hola ${body.user}`,
      },
      null,
      2
    ),
  };
};
