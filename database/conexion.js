const mongoose = require('mongoose');

async function conectarBD(){
    try{
        await mongoose.connect(process.env.BASEDATOS);
        console.log("exito conectandonos a la Base de Datos ")

    }catch(error){

        console.log(`fallamos ${error}`)

    }


}

module.exports = {
    conectarBD
}