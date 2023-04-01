const { Pool, Client } = require('pg');
const Cursor = require('pg-cursor');

const HOST = 'localhost';
const USER = 'root';
const PASSWORD = '123456';
const PORT = 5432;
const DATABASE = 'clinica';

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

  

}

module.exports = DatabaseManager;

