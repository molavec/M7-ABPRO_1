const DatabaseManager = require('./lib/DatabaseManager');

const add = async () => {
  const dbm = await DatabaseManager.getInstance();

  const description = process.argv[3];
  const date = process.argv[4];
  const amount = process.argv[5];
  const account = process.argv[6];
  
  const result = await dbm.addTransaction(
    description,
    date,
    amount,
    account
  );
  console.log('Último depósito: ', result);
  process.exit(0);
};

const get = async () => {
  const dbm = await DatabaseManager.getInstance();
  const accountId = process.argv[3];
  const result = await dbm.getTransactions(accountId);
  console.table(result);
  process.exit(0);
};

const balance = async () => {
  const dbm = await DatabaseManager.getInstance();
  const accountId = process.argv[3];
  const result = await dbm.getBalance(accountId);
  console.log(result.rows[0]);
  process.exit(0);
};


const command = process.argv[2];

if (command == 'add') { add(); }
else if (command == 'get') { get(); } 
else if (command == 'balance') { balance(); } 
else {
  console.log(`
    No se reconoce el comando ${process.argv[2]}. :(
    Intenta con 'add', 'get' o 'balance'.
  `);
  process.exit(1);
}








