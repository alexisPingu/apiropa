const connection = require('../database/config')
const { obtenerPagos } = require('../database/operacion.pagos')


const pagos=require('express').Router()

pagos.get('/',(req,res)=>{
    obtenerPagos(connection,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})


module.exports=pagos