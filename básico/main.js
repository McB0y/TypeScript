"use strict";
var Dog = require("./modelos/Dog");
function sayHi(animal) {
    console.log("Hola " + animal.name);
}
sayHi(new Dog("Timmy"));
