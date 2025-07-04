//Desafío Práctico - Desarrollo Web: Bootstrap, JavaScript y jQuery

Objetivo del Desafío:

Construir en grupo una página web simple, responsive y funcional, 
reforzando los siguientes conceptos:
- Estructura de Proyecto Web estándar (HTML + CSS + JS)
- Uso de Bootstrap 5.3 para diseño responsive.
- Integración de jQuery para manipular elementos del DOM.
- Uso de JavaScript para programación básica.

Práctica de trabajo en equipo con Git, ramas y GitHub.

Requerimientos Técnicos:

1. Estructura de Carpetas:

proyecto_web/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js

2. Tecnologías a Utilizar:

Bootstrap 5.3 (CDN)

jQuery (CDN)

JavaScript (archivos en carpeta js)

3. Página Web a Construir: "Mini Portal de Turismo de Chile"

Header con título: "Turismo Chile" (centrado, con fondo de color usando Bootstrap)

Una sección con 3 cards de Bootstrap, cada una representando un destino:

"Desierto de Atacama" - boton con id="ver_mas_1"

"Torres del Paine" - boton con id="ver_mas_2"

"Isla de Pascua" - boton con id="ver_mas_3"

Cada card debe tener:

- Imagen ilustrativa (pueden ser placeholders)
- Nombre del destino
- Botón "Ver Más"
- Al hacer clic en "Ver Más":
  Con jQuery, mostrar un mensaje debajo de la card: 
  "Próximamente más información de [DESTINO]"

Pie de página con el texto: "Sitio de Ejemplo para el Bootcamp Fullstack Python"

4. Responsividad:

El diseño debe adaptarse correctamente en computadoras y celulares usando Bootstrap.

5. Validaciones:

El botón "Ver Más" no debe recargar la página.




//Ejercicio 2: Interactividad adicional

Ampliar el proyecto agregando:
- Un botón superior "Mostrar Fecha y Hora Actual"
- Al hacer clic:
  -Con JavaScript, mostrar un alert 
   con la fecha y hora actual en formato: dd/mm/yyyy hh:mm:ss

Wireframe Referencial:

 -----------------------------------------------------
|                  Turismo Chile                     |
 -----------------------------------------------------
| [Mostrar Fecha y Hora Actual]                      |
 -----------------------------------------------------
| [Card: Desierto de Atacama]  [Card: Torres...]     |
| [Ver Más]                     [Ver Más]            |
| Mensaje (se muestra con jQuery)                    |
 -----------------------------------------------------
| Pie de página: Sitio de Ejemplo...                 |
 -----------------------------------------------------

Guía de Instrucciones:

1. Un integrante será el Gitmaster, inicializa el repositorio y comparte las ramas.
2. Clonar el proyecto base entregado.
3. Dividir tareas:
- Un miembro del equipo se encarga del HTML.
- Otro del CSS.
- Otro de JavaScript y jQuery.
4. Subir cambios a ramas individuales, luego hacer merge.
5. Testear responsividad y funcionalidad.

Notas Importantes:

Uso obligatorio de Bootstrap para diseño.
Evitar estilos en línea, centralizar CSS en style.css.
Todo código jQuery debe ir dentro de $(document).ready().
El código debe ser comentado y prolijo.
