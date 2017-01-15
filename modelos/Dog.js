//modelos/Dog.ts
"use strict";
var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        return "guau!";
    };
    return Dog;
}());
module.exports = Dog;
