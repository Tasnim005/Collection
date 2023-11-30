Your `Wallet` class is using private fields (designated by the `#` symbol) to encapsulate the internal state of the wallet. This provides a high level of encapsulation, hiding the details of the balance and transactions from external code. Here's a breakdown of your code:

```javascript
class Wallet {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Not enough funds');
      return;
    }

    this.#processWithdraw(amount);
    this.#balance -= amount;
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this.#transactions.push({
      type: 'deposit',
      amount,
    });
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this.#transactions.push({
      type: 'withdraw',
      amount,
    });
  }

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(500);
wallet.withdraw(100);
console.log(wallet.balance);
```

### Explanation:

1. **Private Fields (`#balance` and `#transactions`):**
   - The `#balance` and `#transactions` are private fields, meaning they are not directly accessible from outside the class.

2. **Deposit and Withdraw Methods:**
   - The `deposit` and `withdraw` methods are public methods that allow external code to interact with the wallet. They call private methods (`#processDeposit` and `#processWithdraw`) to handle the details of the transactions.

3. **Process Deposit and Withdraw Methods:**
   - The `#processDeposit` and `#processWithdraw` methods are private methods responsible for logging the details of the transactions (type and amount).

4. **Getters for Balance and Transactions:**
   - The `balance` and `transactions` getters provide controlled access to the private fields, allowing external code to retrieve the current balance and transaction history.

5. **Usage:**
   - An instance of the `Wallet` class is created, and a deposit of 500 units is made, followed by a withdrawal of 100 units. The final balance is then logged to the console.

Using private fields in this way enhances encapsulation, information hiding, and control over access to the internal state of your `Wallet` class. This is a modern and recommended approach, especially when dealing with sensitive data or when you want to provide a clear and controlled interface for external code.