module.exports.insertarEgresos=(conexion,body,callback)=>{
    conexion.query(
        `call insertar_egresos('${body.descripcion}',${body.cantidad},${body.sucursal},'${body.rfcempleado}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}

module.exports.ventasAnteriores=(conexion,sucursal,pago,callback)=>{
    conexion.query(
        `call PmostrarVentasSucursalPagoanteriores(${sucursal},${pago})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}

module.exports.ventasActuales=(conexion,sucursal,pago,callback)=>{
    conexion.query(
        `call PmostrarVentasSucursalPago(${sucursal},${pago})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}

module.exports.egresosAnteriores=(conexion,sucursal,callback)=>{
    conexion.query(
        `call egregosanteriores(${sucursal})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.egresosActuales=(conexion,sucursal,callback)=>{
    conexion.query(
        `call egregosactuales(${sucursal})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
