'use restrict'

const jwt = require('jwt-simple')
const moment = require('moment')
const app = require('../secret')
function createToken(user){
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    }
    return jwt.encode(payload, app.SECRET_TOKEN)
}
function decodeToken (token) {
    const decode = new Promise((resolve, reject)=>{
        try {
            const payload = jwt.decode(token, app.SECRET_TOKEN)

            if (payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'el token ha expirado'
                })
            }
            resolve(payload.sub)
        } catch (err){
            reject({
                status: 500,
                message: 'invalid token'
            })
        }
    })

    return decode
}

module.exports={
    createToken,
    decodeToken
}