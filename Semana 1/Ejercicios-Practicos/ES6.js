/* Ejercicio 1 Refactorizacion ES6 
Transforma el siguiente código a sintaxis moderna con destructuración,
arrow functions y template literals:
*/

function getUserInfo(user) {
  var name = user.name;
  var age = user.age;
  var location = user.location || 'Desconocida';
  
  var message = 'El usuario ' + name + ' tiene ' + age + ' años y vive en ' + location;
  return message;
}

/* Ejercicio 2: Inmutabbilidad con Spread 
Crea una función addToCart que añada un producto a un carrito sin modificar el array original,
usando spread operator.
*/
