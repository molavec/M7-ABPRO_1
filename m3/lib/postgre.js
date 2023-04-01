

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

      console.log(result.rowCount)

      const response = (result.rowCount > 0)
        ? "<p>Usuario logeado exitosamente!</p>" 
        : "<p>Credenciales invalidas</p>" ;
      
      resolve (response +  "<p><a href='/'>Volver</a></p>");

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
const deleteUser = (email) => {
  return new Promise ((resolve, reject) => {
    
    const queryText = `
      DELETE 
      FROM 
        usuarios 
      WHERE 
        email = $1;`
 
    const query = {
      name: 'delete-user-by-email',
      text: queryText,
      values: [email]
    }

    pool.query(query, (err, result) => {
      if (err) reject(err);
      pool.release;

      console.log(result)

      const response = (result.rowCount > 0)
        ? "<p>Usuario eliminado!</p>" 
        : "<p>No se pudo encontrar el usuario</p>" ;
      
      resolve (response +  "<p><a href='/'>Volver</a></p>");

    })

  })
}

module.exports = {
  loginUser,
  registerUser,
  getAllUsers,
  deleteUser
};