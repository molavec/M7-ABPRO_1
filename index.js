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


const command = process.argv[2];

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
        '${estudiante.nombre}',
        '${estudiante.rut}',
        '${estudiante.curso}',
        '${estudiante.nivel}'
      );
      `;

  console.log('query', query)
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
  const query = `select * from estudiante where rut = ${rut.rut} `;
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
const updateStudent = (estudianteEditado) => {
  console.log('Ejecucion update...')
  
  console.log(estudianteEditado.nombre)

  const query = `
    UPDATE estudiante 
    SET 
      nombre='${estudianteEditado.nombre}',
      nivel='${estudianteEditado.nivel}', 
      curso='${estudianteEditado.curso}' 
      WHERE rut='${estudianteEditado.rut}'`;
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

if(command == 'nuevo') {
  const estudiante = {
    nombre: process.argv[3],
    rut: process.argv[4],
    curso: process.argv[5],
    nivel: process.argv[6],
  };
  // console.log('Ingresando estudiante', estudiante);
  addStudent(estudiante);
  return;
};

if(command == 'traer') {
  console.log('llamando a funcion para obtener los usuarios');
  getAllStudents();
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
return -1;






