//Aplicando una interfaz sencilla a un objeto:


let computadora: {modelo:string, ram:string, gama:string} = {

  modelo : "Helwett packart (HP)",
  ram : "12GB",
  gama : "Alto desempeño"

};

let smartPhone: { capacidad: string, sistemaOperativo: string, compania: string } = {
  capacidad: "32GB",
  sistemaOperativo: "iOS",
  compania: "AT&T
}


//No quiero validar las estructuras de los objetos siempre y es por esa razón que implemento una interfaz






let computadora:Caracteristicas = {

  capacidad: "1TB",
  sistemaOperativo: "iOS",
  compania: "Apple"

};

let smartPhone:  = {
  capacidad: "32GB",
  sistemaOperativo: "iOS",
  compania: "Apple"
}

interface Caracteristicas {
  capacidad:string,
  sistemaOperativo:string,
  compania:string
}


//NOTE: si se le hace un cambio a las propiedades de los objetos o se quieren agregar nuevas,
//Nos arrojara un error ya que

interface CaracteristicasOpcional {
  capacidad?:string,//Que sea opcional.
  sistemaOperativo?:string,//Que sea opcional
  compania:string,
  encender(orden:string):void{console.log("Enciende!" + orden)},//Todo el que implemente esta interfaz debe implementar este metodo
  apagar?(orden:string):void{console.log("Apagate " + orden)}//En cambio implementar este es opcional
}
