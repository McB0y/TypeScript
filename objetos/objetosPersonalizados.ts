//Para poder crear objetos de tipo personalizado tenemos que seguir la siguiente estructura.

let persona: {nombre:string, apellidoPaterno:string, apellidoMaterno:string, edad:number, getNombre:()=>string} = {
  nombre : "Anthony",
  apellidoPaterno : "Cisneros",
  apellidoMaterno : "Stark",
  edad : 37,
  getNombre(){
    return this.nombre;
  }
}
 persona.getNombre();

 //Si se tienen muchas instancias de este objeto este proceso se vuelve tedioso,
 //supongamos que no podemos usar clases, entonces podemos hacerlo de la siguiente forma:



 type Persona = {
   nombre : string,
   apellidoPaterno : string,
   apellidoMaterno : string,
   edad : number,
   getNombre:()=>string
 };

 //NOTE: Cabe mencionar que en el proyecto podriamos crear un archivo de tipos y utilizarlo como plantillas.

 let persona1: Persona = {
   nombre : "Pepper",
   apellidoPaterno : "Valdespino",
   apellidoMaterno : "Pots",
   edad : 37,
   getNombre(){
     return this.nombre;
   }
 }
  persona1.getNombre();
