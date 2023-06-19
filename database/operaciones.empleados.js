module.exports.insertarEmpleado=(conexion,body,callback)=>{
    conexion.query(
        `Call PinsertarEmpleado(
            '${body.rfc}',
            '${body.nombres}',
            '${body.apellidos}',
            '${body.direccion}',
            '${body.telefono}',
            '${body.correo}',
            '${body.usuario}',
            '${body.constrasenia}',
            ${body.tipo})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.obtenerdatosempleado=(conexion,rfc,callback)=>{
    conexion.query(
        `Call PobtenerEmpleado('${rfc}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.actualizarempleado=(conexion,body,callback)=>{
    conexion.query(
        `call PactualizarEmpleado(
            '${body.rfc}',
            '${body.direccion}',
            '${body.telefono}',
            '${body.correo}',
            '${body.usuario}',
            '${body.pass}',
            ${body.tipo}
            )`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}