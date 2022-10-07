# rutas-ciclos

## Propuesta de como organizar las carpetas de un proyecto en vue

```
src/
+-- modules/
|   +-- moduleA/
|   |   +-- componentes/
|   |   +-- services/
|   |   +-- helpers/
|   |   +-- router/
|   |   +-- store/
|   +-- moduleB/
|   +-- moduleC/

```

Intall vue router
```
npm install vue-router@4
```

ubucacion del router de la aplicacion
```
src/
+-- router/
|   +-- router.js
```

 ### Ciclo de vida de Hooks 
 [Ref](https://vuejs.org/guide/essentials/lifecycle.html)

 1. beforeCreate: Se usa cuando se reuiqre una validación antes de que se cree el componente 
 1. created: Se recomienda hacer peticiones http en esta etapa
 1. beforeMount
 1. mounted
 1. beforeUpdate
 1. updated
 1. activated
 1. deactivated
 1. beforeUnmount
 1. unmounted:  limpieza
 1. errorCaptured
 1. renderTracked
 1. renderTriggered

 Donde hacer un llamado a un servicio

 ### Layout
 Componente que internamente tiene otro router-link similar al app.vue
