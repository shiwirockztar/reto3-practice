
// swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require('path');
//const app = require('../app');
/*
const options = {
    definition: {
    openapi: "3.0.0",
    info: {
        title: "Node MongoDB API",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:9000"
        }
    ]
},
    apis: [`${path.join(__dirname, "./routes/patients.js")}`],
}

//Docs en JSON format
const swaggerSpec = swaggerJsDoc(options);

const swaggerDocs = (app,port) => {
    app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))
    app.get('/api/v1/docs.json', (req, res) =>{
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

};

module.exports = { swaggerDocs };

module.exports = ({ swaggerDocs }) => {
    // 开放 swagger 相关接口，
    app.get('/swagger.json', function(req, res) {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    }),
        app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))

}*/