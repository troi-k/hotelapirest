const express = require('express')  //importando expres para poderlo usar
const  cors = require('cors')

//traer impoortar la funcion
const {conectarBD} = require('../database/conexion.js')

//traer las rutas

const rutas = require('../routes/rutas.js')

class ServidorModelo{

    constructor (){

        this.app = express()
        this.despertarBD()
        this.llamarAuxiliares()
        this.enrutarPeticiones()


    }

    encenderServidor(){

        this.app.listen(process.env.PORT,function(){
            console.log("servidor encendido..."+process.env.PUERTO)
        })

    }

    enrutarPeticiones(){

        this.app.use('/',rutas)

    
    }


    despertarBD(){

        conectarBD()

    }

    llamarAuxiliares(){
        this.app.use(express.json())
        this.app.use(cors())
    }
}

module.exports = ServidorModelo