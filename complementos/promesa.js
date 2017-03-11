// El siguiente código hace referrencia a las promesas.
let bandera = true;
let iPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("La promesa termino bien");
        if (bandera === true) {
            console.log("Todo termino bien");
            resolve();
        }
        else {
            console.log("Todo termino mal");
            reject();
        }
    }, 3000);
}); // La promesa termino de ejecutarse.
console.log("Empieza el juego");
iPromise.then(() => {
    console.log("Se ejecuto el método resolve()");
}, () => {
    console.log("Se ejecuto el método reject()");
});
