const { Pool, Client } = require('pg');

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const command =  process.argv[2];
console.log('command', command);

if(command == 'nuevo') {
  
  const estudiante = {
    nombre: process.argv[3],
    rut: process.argv[4],
    curso: process.argv[5],
    nival: process.argv[6],
  };

  console.log('Ingresando estudiante', estudiante);

  // addStudent(estudiante);

  return 0;
}
if(command == 'select') {
  console.log('llamando a funcion para obtener los usuarios');
  addStudent(data)
  return 0;
}
if(command == 'getByRut') {
    const rut = {
      rut:process.argv[7]
    }

  console.log('llamando a funcion para eliminar usuario', rut );
  getStudentByRut(rut)
  return 0;
}
if(command == 'actualizar') {
  const estudianteEditado = {
    nombre: process.argv[8],
    rut: process.argv[9],
    curso: process.argv[10],
    nival: process.argv[11],
  };

  console.log('estudiante actualizado', estudianteEditado);

  updateStudent(estudianteEditado)

  return 0;
}
if(command == 'elimina') {
    const rutDelete = {
      rut:process.argv[12]
    }

  console.log('llamando a funcion para eliminar usuario', rutDelete );
  deleteStudent(rutDelete)
  return 0;
}

console.log("no se reconoce ningun comando :(")

  return -1







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
const updateStudent = () => {
  //TODO
  const query = 'SELECT * FROM estudiante';
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('result: ', res);  
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

// addStudent(data);
// getAllStudents();
// getStudentByRut(rut);
// updateStudent(data);
// deleteStudent(rut);

