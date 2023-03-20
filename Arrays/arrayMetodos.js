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

/**
 * Método unshift -> Agrega un elemento al inicio de array
*/
frutas.unshift("🍉");
console.log(frutas);
frutas.unshift("🍌");
console.log(frutas);

/**
 * Método shift -> Elimina el primer elemento de un array
*/

let frutas2 = ["🍎","🍐","🥥","🍌","🍉"];
frutas2.shift();
console.log(frutas2);
// Puedes guardar el elemento eliminado
let eliminado = frutas2.shift();
console.log(`Elemento eliminado es -> ${eliminado} y mi array quedo ${frutas2}`);

/**
 * Método splice -> Este método nos permite agregar o eliminar datos de un array
 * 
 *      array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 *          start -> Indice donde se comenzará a cambiar el array
 *          delete -> Un entero indicando el número de elementos a eliminar del array antiguo
 */
// 🏍🛺🛥
let transportes = ["🚒","🚙","🚗","🚘","🛵"];
// Agregando un elemento en la posición 2
console.log(transportes);
transportes.splice(2,0,"🏍");
console.log(transportes);
//Agregando un elemento en la posición 4
transportes.splice(4,0,"🛺");
console.log(transportes);
//Elimando solo un elemento, en este caso el de la posición 3
transportes.splice(3,1);
console.log(transportes);
//Si solo dejo el splice con un número entero eliminara los valores que esten en esa posición y posteriores
transportes.splice(2);
console.log(transportes);





