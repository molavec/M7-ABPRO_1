const { Pool, Client } = require('pg');

const NIVEL = {
  EXPERTO: 'EXPERTO',
  BASICO: 'BASICO'
}

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 5432,
  database: 'm7-abpro_1',
});

pool.connect();

/**
 * add
 */
const addStudent = () => {
  //TODO
  const query = '';
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.tables('result: ', res);  
  });
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
const getStudentByRut = () => {
  //TODO
  const query = '';
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('result: ', res);  
  });
}


/**
 * update Student
 */
const updateStudent = (student) => {
  console.log('Ejecucion update...')
  
  console.log(student.nombre)

  const query = `
    UPDATE estudiante 
    SET 
      nombre='${student.nombre}',
      nivel='${student.nivel}', 
      curso='${student.curso}' 
      WHERE rut='${student.rut}'`;
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      return;
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


// ejecuata la funcion
var data = {
  nombre: 'Juan Perez',
  rut: '11111111-1',
  curso: '1',
  nivel: NIVEL.EXPERTO,
}

var rut = "22222222-2";

var updatestudent1 = {
  nombre: 'Dani Ortega',
  rut: '23321777-5',
  nivel: '7',
  curso: 'guitarra'
}


// addStudent(data);
// getAllStudents();
// getStudentByRut(rut);
updateStudent(updatestudent1);
// deleteStudent(rut);

