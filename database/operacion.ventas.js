module.exports.obtenerVentas=(conexion,callback)=>{
    conexion.query(
        `CALL PobtnerTipoVenta()`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.insertarVenta=(conexion,body,callback)=>{
    conexion.query(
        `INSERT	 INTO  ventas(idVenta,fecha,rfcEmpleado,idSucursal,idCliente,idTipoVenta,idTipoPago,statusVenta) VALUES (DEFAULT,CURRENT_DATE,'${body.rfc}',${body.sucursal},${body.cliente},${body.venta},${body.pago},${body.status})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.insertardetalleventa=(conexion,body,callback)=>{
    conexion.query(
        `INSERT	 INTO detalledeventa
        (idVenta,idRopa,cantidad,precioBase,precioFinal)
         VALUES ${body}`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}



