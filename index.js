const { Pool, Client } = require('pg');
// const connectionString = 'postgresql://postgres:example@localhost:5432/m7-abp_1';

const connectionString = 'postgresql://usuario:123456@localhost:5432/usuarios';

const pool = new Pool({
  connectionString,
});

pool.query('select now()', (err, res) => {
  console.log(err, res);
  pool.end();
})

const client = new Client({
  host: 'localhost',
  user: 'usuario',
  password: '123456',
  port: 5432,
  database: 'usuarios',
});

client.connect();
client.query('select now()', (err, res) => {
  console.log(err, res);
  client.end();
});