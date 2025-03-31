# Prácticas: Programación Asíncrona

## Ejercicio 1: Simulador de Operaciones Asíncronas

Crea funciones que simulen operaciones con diferentes tiempos de respuesta:

```javascript
// Implementa estas funciones usando setTimeout y Promises:
function fetchUserData() { /* simula obtener datos de usuario (500ms) */ }
function fetchUserPosts(userId) { /* simula obtener posts (800ms) */ }
function fetchPostComments(postId) { /* simula obtener comentarios (600ms) */ }

// Después implementa una función que use async/await para obtener 
// datos de usuario, sus posts y comentarios del primer post
```

### Solución esperada:
Implementa las funciones que retornen promesas simulando tiempos de respuesta variables, y una función principal que encadene estas operaciones con async/await.

## Ejercicio 2: Retry con Backoff Exponencial

Implementa una función que reintente una operación con tiempo de espera creciente:

```javascript
async function fetchWithRetry(url, options = {}, maxRetries = 3, delay = 1000) {
  // Implementa una función que:
  // 1. Intenta hacer fetch a la url
  // 2. Si falla, espera 'delay' ms y reintenta
  // 3. En cada reintento, duplica el tiempo de espera (backoff exponencial)
  // 4. Después de maxRetries, propaga el error
}
```

### Solución esperada:
Implementa la función con manejo de errores, reintento con tiempos crecientes y control del número máximo de intentos.

## Ejercicio 3: Conversor de Callbacks a Promesas

Crea un "promisificador" que convierta funciones basadas en callbacks al estilo de promesas:

```javascript
function promisify(fn) {
  // Implementa la función que convierta callbacks estilo Node (error-first)
  // a funciones que devuelvan promesas
}

// Ejemplo de uso:
function readFileCallback(path, options, callback) {
  // simula fs.readFile
  setTimeout(() => {
    if (path.includes('error')) callback(new Error('File not found'));
    else callback(null, 'file content');
  }, 1000);
}

const readFilePromise = promisify(readFileCallback);
// Ahora debería poder usarse: readFilePromise('file.txt').then(...)
```

### Solución esperada:
Implementa la función promisify que convierta cualquier función con callback en estilo Node a una función que retorne promesas.

## Ejercicio 4: Gestor de Tareas Asíncronas con Control de Concurrencia

Implementa un sistema que procese tareas en paralelo pero con límite de concurrencia:

```javascript
async function processTasksWithConcurrencyLimit(tasks, concurrencyLimit) {
  // Implementa una función que:
  // 1. Reciba un array de funciones asíncronas (tasks)
  // 2. Las ejecute en paralelo, pero manteniendo máximo 'concurrencyLimit' tareas activas
  // 3. Devuelva array con resultados en el mismo orden que las tareas
}
```

### Solución esperada:
Implementa un sistema que permita controlar cuántas tareas asíncronas se ejecutan simultáneamente, respetando el límite de concurrencia pero manteniendo el orden de los resultados.

## Ejercicio 5: Observables Simples

Implementa una versión básica del patrón Observable para eventos asíncronos:

```javascript
class SimpleObservable {
  // Implementa métodos:
  // - subscribe(observer)
  // - unsubscribe(observer)
  // - notify(data)
  // Bonus: implementa operadores como map, filter, debounce
}

// Ejemplo de uso para crear un observable que emita cada segundo:
const counter$ = new SimpleObservable();
let count = 0;
const interval = setInterval(() => {
  counter$.notify(count++);
  if (count > 10) clearInterval(interval);
}, 1000);
```

### Solución esperada:
Implementa una clase que permita implementar el patrón Observer/Observable para manejar eventos asíncronos, con soporte para suscripción, cancelación y notificación.
