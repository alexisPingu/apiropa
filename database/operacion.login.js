module.exports.obtenerDatosUsuario=(conexion,body,callback)=>{
    conexion.query(
        `CALL PobtenerDatosUsuario('${body.usuario}','${body.pass}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.obtenerTiposUsuarios=(conexion,callback)=>{
    conexion.query(
        `CALL PmostrarTipoUsuario()`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}


module.exports.insertarSucursales=(conexion,body,callback)=>{
    conexion.query(
        `CALL PinsertarSucursal('${body,nombre}','${body.direccion}','${body.contacto}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}