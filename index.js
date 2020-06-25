require('./database')
const app =require('./config')

app.listen(app.get('port'),()=>{
    console.log(`servidor corriendo en ${app.get('port')} :)`)
})