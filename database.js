const mongoose  =require('mongoose')

mongoose.connect('mongodb://172.25.0.2:27017/practica1aux', (err,res)=>{
    if(err){
        console.log(`error al conectar con la bd: ${err}`)
    }
    else{
        console.log('conexion exitosa a la bd :v')
    }
})