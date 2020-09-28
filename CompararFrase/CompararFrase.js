const fs = require("fs"),
    NOMBRE_ARCHIVO = "frase.txt";//Aqui va el archivo
    ORACION_ORDENADA="es parte de crecer timmy"//Aqui va la frase
fs.readFile(NOMBRE_ARCHIVO, 'utf8', (error, datos) => {
    if (error) throw error;
    console.log("CONTENIDO ORIGINAL: ", datos);
    fs.writeFile(NOMBRE_ARCHIVO, ORACION_ORDENADA, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("NUEVA ORACION: ", ORACION_ORDENADA);
      console.log("El archivo modificado");
    });
});
