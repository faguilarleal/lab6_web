// import swaggerJsdoc from 'swagger-jsdoc'
// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API',
    },
  },
  apis: ['./*.js'], // Rutas de tus archivos de rutas
}

const specs = swaggerJsdoc(options)

module.exports = specs
