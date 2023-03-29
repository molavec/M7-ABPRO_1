const DatabaseManager = require('./lib/DatabaseManager');
const dbm = DatabaseManager.getInstance();


const add = async () => {
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
  console.log(result);
  process.exit(0);
};

const get = async () => {
  const accountId = process.argv[3];
  const result = await dbm.addTransaction(accountId);
  console.log(result);
  process.exit(0);
};

const balance = async () => {
  const accountId = process.argv[3];
  const result = await dbm.getBalance(accountId);
  console.log(result);
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








