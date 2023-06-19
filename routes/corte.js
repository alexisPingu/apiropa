const connection = require('../database/config')
const { insertarEgresos, ventasAnteriores, ventasActuales, egresosAnteriores, egresosActuales } = require('../database/operacion.egresos')


const corte=require('express').Router()

corte.post('/',(req,res)=>{
    const body=req.body
    insertarEgresos(connection,body,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
corte.get('/ventasEfectivoAnteriores',(req,res)=>{
    const sucursal=req.headers['sucursal']
    ventasAnteriores(connection,sucursal,1,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
corte.get('/ventasTarjetaAnteriores',(req,res)=>{
    const sucursal=req.headers['sucursal']
    ventasAnteriores(connection,sucursal,2,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
corte.get('/ventasEfectivoActuales',(req,res)=>{
    const sucursal=req.headers['sucursal']
    ventasActuales(connection,sucursal,1,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
corte.get('/ventasTarjetaActuales',(req,res)=>{
    const sucursal=req.headers['sucursal']
    ventasActuales(connection,sucursal,2,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
corte.get('/egresosAnteriores',(req,res)=>{
    const sucursal=req.headers['sucursal']
    egresosAnteriores(connection,sucursal,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
corte.get('/egresosActuales',(req,res)=>{
    const sucursal=req.headers['sucursal']
    egresosActuales(connection,sucursal,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})



module.exports=corte