# Prácticas: Fundamentos Avanzados de ES6+

## Ejercicio 1: Refactorización ES6

Transforma el siguiente código a sintaxis moderna con destructuración, arrow functions y template literals:

```javascript
function getUserInfo(user) {
  var name = user.name;
  var age = user.age;
  var location = user.location || 'Desconocida';
  
  var message = 'El usuario ' + name + ' tiene ' + age + ' años y vive en ' + location;
  return message;
}
```

### Solución esperada:
Utiliza destructuración para extraer propiedades, parámetros por defecto y template literals para crear el mensaje.

## Ejercicio 2: Inmutabilidad con Spread

Crea una función `addToCart` que añada un producto a un carrito sin modificar el array original, usando spread operator.

```javascript
// Debe funcionar así:
const cart = [{id: 1, name: 'Libro'}];
const newProduct = {id: 2, name: 'Laptop'};
const newCart = addToCart(cart, newProduct); // No debe modificar cart original
```

### Solución esperada:
Implementa la función utilizando el spread operator para crear un nuevo array sin modificar el original.

## Ejercicio 3: Destructuración Avanzada

Extrae datos específicos de una API de películas usando destructuración anidada.

```javascript
const movieData = {
  title: 'Inception',
  director: {
    name: 'Christopher Nolan',
    awards: ['Oscar', 'BAFTA']
  },
  year: 2010,
  cast: ['DiCaprio', 'Gordon-Levitt', 'Page']
};
// Extrae: título, nombre del director, primer premio y primer actor
```

### Solución esperada:
Utiliza destructuración anidada para extraer los datos requeridos en una sola operación.

## Ejercicio 4: Módulos ES6

Implementa un sistema de calculadora dividido en módulos ES6:
- Un módulo para operaciones básicas (suma, resta, multiplicación, división)
- Un módulo para operaciones avanzadas (potencia, raíz cuadrada)
- Un módulo principal que importe los anteriores y exponga una API unificada

### Estructura de archivos:
```
/calculator
  /basic.js - Operaciones básicas
  /advanced.js - Operaciones avanzadas
  /index.js - Módulo principal
  /test.js - Pruebas de la calculadora
```

## Ejercicio 5: Arrow Functions y This

Crea un objeto contador que utilice arrow functions para mantener el contexto de `this`.

```javascript
const counter = {
  count: 0,
  // Implementa métodos increment, decrement y reset usando arrow functions
  // Añade un método delayed que incremente después de 1 segundo
};
```

### Solución esperada:
Implementa los métodos requeridos utilizando arrow functions para preservar el contexto de `this` incluso en operaciones asíncronas.
