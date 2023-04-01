const { Pool, Client } = require('pg');
const Cursor = require('pg-cursor');

const HOST = 'localhost';
const USER = 'root';
const PASSWORD = '123456';
const PORT = 5432;
const DATABASE = 'banco';

/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class DatabaseManager {
  static instance;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  constructor() {
    this.pool = new Pool({
      host: HOST,
      user: USER,
      password: PASSWORD,
      port: PORT,
      database: DATABASE,
      idleTimeoutMillis: 5000,
      max: 20,
      connectionTimeoutMillis: 2000
    });
    // this.client = this.pool.connect();
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  static async getInstance() {
      if (!DatabaseManager.instance) {
        DatabaseManager.instance = new DatabaseManager();
        const client = await DatabaseManager.instance.pool.connect();
        DatabaseManager.instance.setClient(client);
      }
      return DatabaseManager.instance;
  }

  setClient(client) {
    this.client = client
  }

  connect() {
    this.pool.connect();
  }

  addTransaction(description, date, amount, account){
    const queryText = `
      insert into transacciones 
        (descripcion, fecha, monto, cuenta) 
      values 
        ($1, $2, $3, $4) 
      returning *;
    `;

    const query = {
      // give the query a unique name
      name: 'add-transaccion',
      text: queryText,
      values: [description, date, amount, account],
    }

    console.log(this.client);

    return new Promise ((resolve, reject)=>{
      this.client.query(query, (err, res) => {
        if (err) reject(err);

        // console.log('res', res);
        this.client.release();
        resolve(res.rows[0]);
      });
    });

  }

  getTransactions(accountId){
    const queryText = `
      select
        * 
      from 
        transacciones 
      where 
        cuenta=$1;
    `;
    const values = [accountId]

    const cursor = this.pool.query(new Cursor(queryText, values));

    return new Promise ((resolve, reject)=>{
      cursor.read(10, (err, res) => {
        if (err) reject(err);
        // console.log(res);
        this.pool.end();
        resolve(res.rows);
      });
    });
  }

  getBalance(accountId){
    const queryText = `
      select saldo from cuentas where id=$1;
    `;

    const query = {
      // give the query a unique name
      name: 'get-transaccions',
      text: queryText,
      values: [accountId],
    }

    return new Promise ((resolve, reject)=>{
      this.pool.query(query, (err, res) => {
        if (err) {
          reject(err);
        }
        //console.log(res);
        resolve(res);
        this.pool.end();
      });
    });
  }

}

module.exports = DatabaseManager;

