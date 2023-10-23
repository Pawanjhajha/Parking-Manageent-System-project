const Parking=require('../models/parking')


exports.parkingpage=async(req,res)=>{
    try{
        const loginname=req.session.loginname
        const record =await Parking.find()
        res.render('parking.ejs',{loginname, record})
    }catch(error){
        console.log(error)
    }
}
exports.addform=(req,res)=>{
    try{
        const loginname=req.session.loginname
        res.render('parkingform.ejs',{loginname,message:''})
    }catch(error){
        console.log(error)
    }
}
exports.addentry=(req,res)=>{
    try{
    const{vno,vtype}=req.body
    const  intime=new Date()
    const loginname=req.session.loginname
    const record=new Parking({vno:vno,vtype:vtype,vintime:intime,})
    record.save()
    res.render('parkingform.ejs',{loginname,message:'Successfully Entry submitted'})
    }catch(error){
        console.log(error)
    }
}
exports.exit=async(req,res)=>{
    const id=req.params.id
    const loginname=req.session.loginname
    const record=await Parking.findById(id)
    const outtime=new Date()
    const parkingTime=(outtime-record.vintime)/(1000*60*60)//java script milisecond me time deti h to ise hours me convert karege
    let amount=null
    if(record.vtype==='2w'){
        amount=parkingTime*30
    }else if(record.vtype==='3w'){
        amount=parkingTime*50
    }else if(record.vtype==='4w'){
        amount=parkingTime*100
    }else if(record.vtype==='hw'){
        amount=parkingTime*150
    }else if(record.vtype==='lw'){
        amount =parkingTime*120
    }else{
        amount=parkingTime*10
    }
    await Parking.findByIdAndUpdate(id,{vout:outtime,amount:Math.round(amount),status:'OUT'})
    res.redirect('/parking')
}
exports.print=async(req,res)=>{
    try{
    const id=req.params.id
    const record=await Parking.findById(id)
    res.render('print.ejs',{record})
    }catch(error){
        console.log(error)
    }
}