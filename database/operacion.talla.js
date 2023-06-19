module.exports.insertarTalla=(conexion,talla,callback)=>{
    conexion.query(
        `CALL PinsertarTalla('${talla}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}