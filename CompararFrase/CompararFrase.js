var fs = require('fs')
var archivo = fs.readFileSync('./frase.txt', 'utf-8')//Aqui se lee el archivo

var a = "es parte de crecer timmy"//Aqui se cambia la frse
var espacio = " "
var ordenada = ""

original = a.split(espacio)
mala = archivo.split(espacio)

aux = []

for(var i=0; i<mala.length; i++){
  for(var j=0; j<mala.length; j++){
    if(mala[i]==original[j]){
      aux[j]=mala[i]
    }
  }
}

for(var i=0; i<aux.length; i++){
  ordenada+=aux[i]+ " "
  console.log(ordenada)
}
