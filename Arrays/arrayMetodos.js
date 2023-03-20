/**
 * Metodo push -> Agrega al final del array
*/

let personas = ["Emiliano"];
console.log(personas)
personas.push("Alejandro");
personas.push("Juan");
personas.push("Diego");
personas.push("Sebastian");

console.log(personas);

/**
 * Método pop -> Elimina el último elemento del array
 */

let frutas = ["🍎","🍐","🥥","🍌","🍉"];
console.log(frutas);
frutas.pop();
console.log(frutas);
// Puedes guardar el valor borrado en una variable
let datoEliminado = frutas.pop()
console.log(frutas, `El dato eliminado es: ${datoEliminado}`);