const { Client } = require('pg')
async function connectBd(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'frodriguez',
    password: 'admin123',
    database: 'tiendavirtual'
  })
  await client.connect();
  return client;
}
module.exports = connectBd;
