const router=require('express').Router()
const parkingc=require('../controllers/parkingcontroller')
const regc=require('../controllers/regcontroller')

function handlelogin(req,res,next){
    if(req.session.isAuth){
        next()
    }else{
        res.redirect('/')
    }
}
router.get('/',regc.loginpage)
router.post('/',regc.logincheck)
router.get('/parking',handlelogin,parkingc.parkingpage)
router.get('/logout',regc.logout)
router.get('/add',handlelogin,parkingc.addform)
router.post('/add',handlelogin,parkingc.addentry)
router.get("/exit/:id",handlelogin,parkingc.exit)
router.get('/print/:id',handlelogin,parkingc.print)



module.exports=router