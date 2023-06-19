const connection = require('../database/config')
const { insertarCantidadesSucursales } = require('../database/operaciones.sucpro')

const sucpro=require('express').Router()


sucpro.post('/insertar',(req,res)=>{
    const body=req.body.data
    insertarCantidadesSucursales(connection,body,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})

module.exports=sucpro