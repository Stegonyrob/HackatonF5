ECOMMERCEBACKEND


ECOMMERCEBACKEND es el componente del servidor para una aplicación de comercio electrónico, que sigue el patrón de diseño Modelo-Vista-Controlador (MVC). Proporciona la lógica de negocio y la interfaz de programación de aplicaciones (API) necesaria para interactuar con la base de datos y servir solicitudes del cliente.

Patrón Modelo-Vista-Controlador (MVC)
El patrón MVC se utiliza para estructurar aplicaciones web de manera organizada y escalable. Aquí está una breve descripción de cada componente:

Modelo: Representa la capa de datos de la aplicación y encapsula la lógica para acceder y manipular la base de datos, como consultas SQL y operaciones CRUD.
Para ello tenemos la carpeta Model con el archivo ProductsModel.ts.

Vista: Es responsable de presentar los datos al usuario y manejar la interacción del usuario. 
Para ello tenemos la carpeta routes con el archivo ProductsRouter.ts.
Controlador: Actúa como intermediario entre el modelo y la vista, procesando las solicitudes del usuario, interactuando con el modelo y seleccionando la vista adecuada para presentar los resultados al usuario.
Para ello tenemos la carpeta controllers con el archivo ProductController.ts.

El uso del patrón MVC ayuda a separar las preocupaciones en una aplicación, lo que facilita el mantenimiento y la escalabilidad.

Dependencias
Este proyecto se ha construido utilizando las siguientes dependencias:

Express: Un marco de aplicación web para Node.js que proporciona una serie de características para aplicaciones web y móviles.
MySQL2: Un controlador MySQL para Node.js, que es rápido y promueve la programación orientada a objetos.

Dependencias de Desarrollo
Además, se han utilizado las siguientes dependencias para el desarrollo y la gestión del proyecto:

@types/express: Proporciona las definiciones de tipos para Express.js, permitiendo el desarrollo en TypeScript con ayuda y autocompletado.
ts-node-dev: Herramienta que reinicia automáticamente el servidor cuando se detectan cambios en los archivos TypeScript.
TypeScript: Un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. TypeScript es un superset de JavaScript que agrega tipado estático opcional al lenguaje.
Ejecución

Para ejecutar el servidor en un entorno de desarrollo, puedes utilizar el siguiente script:

npm run dev
Este script utiliza ts-node-dev --respawn ./server.ts para ejecutar el archivo server.ts y reinicia automáticamente el servidor cuando se realizan cambios en el código.

Contribución
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y realiza un commit (git commit -am 'Agrega nueva funcionalidad').
Haz un push a la rama (git push origin feature/nueva-funcionalidad).
Abre un pull request.







