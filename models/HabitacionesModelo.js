//Importo las utilidades model y Schema de mongoose
const {model,Schema}=require('mongoose')

//Programar mi modelo de datos
const HabitacionesModelo=Schema({
    NombreHabitacion:{
        type:String,
        required:true
    },
   FotoHabitacion:{
        type:String,
        required:true
    },
    Descripcion:{
        type:String,
        required:true
    },
    PrecioAdultoNoche:{
        type:String,
        required:true
    },
    PrecioNiñoNoche:{
        type:String,
        required:true
    }
   
})

module.exports=model('Habitaciones',HabitacionesModelo)