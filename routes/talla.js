const connection = require('../database/config')
const { insertarTalla } = require('../database/operacion.talla')

const talla=require('express').Router()

talla.post('/',(req,res)=>{
    const talla=req.body.talla
    insertarTalla(connection,talla,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})



module.exports=talla