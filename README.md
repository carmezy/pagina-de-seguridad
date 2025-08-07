# Proyecto de Ciberseguridad

Este es un proyecto de una página web para una empresa de ciberseguridad. La página cuenta con un backend y un frontend.

## Descripción

El proyecto consiste en una aplicación web que ofrece servicios de ciberseguridad. Los usuarios pueden registrarse, iniciar sesión y contratar diferentes planes de seguridad.

## Frontend

El frontend está construido con HTML, CSS y JavaScript, utilizando Tailwind CSS para los estilos. Las vistas se encuentran en el directorio `views`.

## Backend

El backend está desarrollado con Node.js y Express. Utiliza MongoDB como base de datos. El backend proporciona una API REST para la autenticación de usuarios, la gestión de servicios y otras funcionalidades.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- **express**: Framework web para Node.js.
- **mongoose**: Herramienta de modelado de objetos de MongoDB.
- **jsonwebtoken**: Para la creación y verificación de JSON Web Tokens.
- **bcrypt**: Para el hash de contraseñas.
- **cookie-parser**: Para el manejo de cookies.
- **cors**: Para habilitar el Cross-Origin Resource Sharing.
- **morgan**: Para el registro de solicitudes HTTP.
- **dotenv**: Para cargar variables de entorno desde un archivo `.env`.
- **nodemailer**: Para el envío de correos electrónicos.
- **nodemon**: Para reiniciar automáticamente el servidor durante el desarrollo.
- **cross-env**: Para establecer variables de entorno en diferentes plataformas.
- **tailwindcss**: Para la creación de interfaces de usuario personalizadas.

## Cómo ejecutar el proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Construir Tailwind CSS:**
   ```bash
   npm run tailwind-build
   ```

3. **Ejecutar en modo de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Ejecutar en modo de producción:**
   ```bash
   npm run start
   ```

   pagina creada por gustavo rodriguez
