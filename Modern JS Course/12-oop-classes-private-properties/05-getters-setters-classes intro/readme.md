Using getters and setters (the first approach) has some advantages over using methods (the second approach) for accessing properties, especially when dealing with properties that are meant to behave like values. Here are some reasons why the first approach is often considered better:

1. **Syntax Consistency:**
   - Getters and setters provide a more consistent and natural syntax when accessing properties. With getters, you can use property access syntax (`wallet.balance`) rather than method invocation syntax (`wallet.balance()`).

2. **Readability:**
   - Getters make the code more readable by allowing you to access properties in a way that looks and feels like reading a property, even though there might be logic behind the scenes.

3. **Ease of Use:**
   - Using getters allows you to access properties without the need for parentheses, making the code feel more like interacting with properties rather than calling methods.

4. **Object Destructuring:**
   - When using getters, you can easily destructure properties from objects. For example:
     ```javascript
     const { balance, transactions } = wallet;
     ```

5. **Consistent with Language Conventions:**
   - Getters are consistent with the conventions of the language and are widely used in modern JavaScript, aligning with the concept of properties in object-oriented programming.

6. **Maintainability:**
   - Using getters allows you to add logic or validation later if needed without changing the way consumers of the class access the properties.

Here's how the usage would look with getters:

```javascript
class Wallet {
  // ... (unchanged)

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
console.log(wallet.balance);       // No parentheses needed
console.log(wallet.transactions);  // No parentheses needed
```

In summary, while both approaches can work, using getters for properties that are meant to behave like values provides a cleaner and more idiomatic syntax in JavaScript. It aligns with language conventions and improves the readability and usability of your code.