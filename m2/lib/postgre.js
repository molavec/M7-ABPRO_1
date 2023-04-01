const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 5432,
  database: 'm7-abpro_2',
  idleTimeoutMillis: 5000,
  max: 20,
  connectionTimeoutMillis: 2000
});

pool.connect();


/**
 * add
 */
const addStudents = (estudiantes) => {
  const queryText = `
    INSERT INTO 
    estudiante 
      (
        nombre,
        rut,
        curso,
        nivel
      ) 
    values
      (
        $1,
        $2,
        $3,
        $4
      );
      `;

  const data = [
    estudiante.nombre,
    estudiante.rut,
    estudiante.curso,
    estudiante.nivel
  ];

  const query = {
    name: 'add-estudiante',
    text: queryText,
    values: data
  };

  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      return -1;
    }
    if(res.rowCount > 0) {
      console.log('Usuario agregado con éxito!');
    } else {
      console.log('No fue posible agregar estudiante!');
    }
    pool.end();
  });
}

module.exports = { 
  addStudents,
};