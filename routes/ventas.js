const connection = require('../database/config')
const { obtenerVentas, insertarVenta, insertardetalleventa } = require('../database/operacion.ventas')
const { insertarEmpleado, obtenerdatosempleado, actualizarempleado } = require('../database/operaciones.empleados')


const ventas=require('express').Router()

ventas.get('/',(req,res)=>{
    obtenerVentas(connection,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
ventas.post('/ingresarempleado',(req,res)=>{
    const body=req.body
    insertarEmpleado(connection,body,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
ventas.get('/obtnerempleado',(req,res)=>{
    const rfc=req.headers['rfc']
    obtenerdatosempleado(connection,rfc,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
ventas.put('/actualizarempleado',(req,res)=>{
    const body=req.body
    actualizarempleado(connection,body,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
ventas.post('/insertarventas',(req,res)=>{
    const body=req.body
    insertarVenta(connection,body,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)

    })
})
ventas.post('/insertardetalleventas',(req,res)=>{
    const body=req.headers['cadena']
    insertardetalleventa(connection,body,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)

    })
})




module.exports=ventas