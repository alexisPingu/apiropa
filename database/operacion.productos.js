module.exports.obtenerCategorias=(conexion,callback)=>{
    conexion.query(
        `CALL PobtenerCategorias()`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.obtenerColores=(conexion,callback)=>{
    conexion.query(
        `CALL PobtenerColores()`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.obtenerTallas=(conexion,callback)=>{
    conexion.query(
        `CALL PobtenerTallas()`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.obtnerSucursales=(conexion,callback)=>{
    conexion.query(
        `CALL PobtenerSucursales()`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}

module.exports.insertarProducto=(conexion,body,callback)=>{
    conexion.query(
        `CALL PinsertarRopa('${body.id}',${body.cantidad},${body.precio},${body.categoria},${body.color},${body.talla})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.existeProducto=(conexion,clave,callback)=>{
    conexion.query(
        `CALL PexisteProducto('${clave}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.datosProducto=(conexion,body,callback)=>{
    conexion.query(
        `CALL PobtenerDatosRopa('${body.codigo}',${body.sucursal})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.inventarioGeneral=(conexion,callback)=>{
    conexion.query(
        `CALL PobtenerRopaGeneral()`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.inventarioGeneralCodigo=(conexion,codigo,callback)=>{
    conexion.query(
        `CALL PobtenerRopaGeneralCodigo('${codigo}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}


module.exports.obtenerActualizar=(conexion,codigo,callback)=>{
    conexion.query(
        `call Pobteneractualizar('${codigo}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.inventariocategoria=(conexion,categoria,callback)=>{
    conexion.query(
        `call PobtenerRopaGeneralcategoria(${categoria})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.inventariocategoriatalla=(conexion,categoria,talla,callback)=>{
    conexion.query(
        `call PobtenerRopaGeneralcategoriatalla(${categoria},${talla})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.inventariocategoriatallacolor=(conexion,categoria,talla,color,callback)=>{
    conexion.query(
        `call PobtenerRopaGeneralcategoriaTallaColor(${categoria},${talla},${color})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.inventariocategoriacolor=(conexion,categoria,color,callback)=>{
    conexion.query(
        `call PobtenerRopaGeneralcategoriaColor(${categoria},${color})`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.datosporsucursal=(conexion,codigo,callback)=>{
    conexion.query(
        `	call obtenerdatosactporzona('${codigo}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}
module.exports.actualizarProducto=(conexion,body,callback)=>{
    conexion.query(
        `call pActualizarProducto(${body.cantidad},${body.precio},'${body.codigo}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}

module.exports.insertarSucursal=(conexion,body,callback)=>{
    conexion.query(
        `call PinsertarSucursal('${body.nombre}' ,'${body.direccion}','${body.contacto}')`,
        (err,res)=>{
            if(err) callback(err,null)
            else callback(null,res)
        }
    )
}