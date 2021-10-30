//se trae el modelo de servidor importar
const ServidorModelo = require ('./models/ServidorModelo.js')
//setrae el dotenv
require('dotenv').config()

//puedo personalizar mi servidor
//instanciando clase sacando fotocopia de la clase ,usando la clase, crear un objeto
const servidorJugadores= new ServidorModelo()



//encender el servidor,despertar servidor 

servidorJugadores.encenderServidor()