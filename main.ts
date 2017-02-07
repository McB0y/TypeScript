import Dog = require('./modelos/Dog');
import Animal = require('./modelos/Animal');

function sayHi(animal:Animal){
   console.log("Hola "+ animal.name);
}

sayHi(new Dog("Timmy"));

//La manera en la que se estan utilizando la importación de módulos 
//no estan dificil si se implementa typescipt pero haciendo lo con vanillaJS o traceur
//se me hace una buena elección también.
