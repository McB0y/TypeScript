import Dog = require('./modelos/Dog');
import Animal = require('./modelos/Animal');

function sayHi(animal:Animal){
   console.log("Hola "+ animal.name);
}

/*No se puede ver como es que se hace el require hacia el modulo Dog*/


sayHi(new Dog("Timmy"));

//La manera en la que se estan utilizando la importación de módulos 
//no estan dificil si se implementa typescipt pero haciendo lo con vanillaJS o traceur
//se me hace una buena elección también.
