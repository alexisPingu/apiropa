const connection = require('../database/config')
const { insertarCategoria } = require('../database/operacion.categoria')

const categorias=require('express').Router()

categorias.post('/',(req,res)=>{
    const categoria=req.body.categoria
    console.log(categoria)
    insertarCategoria(connection,categoria,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})


module.exports=categorias