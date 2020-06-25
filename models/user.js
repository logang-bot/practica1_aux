const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema  = mongoose.Schema

const user= new Schema({
    foto: String,
    nombre: String,
    email: String,
    password: String
})
user.methods.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10)
    const hash = bcrypt.hash(password,salt)
    return hash
}

user.methods.matchPassword = async function (password){
    return await bcrypt.compare(password,this.password)
}

module.exports = mongoose.model('user', user)

