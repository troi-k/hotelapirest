
const RecervasModelo = require('../models/RecervasModelo.js')


async function insertarRecerva(datosRecervas){

    let RecervaAInsertar=new RecervasModelo(datosRecervas)

    return await RecervaAInsertar.save()

}

async function leerRecerva(id){
    
    let recerva=await RecervasModelo.findById(id)
    return recerva
}

async function leerRecervas(){

    let recervas=await RecervasModelo.find()
    return recervas
}

async function modificarRecerva(id,datos){

    return await RecervasModelo.findByIdAndUpdate(id,datos)

}

async function borrarRecerva(id){

    return await RecervasModelo.findByIdAndDelete(id)

}




module.exports={
    insertarRecerva,leerRecerva,leerRecervas,modificarRecerva,borrarRecerva
}
