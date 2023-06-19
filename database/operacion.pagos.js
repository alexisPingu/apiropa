module.exports.obtenerPagos=(conexion,callback)=>{
    conexion.query(
        `CALL PobtnerPagos()`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}