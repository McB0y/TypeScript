/*Models*/
interface Animal{
   name: string;
   makeSound();
}

export = Animal;
//permite llevar modulos de una .ts a otro
//en este ejemplo permite que otros modulos utilicen la interfaz
