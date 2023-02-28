# Plantilla Base de ElectronJS con TypeScript
Este proyecto es una plantilla base para el desarrollo de aplicaciones de escritorio con ElectronJS y TypeScript.

## Requisitos
Antes de comenzar, asegúrese de tener instalado:

- NodeJS
- NPM

## Instalación
Clone el repositorio en su computadora y abra una terminal en la carpeta del proyecto. Ejecute el siguiente comando para instalar las dependencias:

```bash
npm install
```

## Build
Para realizar el build del proyecto, ejecute el siguiente comando en la terminal:
El build copia los archivos dentro de "src" que no son typescript, como assets, a la carpeta dist.

Si necesitas modificar que archivos excluir, debes de editar el package.json.

```bash 
npm run build
```

## Ejecución
Para ejecutar la aplicación, ejecute el siguiente comando en la terminal:

```bash
npm start
```


### Alternativas de package.json

## Package con bundler

```json

{
  "name": "template-app",
  "version": "1.0.0",
  "description": "Template de aplicación de escritorio con Electron con Typescript | Universidad de La Salle Bajío",
  "main": "main.js",
  "scripts": {
    "start": "npm run build && npm run bundle && electron dist/app.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "clean": "rimraf dist/",
    "build": "npm run copy && ./node_modules/.bin/tsc",
    "copy": "copyfiles -u 1 \"src/**/*\" -e \"src/**/*.ts\" dist",
    "watch": "npm run build && nodemon -e ts,html,css -x \"npm run build && npm run bundle\"",
    "bundle": "parcel build dist/web/index.html --no-source-maps --no-content-hash --out-dir dist/web --out-file index.html  --target browser --public-url ./"
  },
  "author": "Escribe tu nombre aquí",
  "license": "ISC",
  "devDependencies": {
    "@types/electron": "^1.6.10",
    "@types/quill": "^2.0.10",
    "copyfiles": "^2.4.1",
    "electron": "^22.2.0",
    "nodemon": "^2.0.20",
    "parcel-bundler": "^1.12.5",
    "rimraf": "^4.1.2",
    "typescript": "^4.9.5"
  },
  "nodemonConfig": {
    "ignore": [
      "**/dist/**"
    ],
    "delay": 2500
  },
  "dependencies": {
  }
}



```


## Package con bundler (window)

```json

{
  "name": "template-app",
  "version": "1.0.0",
  "description": "Template de aplicación de escritorio con Electron con Typescript | Universidad de La Salle Bajío",
  "main": "main.js",
  "scripts": {
    "start": "npm run build && npm run bundle && electron dist/app.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "clean": "rimraf dist/",
    "build": "npm run copy && tsc",
    "copy": "copyfiles -u 1 \"src/**/*\" -e \"src/**/*.ts\" dist",
    "watch": "npm run build && nodemon -e ts,html,css -x \"npm run build && npm run bundle\"",
    "bundle": "parcel build dist/web/index.html --no-source-maps --no-content-hash --out-dir dist/web --out-file index.html  --target browser --public-url ./"
  },
  "author": "Escribe tu nombre aquí",
  "license": "ISC",
  "devDependencies": {
    "@types/electron": "^1.6.10",
    "@types/quill": "^2.0.10",
    "copyfiles": "^2.4.1",
    "electron": "^22.2.0",
    "nodemon": "^2.0.20",
    "parcel-bundler": "^1.12.5",
    "rimraf": "^4.1.2",
    "typescript": "^4.9.5"
  },
  "nodemonConfig": {
    "ignore": [
      "**/dist/**"
    ],
    "delay": 2500
  },
  "dependencies": {
  }
}



```