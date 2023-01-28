const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');

const PORT = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res)=>{
    res.status(200).send("Goto /api-docs for documentation");
});


app.listen(PORT, ()=> console.log(`Server started at ${PORT}`));