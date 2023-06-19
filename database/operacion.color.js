module.exports.insertarColor=(conexion,color,callback)=>{
    conexion.query(
        `CALL PinsertarColor('${color}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}