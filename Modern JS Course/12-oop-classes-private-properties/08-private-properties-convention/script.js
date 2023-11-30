// See README File
// First Approach
class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough funds');
      return;
    }

    this._processWithdraw(amount);
    this._balance -= amount;
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this._transactions.push({
      type: 'deposit',
      amount,
    });
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this._transactions.push({
      type: 'withdraw',
      amount,
    });
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance);
console.log(wallet.transactions);


console.log(wallet._balance)
/* (underscore convention), using an underscore before a property (e.g., _balance) is more of a naming convention rather than a true access control mechanism in JavaScript. It signals to other developers that the property is intended to be private, but it does not actually prevent external code from accessing or modifying it.

So, if you use console.log(wallet._balance), it will still show the balance even though it's prefixed with an underscore. The underscore convention relies on developers following the convention and not directly accessing properties with an underscore from outside the class. However, there's no enforcement by the language itself.

In contrast, using private fields (#balance) provides a more robust form of encapsulation because private fields are not accessible from outside the class, even if you try to access them with similar syntax (e.g., console.log(wallet.#balance)).

If true encapsulation and access control are crucial for your design, especially if you want to prevent accidental misuse by other developers, using private fields would be more suitable. However, it's essential to note that private fields might not be supported in all JavaScript environments, and the underscore convention is a more widely recognized practice.
*/

// Private fields wll be discussed in the upcoming lessons.


// Second Approach (Direct Properties and Methods)
/*
class Wallet{
  constructor(){
    this.balance = 0
    this.transactions = []
  }

  deposit(amount){
    this.processDeposit(amount)
    this.balance += amount
  }

  processDeposit(amount){
    console.log(`Depositing ${amount}`)

    this.transactions.push({
      type: 'Deposit',
      amount
    })
  }

  withDraw(amount){
    if(amount>this.balance){
      console.log('Not enough funds')
      return
    }

    this.processWithdraw(amount)
    this.balance -= amount
  }

  processWithdraw(amount){
    console.log(`Withdrawing ${amount}`)

    this.transactions.push({
      type: 'Withdraw',
      amount,
    })
  }

  get transactionsRecord(){
    return this.transactions
  }

  get finalBalance(){
    return this.balance
  }

}

const wallet = new Wallet()
console.log(wallet)
wallet.deposit(1000)
wallet.withDraw(500)

console.log(wallet.finalBalance)
console.log(wallet.transactionsRecord)
*/

