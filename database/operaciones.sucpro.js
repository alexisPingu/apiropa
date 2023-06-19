module.exports.insertarCantidadesSucursales=(conexion,cuerpo,callback)=>{
    conexion.query(
        `INSERT ropasucursal VALUES${cuerpo}`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}