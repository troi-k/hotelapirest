//el controlador se encargara de administrar las peticiones y respuestas

const {request,response}= require('express')

//cuales son las operaciones que debe realizar mi servidor


const {insertarHabitacion}=require('../services/serviciosHabitaciones.js')
const {leerHabitacion}=require('../services/serviciosHabitaciones.js')
const {leerHabitaciones}=require('../services/serviciosHabitaciones.js')
const {modificarHabitacion}=require('../services/serviciosHabitaciones.js')
const {borrarHabitacion}=require('../services/serviciosHabitaciones.js')
//cuales son las operaciones
//que debe realizar mi SERVIDOR
async function registrarHabitacion(peticion=request,respuesta=response){

    //capturo los datos que llegan el cuerpo de la peticion
    let datosHabitaciones=peticion.body;
    

    //intentar grabar los datos een bd usando el servicio
    try{

        await insertarHabitacion(datosHabitaciones)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito registrando la Habitaciona del hotel"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }

   
}

async function buscarHabitacion(peticion=Request,respuesta=response){

    let id=peticion.params.id

    try{

        let habitacion=await leerHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            datos:habitacion
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }

}

async function buscarHabitaciones(peticion=Request,respuesta=response){
    try{

        let habitaciones=await leerHabitaciones()
        respuesta.status(200).json({
            estado:true,
            datos:habitaciones
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }


}

async function editarHabitacion(peticion=Request,respuesta=response){
    let datos=peticion.body
    let id=peticion.params.id

    try{

        await modificarHabitacion(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito editando la habitacion"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }


}

async function eliminarHabitacion(peticion=Request,respuesta=response){
    let id=peticion.params.id

    try{

        await borrarHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito eliminando la habitacion"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }


}

module.exports={registrarHabitacion,buscarHabitacion,buscarHabitaciones,editarHabitacion,eliminarHabitacion}