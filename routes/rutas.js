const { Router }= require('express')

const rutas= Router()


const {registrarRecerva} = require('../controllers/controladorRecervas.js')
const {buscarRecerva} = require('../controllers/controladorRecervas.js')
const {buscarRecervas} = require('../controllers/controladorRecervas.js')
const {editarRecerva} = require('../controllers/controladorRecervas.js')
const {eliminarRecerva} = require('../controllers/controladorRecervas.js')


const {registrarHabitacion} = require('../controllers/controladorHabitaciones.js')
const {buscarHabitacion} = require('../controllers/controladorHabitaciones.js')
const {buscarHabitaciones} = require('../controllers/controladorHabitaciones.js')
const {editarHabitacion} = require('../controllers/controladorHabitaciones.js')
const {eliminarHabitacion} = require('../controllers/controladorHabitaciones.js')


         
    rutas.get('/avanzada/v1/Recervas',buscarRecervas)

    rutas.get('/avanzada/v1/Recervas/:id',buscarRecerva)

    rutas.post('/avanzada/v1/Recervas',registrarRecerva)

   rutas.put('/avanzada/v1/Recervas/:id',editarRecerva)

    rutas.delete('/avanzada/v1/Recervas/:id',eliminarRecerva)

   

    rutas.get('/avanzada/v1/Habitaciones',buscarHabitaciones)

    rutas.get('/avanzada/v1/Habitaciones/:id',buscarHabitacion)

    rutas.post('/avanzada/v1/Habitaciones',registrarHabitacion)

   rutas.put('/avanzada/v1/Habitaciones/:id',editarHabitacion)

    rutas.delete('/avanzada/v1/Habitaciones/:id',eliminarHabitacion)

    module.exports=rutas 