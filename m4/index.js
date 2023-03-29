const DatabaseManager = require('./lib/DatabaseManager');

const dbm = DatabaseManager.getInstance();
const command = process.argv[2];

if(command == 'add') {
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

if(command == 'get') {
  const accountId = process.argv[3];
  const result = await dbm.addTransaction(accountId);
  console.log(result);
  process.exit(0);
};

if(command == 'balance') {
  const accountId = process.argv[3];
  const result = await dbm.getBalance(accountId);
  console.log(result);
  process.exit(0);
};

console.log("no se reconoce ningun comando :(")
process.exit(1);






