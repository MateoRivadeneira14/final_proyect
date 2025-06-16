const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Send Verification Code Service API',
      version: '1.0.0',
      description: 'Servicio para enviar códigos de verificación por correo',
    },
    servers: [
      {
        url: 'http://localhost:3002/api'
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
