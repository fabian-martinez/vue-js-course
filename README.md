# Proyecto inicial - Reforzamiento de JavaScript
* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:
```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.
* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando
```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```
## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo
```
"start": "webpack-dev-server --mode development --open --port=8081"
```
Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)
# Estructura del proyecto
Le proyecto esta constituido por las carpetas:
* **Assets:** Recursos estaticos como estilos e imagens
* **Modulos de node:** Modulos que se utilizan para ejecutar la aplicaciòn
* **Recursos (src):** Se ubica el codigo base de la aplicaciòn
* **Bases:** Se ubica el codigo con el que se hace el reforzamiento
* **Data:** Se ubican unos recursos estaticos que se requieren en el reforzamiento
* **Index.js:** El punto base desde el que se ejecuta el codigo
* **Package:** Dependencias requeridas para ejecutar en desarrollo y en pruebas.
* **Webpack:** Define el despliegue usando webpackage

