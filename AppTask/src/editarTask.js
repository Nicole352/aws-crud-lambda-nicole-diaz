const AWS = require("aws-sdk");
exports.editarTask = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  const { completada, titulo, descripcion } = JSON.parse(event.body);
  await dynamoDB
    .update({
      TableName: "tareasTable",
      Key: {
        id,
      },
      UpdateExpression: "set completada = :completada, titulo = :titulo, descripcion = :descripcion",
      ExpressionAttributeValues: {
        ":completada": completada,
        ":titulo": titulo,
        ":descripcion": descripcion,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();
  return {
    status: 200,
    body: JSON.stringify({
    massage: "Tarea actualizada correctamente",
    }),
  };
};
//Ejemplo body
// {
//     "completada": true,
//     "titulo": "HOLI bOLI",
//     "descripcion": "LKDMSVKFD"
// }