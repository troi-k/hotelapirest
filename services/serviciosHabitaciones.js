//importo el modelo de datos
const HabitacionesModelo = require('../models/HabitacionesModelo.js')

//Servicio para agregar un documento a la bd
async function insertarHabitacion(datosHabitaciones){

    let HabitacionAInsertar=new HabitacionesModelo(datosHabitaciones)

    return await HabitacionAInsertar.save()

}

async function leerHabitacion(id){
    
    let habitacion=await HabitacionesModelo.findById(id)
    return habitacion
}

async function leerHabitaciones(){

    let habitaciones=await HabitacionesModelo.find()
    return habitaciones
}

async function modificarHabitacion(id,datos){

    return await HabitacionesModelo.findByIdAndUpdate(id,datos)

}

async function borrarHabitacion(id){

    return await HabitacionesModelo.findByIdAndDelete(id)

}
module.exports={
    insertarHabitacion,leerHabitacion,leerHabitaciones,modificarHabitacion,borrarHabitacion
}
