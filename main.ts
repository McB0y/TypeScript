import Dog = require('./modelos/Dog');
import Animal = require('./modelos/Animal');

function sayHi(animal:Animal){
   console.log("Hola "+ animal.name);
}

sayHi(new Dog("Timmy"));
