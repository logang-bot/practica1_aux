const {user} = require('../models')
const service = require('../services')
const ctrl = {}

ctrl.create = async(req,res)=>{
    const {foto,nombre,email,password} = req.body
    const newUser  = new user ({foto,nombre,email,password})
    newUser.password = await newUser.encryptPassword(password)
    await newUser.save((err)=>{
        if(err) res.status(500).send({message:'Error al crear el usuario'})
        else{
            console.log(newUser)
            //res.send('usuario registrado')
            return res.status(200).send({token:service.createToken(newUser)})
        }
    })
}
ctrl.login = async (req,res)=>{
    const userr = await user.findOne({email:req.body.email})
    if(!userr){
        return res.status(404).send({message: `no existe el usuario`})
    }
    else{
        const match = await userr.matchPassword(req.body.password)
        if(match){
            req.user = userr
            res.status(200).send({
                message:'te has logueado correctamente',
                token: service.createToken(userr)
            })
        }
        else{
            res.status(401).send({
                message:'el password es incorrecto'
            })
        }
    }
}
module.exports = ctrl