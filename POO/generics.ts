//Los genericos son funciones que nos permiten tener controlado el tipado de nuestra aplicación,
//pero manteniendo la flexibilidad de programación de Javascript, por ejemplo tener funciones que reciben
//cualquier tipo de dato y que regresen un dato en especifico:



function regresar <T> (parametro:T){
  return parametro;
}


console.log(   regresar( 3.1416 ).toFixed   );
console.log(   regresar(  "Hola soy una cadena").charAt(0)   );
console.log(   regresar(  new Date()  ).getDay();


//Con esto nos evitariamos escribir más codigo escribiendo funciones con dif retornos.






//Función generica en acción:

function generica<T> (arg :T){
  return arg;
}

type Heroe = {
  nombre : string,
  nemesisVillano : string
};

type Villano = {
  nombre : string,
  nemesisHeroe : string
};




//Puede ser cualquiera de los tipos de dato que creamos.
let deadpool = {
  nombre: "DeadPool",
  nemesisHeroe : "Logan",
  nemesisVillano : "Craneo Rojo"
}
console.log(   generica<Villano>(deadpool).nemesisHeroe   );//Manejalo como un Villano
console.log(   generica<Heroe>(deadpool).nemesisVillano   );//Manejalo como un Heroe

//Podemos ver que seguimos teniendo el control de la aplicación.






//Clases genericas.


//La siguiente forma es correcta pero se le esta delegando a typescript muchas cosas que puede mejorar.
class Cuadrado {
  base;
  altura;
  public area(base:number, altura:number):number{
    return (base * altura);
  }
}

let nuevoCuadrado = new Cuadrado();
nuevoCuadrado.base =10;
nuevoCuadrado.altura =10;
console.log(nuevoCuadrado.area(base, altura));



//La siguiente forma nos permite mantener el control y tener libertades de programación:

class Cuadrado <T extends number | string>{
  base : T;
  altura:T;
  public area(base:number, altura:number):number{
    return (this.base * this.altura);
  }
}

let nuevoCuadrado = new Cuadrado<number|string>();
nuevoCuadrado.base =10;
nuevoCuadrado.altura =10;
console.log(nuevoCuadrado.area(base, altura));
