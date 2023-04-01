

const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 5432,
  database: 'softlife',
  idleTimeoutMillis: 5000,
  max: 20,
  connectionTimeoutMillis: 2000
});

pool.connect();




const loginUser = (email, password) => {
  return new Promise ((resolve, reject) => {
    
    const queryText = `
      SELECT 
        * 
      FROM 
        usuarios 
      WHERE 
        email = $1 AND password = $2;`
 
    const query = {
      name: 'select-mail-password',
      text: queryText,
      values: [email, password]
    }

    pool.query(query, (err, result) => {
      if (err) reject(err);
      pool.release;

      const response = `
      <p>Usuario logeado exitosamente!</p>
      <p><a href='/'>Volver</a></p>
      `
      resolve (response)

    })

  })
}

// funciones softlife
const registerUser = (email, password) => {
return new Promise((resolve, reject) => {
  const query = `INSERT INTO usuarios ( email,  password )
  VALUES (  $1,   $2);`;
  const data = [
    email, password
  ];
  pool.query(query, data, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      reject (err);
    }
    else if (res.rowCount > 0) {
      console.log('Usuario agregado con éxito!');
      resolve(res.rowCount[0]);
    } else {
      console.log('No fue posible agregar estudiante!');
      resolve(null);
    }
  });
});
}

const getAllUsers = () => {
  //Mostrar todos los usuarios
  const promise = new Promise((resolve, reject) => {
    const query = 'SELECT * FROM usuarios;';
    pool.query(query, (err, res) => {
      if (err) {
        console.log('Error: ', err);
        reject(err);
      }
      let arreglo = Object.values(res.rows)
      resolve(arreglo);
    });
  })
  return promise;
};

/**
 * delete student
 */
const deleteUser = (rut) => {
  console.log('Ejecucion delete...')
  //TODO
  const query = `DELETE FROM estudiante WHERE rut='${rut}'`;
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      return;
    }

    if (res.rowCount > 0) {
      console.log('Se elimina el usuario');
    } else {
      console.log('No se encontró el usuario a eliminar.');
    }
    pool.end();
  });
}

module.exports = {
  loginUser,
  registerUser,
  getAllUsers,
  deleteUser
};