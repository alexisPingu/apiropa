const connection = require('../database/config')
const { insertarColor } = require('../database/operacion.color')

const color=require('express').Router()

color.post('/',(req,res)=>{
    const color=req.body.color
    console.log(color)
    insertarColor(connection,color,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})



module.exports=color