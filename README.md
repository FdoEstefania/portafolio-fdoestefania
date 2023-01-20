# portafolio-fdoestefania

# Para volver a publicar con nuevos cambios ejecutar el commando (package gh-pages instalado):

  npm run deploy

  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build", <--- comando
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
            
# Sin antes subir los cambios con:

   1.  git add .
   2.  git commit -m "xxxxxxxxxx"
   3.  git push 
   
