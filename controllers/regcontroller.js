const Reg=require('../models/reg')

exports.loginpage=(req,res)=>{
    try{
        res.render('login.ejs',{message:''})
    }catch(error){
        console.log(error)
    }
   
}
exports.logincheck=async(req,res)=>{
    try{
    const{us,pass}=req.body
    const record=await Reg.findOne({username:us})
    if(record!==null){
        if(record.password===pass){
            req.session.isAuth=true
            req.session.loginname=us
            res.redirect('/parking')
        }else{
            res.render('login.ejs',{message:'wrong credetails'})
            
        }
    }else{
        res.render('login.ejs',{message:'wrong credetails'})
    }
    }catch(error){
        console.log(error)
    }
}
exports.logout=(req,res)=>{
    req.session.destroy()
    res.redirect('/')
}