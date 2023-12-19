// app.mjs
// Importing named exports (partial or selective)
import { firstName, sayHello } from './myModule.mjs';
console.log(firstName);
sayHello();

// Importing the entire module
import * as myModule from './myModule.mjs';
console.log(myModule.country.name);
