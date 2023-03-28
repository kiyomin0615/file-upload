const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectDB() {
  const client = await MongoClient.connect('mongodb://0.0.0.0:27017');
  database = client.db('file-demo');
}

function getDB() {
  if (!database) {
    throw { message: 'Database not connected!' };
  }
  return database;
}

module.exports = {
  connectDB: connectDB,
  getDB: getDB,
};
