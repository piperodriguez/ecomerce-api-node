const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'frodriguez',
    password: 'admin123',
    database: 'tiendavirtual'
})

module.exports = pool;
