//Es similar a tener una clase con todos sus metodos agrupados y siempre con relación a un tema especifico, ejemplo;


/*************************************************

1.-La forma tediosa de hacer exportaciones:


//Todo lo relativo a la validación.
//NOTE: Todas las propiedades y métodos estan bloqueados, solo accesibles dentro del namespace.
//para accesar se usa la palabra reservada "export" delante de la función o propiedad
//No importa si al dividir los archivos en modulos tenemos muchos namespace con el mismo nombre.
//para dar salida en un solo archivo seria de la siguiente manera:

//tsc --outFile build/app.js "los archivos .ts que seran incluidos en el orden en que se requieran."
//tsc --outFile build/app.js fechas textos app ---> fechas y textos en app

2.-La manera practica y buena "sin uso de los modulos":

/// <refence path="path y archivo que se quiere utilizar">


Solo deberia de utilizar los namespace cuando es un proyecto chico, ya que
1.-Se importa todo el código aunque solo se quiera utilizar una pequeña parte del namespace
2.-No se pueden utilizar funciones o propiedades sino se han declarado antes los namespace
2.-Se vuelve bastante engorroso el codigo de salida generado.
**************************************************/

///<refence path="build/app.ts" />





namespace Validar {

}
