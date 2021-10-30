
const {request,response}= require('express')

const {insertarRecerva}=require('../services/serviciosRecervas.js')
const {leerRecerva}=require('../services/serviciosRecervas.js')
const {leerRecervas}=require('../services/serviciosRecervas.js')
const {modificarRecerva}=require('../services/serviciosRecervas.js')
const {borrarRecerva}=require('../services/serviciosRecervas.js')


async function registrarRecerva(peticion=request,respuesta=response){

    //capturo los datos que llegan el cuerpo de la peticion
    let datosRecervas=peticion.body;
    

    //intentar grabar los datos een bd usando el servicio
    try{

        await insertarRecerva(datosRecervas)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito registrando la Recerva del hotel"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }

   
}

 async function buscarRecerva(peticion=Request,respuesta=response){
  
    let id=peticion.params.id

    try{

        let recerva=await leerRecerva(id)
        respuesta.status(200).json({
            estado:true,
            datos:recerva
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }

}

async function buscarRecervas(peticion=Request,respuesta=response){

    try{

        let recervas=await leerRecervas()
        respuesta.status(200).json({
            estado:true,
            datos:recervas
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }
    


}

async function editarRecerva(peticion=Request,respuesta=response){
    
    let datos=peticion.body
    let id=peticion.params.id

    try{

        await modificarRecerva(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito editando la recerva"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }

}

async function eliminarRecerva(peticion=Request,respuesta=response){
    let id=peticion.params.id

    try{

        await borrarRecerva(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito eliminando la recerva del hotel"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }


}

module.exports={registrarRecerva,buscarRecerva,buscarRecervas,editarRecerva,eliminarRecerva}