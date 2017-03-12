 interface Abogado {
  nombre: string;
  especialidad: string;
  ganados: number;
  perdidos: number;
}

// Este objeto implementa la interface Abogado.

 let Jimmy: Abogado = {
   nombre: "James",
   especialidad : "Penal",
   ganados : 56,
   perdidos : 7
 };


 let defender = (defensor: Abogado) => {

   setTimeout (() => {
     console.log("Se levanta la seción, todo mundo de pie...");
   }, 1000);
   setTimeout (() => {
     console.log("Estamos reunidos para jusgar los crimenes de la persona mejor conocida como : Cabeza de Bolo");
   }, 4000);
   console.log("Por favor presentese la defensa.");
   console.log(`Mi nombre es: ${defensor.nombre} McGuill, especialista en Derecho ${defensor.especialidad}`);
   setTimeout (() => {
     console.log(`Ya que hoy pienso ganar el caso su señoria...`);
     console.log(`Su señoria quisiera agregar mis exitos y derrotas, sabiendo que esto no es de relevancia para el caso,
        son ${defensor.ganados} a ${defensor.perdidos}`);
   }, 8000);
};

defender(Jimmy);

export let medico: {} = {
nombre: "Gregorie House",
espcialidad:  "Diagnostico Médico",
nacionalidad: "Americano"
};
