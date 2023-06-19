const connection = require('../database/config')
const { obtenerCategorias, obtenerColores, obtenerTallas, obtnerSucursales, insertarProducto, existeProducto, datosProducto, inventarioGeneral, inventarioGeneralCodigo, inventarioGeneralSucursal, inventarioGeneralSucursalCodigo, obtenerActualizar, inventariocategoria, inventariocategoriatalla, inventariocategoriatallacolor, inventariocategoriacolor, datosporsucursal, actualizarProducto, insertarSucursal } = require('../database/operacion.productos')

const productos=require('express').Router()

productos.get('/categorias',(req,res)=>{
    obtenerCategorias(connection,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/colores',(req,res)=>{
    obtenerColores(connection,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/tallas',(req,res)=>{
    obtenerTallas(connection,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/sucursales',(req,res)=>{
    obtnerSucursales(connection,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})

productos.post('/agregar',(req,res)=>{
    const body=req.body
    insertarProducto(connection,body,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/existe',(req,res)=>{
    const clave=req.headers['clave']
    existeProducto(connection,clave,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/datos',(req,res)=>{
    const codigo=req.headers['codigo']
    const sucursal=req.headers['sucursal']
    const body={
        codigo:codigo,
        sucursal:sucursal
    }
    datosProducto(connection,body,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/inventario',(req,res)=>{
    inventarioGeneral(connection,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/inventariocodigo',(req,res)=>{
    const codigo=req.headers['codigo']
    inventarioGeneralCodigo(connection,codigo,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})


productos.get('/obtneract',(req,res)=>{
    const codigo=req.headers['codigo']
    obtenerActualizar(connection,codigo,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/obtcat',(req,res)=>{
    const categoria=req.headers['categoria']
    inventariocategoria(connection,categoria,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/obtcattalla',(req,res)=>{
    const categoria=req.headers['categoria']
    const talla=req.headers['talla']
    console.log(talla)
    inventariocategoriatalla(connection,categoria,talla,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/obtcattallacolor',(req,res)=>{
    const categoria=req.headers['categoria']
    const talla=req.headers['talla']
    const color=req.headers['color']

    inventariocategoriatallacolor(connection,categoria,talla,color,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/obtcatcolor',(req,res)=>{
    const categoria=req.headers['categoria']
    const color=req.headers['color']

    inventariocategoriacolor(connection,categoria,color,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.get('/obtnerdatossucursal',(req,res)=>{
    const codigo=req.headers['codigo']

    datosporsucursal(connection,codigo,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.put('/actualizarProducto',(req,res)=>{
    const codigo=req.headers['codigo']
    const cantidad=req.headers['cantidad']
    const precio=req.headers['precio']
    console.log(codigo)
    const body={
        cantidad:cantidad,
        precio:precio,
        codigo:codigo
    }
    actualizarProducto(connection,body,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
productos.post('/insertarsucursal',(req,res)=>{
    const body=req.body
    insertarSucursal(connection,body,(err,resp)=>{
        if(err) res.status(500).json({message:err.message} || 'Error del servidor')
        else res.status(200).json(resp)
    })
})
module.exports=productos