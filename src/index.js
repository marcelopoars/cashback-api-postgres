require('dotenv').config()

const express = require('express');

const swaggerUi = require('swagger-ui-express');

const cors = require('cors')

const { routes } = require('./modules/routes');

const metaData = require('./config/metaData');

const swaggerDocument = require('./swagger.json');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.use(routes);

app.get('/', (_, res) => {
  res.json(metaData);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((_, res, next) => {
  res.status(404).send({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!🚀\n`);
});
