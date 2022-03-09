const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.2' })
const outputFile = 'swagger_output.json'
const endpointsFiles = [
    'index.js'
]

const doc = {
    info: {
        version: '0.0.1',
        title: 'API',
        description: 'API Test'
    },
    components: {
        schemas: {
            test: {
                type: 'object',
                properties: {
                    testProperty1: {
                        type: 'integer',
                        format: 'int32',
                        description: 'test'
                    }
                }
            },
            test2: {
                type: 'object',
                properties: {
                    testProperty2: {
                        type: 'integer',
                        format: 'int32',
                        description: 'test'
                    }
                }
            }
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc)
