const AWS = require("aws-sdk");
exports.eliminarTask = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const {id} = event.pathParameters;
  const result = await dynamoDB
    .delete({
      TableName: "tareasTable",
      Key : {
        id
      }
    })
    .promise();
const tarea = result.Item;
  return {
    status: 200,
    body: {
        message: "Tarea eliminada",
      },
  };
};
