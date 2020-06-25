const router = require('express').Router()
const auth = require('../middlewares/auth')
const user = require('../controllers/user')

router.get('/', (req,res)=>{
    console.log('jflksd')
    res.send({message: 'hola'})
})
router.post('/signUp', user.create)
router.post('/signIn', user.login)
router.get('/private', auth, (req,res)=>{
    res.status(200).send({message:'tienes acceso'})
})

module.exports=router