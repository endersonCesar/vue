const { Client } = require('pg')
const client = new Client({

    host: 'localhost',
    database: 'dw',
    user: 'postgres',
    password: 'dwdev',
    port: 3307
})



