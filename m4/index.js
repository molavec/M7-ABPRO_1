const reader = require("readline-sync");
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
  //init 
  const dbm = await DatabaseManager.getInstance();
  const accountId = process.argv[3];
  let result = null;
  let balanceByTransaction = 0;

  // Imprimir balance inicial
  const initBalance = await dbm.getBalance(accountId);
  console.log('===========================')
  console.log('BALANCE INICIAL: ', initBalance.rows[0].saldo )
  console.log('===========================')

  balanceByTransaction = parseInt(initBalance.rows[0].saldo);

  console.log(typeof balanceByTransaction);
  console.log(balanceByTransaction);

  do {

    // obtener transacciones
    result = await dbm.getTransactions(accountId);

    if (result.length > 0) {

      const transactionBalance = result.map((transaction)=>{
        balanceByTransaction += parseInt(transaction.monto);
        return {
          Descripción: transaction.descripcion,
          Fecha: transaction.fecha,
          Monto: transaction.monto,
          Saldo: balanceByTransaction,
        };
      });
      // Resultado con los balances
      console.table(transactionBalance);
      
      // enter
      let line = reader.question("Presiona Enter para continuar...");
      console.log(line);
    } 

  } while(result.length > 0);

  console.log('No hay más transacciones. Programa finalizado!!')
  dbm.closeCursor();
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








