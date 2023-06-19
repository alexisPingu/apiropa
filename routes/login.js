const connection = require('../database/config')
const { obtenerDatosUsuario, obtenerTiposUsuarios, insertarSucursales } = require('../database/operacion.login')

const login=require('express').Router()


login.get('/',(req,res)=>{
    const usuario=req.headers['usuario']
    const pass=req.headers['pass']
    const datos={usuario:usuario,pass:pass}
    obtenerDatosUsuario(connection,datos,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})

login.get('/tiposUsuarios',(req,res)=>{
    obtenerTiposUsuarios(connection,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})

login.post('/insertarsucursal',(req,res)=>{
    const body=req.body
    insertarSucursales(connection,body,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})

module.exports=login