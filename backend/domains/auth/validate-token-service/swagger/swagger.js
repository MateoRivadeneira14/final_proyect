const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth Validate Token Service API',
      version: '1.0.0',
      description: 'Servicio para validar JWT',
    },
    servers: [
      {
        url: 'http://localhost:3005/api'
      }
    ]
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec
};
