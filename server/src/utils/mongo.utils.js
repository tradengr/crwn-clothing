require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.log(err);
});

async function connectMongo() {
  await mongoose.connect(process.env.MONGO_URL);
}

module.exports = { connectMongo };