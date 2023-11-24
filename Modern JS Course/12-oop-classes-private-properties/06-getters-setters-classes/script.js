/*
const firstName = 'tasnim'
const capitalizeFirst = firstName.split('')[0].toUpperCase().split('')

const rem = firstName.slice(1,firstName.split('').length).split('')
const newArr = [...capitalizeFirst, ...rem]
console.log(newArr.join(''))
*/


// The underscore (_) in front of the property name is a common convention to indicate that the property is intended to be private.

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getter and setter for firstName
  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  // Getter and setter for lastName
  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  // Computed property for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Helper method to capitalize the first letter
  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

// Creating an instance of Person
const person1 = new Person('john', 'doe');

// Using getters to retrieve capitalized first and last names
console.log(person1.firstName); // Outputs: John
console.log(person1.lastName);  // Outputs: Doe

// Using setters to update first and last names and then retrieving the fullName
person1.firstName = 'joe';
person1.lastName = 'smith';
console.log(person1.fullName);   // Outputs: Joe Smith

// Logging the entire object
console.log(person1);
