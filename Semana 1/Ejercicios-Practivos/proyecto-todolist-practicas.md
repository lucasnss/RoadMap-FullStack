# Prácticas: Proyecto To-Do List en JS Vanilla

## Ejercicio 1: Modelo de Datos Inmutables

Implementa el modelo de datos y operaciones para las tareas:

```javascript
// Acciones para manipular el estado
function createTask(tasks, title) { /* retorna nuevo array con la tarea añadida */ }
function toggleTask(tasks, id) { /* retorna nuevo array con tarea actualizada */ }
function deleteTask(tasks, id) { /* retorna nuevo array sin la tarea */ }
function editTask(tasks, id, newTitle) { /* retorna nuevo array con tarea editada */ }

// Implementa estas funciones manteniendo inmutabilidad (sin modificar el array original)
```

### Solución esperada:
Implementa funciones puras que permitan trabajar con el estado de las tareas de forma inmutable, creando nuevas copias en cada operación.

## Ejercicio 2: Sistema de Eventos

Crea un sistema de publicador/suscriptor para la comunicación entre componentes:

```javascript
const eventBus = {
  // Implementa métodos on, off, emit
  // Debe permitir suscribirse a eventos, cancelar suscripción y emitir eventos
};

// El controlador emite eventos de cambio de estado
// La UI se suscribe a estos eventos para actualizarse
```

### Solución esperada:
Implementa un sistema de eventos que permita desacoplar los componentes de la aplicación, siguiendo el patrón publicador/suscriptor.

## Ejercicio 3: Módulo de Persistencia

Implementa un módulo para guardar y recuperar tareas en localStorage:

```javascript
const storage = {
  // Implementa métodos para guardar, cargar y borrar tareas
  // Maneja errores en caso de localStorage no disponible
  // Implementa esquema de versiones para migración de datos
};
```

### Solución esperada:
Implementa un módulo que gestione la persistencia de las tareas usando localStorage, con manejo de errores y soporte para versiones.

## Ejercicio 4: Renderizado Funcional

Crea funciones puras para renderizar la UI basada en el estado:

```javascript
function renderApp(state, container) {
  // Renderiza toda la aplicación basada en estado actual
}

function renderTaskList(tasks) {
  // Retorna HTML para la lista de tareas basada en el array actual
}

function renderTask(task) {
  // Retorna HTML para una tarea individual
}
```

### Solución esperada:
Implementa un sistema de renderizado declarativo donde la UI se genera a partir del estado actual, sin manipulación directa del DOM.

## Ejercicio 5: Sistema de Filtrado

Añade funcionalidad para filtrar tareas:

```javascript
// Estado ampliado con filtro
const initialState = {
  tasks: [],
  filter: 'all' // 'all', 'active', 'completed'
};

// Implementa funciones para:
// - Cambiar el filtro actual
// - Obtener tareas filtradas según el filtro actual
// - Renderizar controles de filtrado
// - Actualizar UI cuando cambia el filtro
```

### Solución esperada:
Implementa un sistema de filtrado que permita visualizar las tareas según su estado, manteniendo los principios de inmutabilidad y funciones puras.
