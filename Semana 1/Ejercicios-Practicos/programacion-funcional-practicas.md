# Prácticas: Programación Funcional

## Ejercicio 1: Implementación de HOFs

Crea tus propias implementaciones de `map`, `filter` y `reduce` sin usar métodos nativos de array:

```javascript
function myMap(array, fn) {
  // Implementa la función
}

function myFilter(array, fn) {
  // Implementa la función
}

function myReduce(array, fn, initialValue) {
  // Implementa la función
}
```

### Solución esperada:
Implementa estas funciones manteniendo la inmutabilidad y siguiendo los principios de programación funcional.

## Ejercicio 2: Composición de Funciones

Implementa funciones `compose` y `pipe` que permitan combinar múltiples funciones:

```javascript
// compose: ejecuta funciones de derecha a izquierda
// pipe: ejecuta funciones de izquierda a derecha

const add10 = x => x + 10;
const multiply2 = x => x * 2;
const subtract5 = x => x - 5;

// compose(subtract5, multiply2, add10)(5) debería devolver 25
// pipe(add10, multiply2, subtract5)(5) debería devolver 25
```

### Solución esperada:
Implementa ambas funciones que permitan componer funciones en diferentes órdenes, produciendo una nueva función.

## Ejercicio 3: Currying y Aplicación Parcial

Crea una función `curry` que convierta funciones normales en currificadas:

```javascript
// Ejemplo de uso:
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(3); // 6
curriedAdd(1)(2, 3); // 6
```

### Solución esperada:
Implementa la función curry que soporte diferentes combinaciones de parámetros y mantenga la función original.

## Ejercicio 4: Transformación Funcional de Datos

Dado un array de usuarios, utiliza programación funcional para transformar los datos:

```javascript
const users = [
  { id: 1, name: 'John', age: 25, active: true },
  { id: 2, name: 'Jane', age: 30, active: false },
  { id: 3, name: 'Bob', age: 22, active: true },
  { id: 4, name: 'Mary', age: 35, active: false }
];

// 1. Filtrar usuarios activos
// 2. Extraer solo nombres y edades
// 3. Añadir propiedad "adult" basada en si edad >= 25
// 4. Agrupar por adult/non-adult en un objeto
```

### Solución esperada:
Implementa una solución utilizando encadenamiento de métodos funcionales y transformaciones inmutables.

## Ejercicio 5: Funciones Puras y Memoización

Implementa una función de memoización que almacene resultados de funciones puras:

```javascript
function memoize(fn) {
  // Implementa la función para guardar resultados y evitar recálculos
  // Debe funcionar con múltiples argumentos
}

// Pruébala con una función costosa como cálculo de fibonacci
const fib = n => n <= 1 ? n : fib(n-1) + fib(n-2);
const memoFib = memoize(fib);
```

### Solución esperada:
Implementa una función de memoización que pueda trabajar con cualquier función pura y almacene los resultados para futuras llamadas.
