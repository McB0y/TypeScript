//tuplas: Los datos deben de cumplir con la estructura
let persona: [string, string, number];

persona = ["Son", "Goku", 30];

let enteros : [number, number, number];

enteros = [10, 20, 30];

let objetos : [any, object, number, string];

objetos = [[], {}, 2000, "cadena"];


//Las enumeraciones son maneras amigables para asignar valores numericos.
//Si se les da u valor por defecto la siguiente variable tendra ese valor + 1

enum Color {Red =10, Green, Blue}
console.log(Color.Red);//10
console.log(Color.Green);//11
console.log(Color.Blue);//12


//Pero cabe señalar que se les puede dar cualquier valor,
//Podriamos decir que en Vanilla JS esto es un objeto.

enum Volumen {sin_sonido=0,
              muy_bajo=2.7,
              medio = 5,
              medio_alto=7.8,
              alto=8.7,
              muy_alto=10
            }

let controlVolumen = (Volumen:enum) => {
  (Volumen.medio === 5 || Volumen.medio_alto === 7.8)?
  console.log("Volumen adecuado"):console.log("Verifique la calidad del volumen");
}


controlVolumen(Volumen);


// NOTE: podemos obtener sus valores así:

//1.-Para traer el parametro.

Volumen[0];//sin_sonido
Volumen[2.7];//muy_bajo
Volumen[5];//medio
Volumen[7.8];//medio_alto
Volumen[8.7];//alto
Volumen[10];//muy_alto


//2.- Para traernos el valor.

Volumen["sin_sonido"];//0
Volumen["muy_bajo"];//2.7
Volumen["medio"];//5
Volumen["medio_alto"];//7.8
Volumen["alto"];//8.7
Volumen["muy_alto"];//10



//NOTE: El siguiente ejemplo generaria un error en TypeScript pues es incompatible.

enum Volumen {string,//TypeScript lo toma como un elemento de nuestra enumeración
              string,//y no como un tipo de dato, por tanto esto generaria una
              string,//duplicidad y por ultimo como error triple.
              any,
              function,
              object
}

console.log(Volumen.string);//Nos regresara 2 que es el ultimo que encontro en la enumeracón
