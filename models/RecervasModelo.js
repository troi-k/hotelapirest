//Importo las utilidades model y Schema de mongoose
const {model,Schema}=require('mongoose')

//Programar mi modelo de datos
const RecervasModelo=Schema({
    nombre:{
        type:String,
        required:true
    },
   apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    fechaInRes:{
        type:String,
        required:true
    },
    fechaFinRes:{
        type:String,
        required:true
    },
    NroPersonas:{
        type:String,
        required:true
    }
})

module.exports=model('recervasHotel',RecervasModelo)