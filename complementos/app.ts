// // Funciones Básicas
//
//
// function sumar( a:number, b:number ):number{
//   return a + b;
// }
//
// let contar = function( heroes:string[] ):number{
//   return heroes.length;
// }
//
// let superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
//
// contar(superHeroes);
//
// //Parametros por defecto
// function llamarBatman( llamar:boolean = true ):void{
//   if( llamar ){
//     console.log("Batiseñal activada");
//   }else{
//   console.log("La batiseñal fue desactivada.")
//   }
// }
//
//
// llamarBatman();
//
//
// //La siguiente funcion seria utilizando parametros opcionales
//
// function revolucionarios(accion1:string, accion2?:string):string{
//
// 	let mensaje:string = 'los revolucionarios ${accion1} y despues ${accion2}';
// 	return mensaje;
// }
//
//
//
//
//
// // Rest? podemos pasarlo de manera opcional
// function unirheroes( ...personas?:string[] ){
//   return personas.join(", ");
// }
//
//
// // Tipo funcion
//
// /*
//
// Para lo que nos sirve es:
// Las variables no pueden contener tipos de datos que yo no le alla permitido.
// Los argumentos que se le pasan a la función pueden ser delimitados antes de llamar a la fn.
// Puede ser visto como una expresion regular para expresiones "como funciones y objetos"
// ejemplo:
//
// let miFn(): (a:number, b:number) => number;
//
// Es decir que "miFn" haria match con una función querecibe 2 numeros y que regresa un numero,
// si se le pasa alguna función que no haga el match adecuado entonces habra error
//
//
// */
//
//
//
//
//
// function noHaceNada( numero, texto, booleano, arreglo ){
// }
//
// let tipo: (numero:numero, texto:string, booleano:boolean, arreglo:any)=>{
// 	console.log("pues ya esta no hago nada");
// }
//
// // Crear el tipo de función que acepte la función "noHaceNada"
// var noHaceNadaTampoco;


/*
Este es un comentario que quiero agregar para probar que en realidad mi watch esta funcionando
*/
