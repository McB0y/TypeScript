// Funciones Básicas
function sumar( a:number , b:number ):number{
  return a + b;
}

var contar = function( heroes:string[] ):number{
  return heroes.length;
}
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar:string = "Batman" ){
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
let personas:string[] = ["Miguel", "Rafael", "Gabriel", "Angie", "Benja"];
function unirheroes( ...personas:string[] ){
  return personas.join(", ");
}

//COmo son parametros rest debemos de mandar una lista cuyos valores haran match con JS.


function noHaceNada( numero?:number, texto?:string, booleano?:boolean, arreglo?:any[] ):void{
  numero=4;
  texto = `Yo soy un texto`;
  booleano = true;
  arreglo = ["Carrusel", 23, {precio:5, rebaja:1}];
  console.log(numero);
  console.log(texto);
  console.log(booleano);
  console.log(arreglo);
}
noHaceNada()

//cumple la condicion;
let noHaceNadaTampoco: (a: number, b: string, c: boolean, d: any[]) => void;

noHaceNadaTampoco = noHaceNada;
