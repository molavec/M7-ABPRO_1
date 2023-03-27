const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 5432,
  database: 'm7-abpro_1',
  idleTimeoutMillis: 5000,
  max: 20,
  connectionTimeoutMillis: 2000
});

pool.connect();


/**
 * add
 */
const addStudent = (estudiante) => {
  const query = `
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

  const data = [estudiante.nombre, estudiante.rut, estudiante.curso, estudiante.nivel]

  console.log('query', query)
  pool.query(query, data, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      return -1;
    }
    if(res.rowCount > 0) {
      console.log('Usuario agregado con éxito!');
    } else {
      console.log('No fue posible agregar estudiante!');
    }
    return 0;
  });
  return;
}


/**
 * select all student
 */
const getAllStudents = () => {
  //TODO
  const query = 'SELECT * FROM estudiante;';
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.table(res.rows);  
  });
}


/**
 * select by rut 
 */
const getStudentByRut = (rut) => {
  //TODO
  const query = `select * from estudiante where rut = '${rut}' `;
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.table(res.rows);  
  });
}


/**
 * update Student
 */
const updateStudent = (estudianteEditado) => {
  console.log('Ejecucion update...')
  
  console.log(estudianteEditado.nombre)

  const query = `
    UPDATE estudiante 
    SET 
      nombre='${estudianteEditado.nombre}',
      nivel='${estudianteEditado.nivel}', 
      curso='${estudianteEditado.curso}' 
    WHERE 
      rut='${estudianteEditado.rut}'
    `;
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      return;
    }
    if(res.rowCount > 0) {
      console.log('Se actualiza  el usuario');  
    } else {
      console.log('No se encontró el usuario a actualiza r.');
    }
    
  });
}


/**
 * delete student
 */
const deleteStudent = (rut) => {
  console.log('Ejecucion delete...')
  //TODO
  const query = `DELETE FROM estudiante WHERE rut='${rut}'`;
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      return;
    }

    if(res.rowCount > 0) {
      console.log('Se elimina el usuario');  
    } else {
      console.log('No se encontró el usuario a eliminar.');
    }
  });
}

module.exports = { 
  addStudent,
  getAllStudents,
  getStudentByRut,
  updateStudent,
  deleteStudent
};