//Los decoradores son funcionalidades extra agregadas a nuestras clases o funciones y siempre regresan una función

function consola(constructor:Function){
  console.log(constructor);
}//Esta función recibe un constructor y lo imprime en la consola.


@consola //NOTE: Este es un decorador y prove de una funcionalidad extra a mi clase.
class Villano{


  constructor(public nombre:string){

  }


}


//Debemos ejecutar con una bandera ya que los decoradores son una fucnión experimental en TypeScrip...

//tsc --experimentalDecorators ---> o ir al archivo tsconfig y habilitar la propiedad dejandola en true





/*********************

Teniendo como ejemplo algunos decoradores:
En este caso sera para permitirles a cirtos villanos dominar el mundo.

**********************/


function planVillano(constructor:Function){
    constructor.prototype.imprimirPlan= function(){
      console.log("El plan de " + " " + this.nombre + " es conquistar el mundo");
    }
}//Lo interesante aqui seria que esta función puede ser agregada a cualquier clase que necesite esto.



function imprimeInstancia(constructor:Function){
    constructor.prototype.imprime = function(){
      console.log(this);
    }
}


@planVillano
@imprimeInstancia
class Villano{


  constructor(public nombre:string){

  }


}


let lex = new Villano("Lex Luthor");
lex.planVillano();//El plan de  Lex Luthor es conquistar el mundo
lex.imprime();



//Usamos decoradores para evitar que sobreescriban nuestras funciones:

//NOTE: USAREMOS METAPROGRAMACIÓN. Recordando que los decoradores entran en acción en tiempo de ejecución.






//DECORADOR DE MÉTODO.
function editable(esEditable:boolean){
  return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){

    if(!esEditable){
      console.warn("JAMAS CAMBIARE MI PLAN DE CONQUISTAR EL MUNDO.");
    }

    descriptor.writable = esEditable;

  }
}



//DECORADOR DE PROPIEDAD.
function editable(esEditable:boolean){
  return function(target:any, nombrePropiedad:string){
    let descriptor:PropertyDescriptor={
      writable:isEditable;
    }
      return descriptor;
  }
}





class Villano{

    public nombre : string;

  constructor(nombre:string){
    this.nombre = nombre;
  }


  @editable(false )//Ahora tendremos protegido el método.
  plan(){
    console.log("Conquistar el mundo!");
  }

}


let lex = new Villano("Lex Luthor");


//Intentando modificar ese método
lex.plan = function(){
  console.log("Es cortar flores");
}


//Viendo los resultados después de intentar modificar el método.
lex.plan();
