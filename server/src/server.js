require('dotenv').config();
const http = require('http');

const app = require('./app');
const { connectMongo } = require('./utils/mongo.utils');

const server = http.createServer(app);
const PORT = process.env.PORT;

async function serverStart() {
  await connectMongo();
  server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  });
}

serverStart();
