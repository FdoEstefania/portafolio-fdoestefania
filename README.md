# Portafolio-fdoestefania detalles de publicacion web

Para volver a publicar en gh-pages [https://fdoestefania.github.io/portafolio-fdoestefania](https://fdoestefania.github.io/portafolio-fdoestefania/) con nuevos cambios.

## Ejecutar los comandos de git 

### `git add .`
### `git commit -m "comentarios"`
### `git push`

Luego ejecutar el comando de NPM del package instalado 
`npm install gh-pages --save-dev` .

### `npm run deploy`

## Detalle del archivo `package.json`

Homepage agregado a la cabecera `"homepage": "https://fdoestefania.github.io/portafolio-fdoestefania"`

Script agregado.

"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }

