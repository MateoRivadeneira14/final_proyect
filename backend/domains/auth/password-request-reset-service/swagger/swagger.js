const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth Password Request Reset Service API',
      version: '1.0.0',
      description: 'Servicio para solicitar restablecimiento de contraseña',
    },
    servers: [
      {
        url: 'http://localhost:3006/api'
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
