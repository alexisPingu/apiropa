module.exports.insertarCategoria=(conexion,categoria,callback)=>{
    conexion.query(
        `Call PinsertarCategoria('${categoria}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}