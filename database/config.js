require('dotenv').config()
const mysql=require('mysql')
const connection=mysql.createConnection({
    user: process.env.DB_user,
    password:process.env.DB_password,
    host:process.env.DB_host,
    database:process.env.DB_database
})
connection.connect((err,args)=>{
    if(err) throw err
    console.log('Conecatado a la base de datos')
})
module.exports=connection