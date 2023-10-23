const mongoose=require('mongoose')

const parkingSchema=mongoose.Schema({
    vno:String,
    vtype:String,
    vintime:Date,
    vout:Date,
    amount:Number,
    status:{type:String,default:'IN'}
})


module.exports=mongoose.model('parking',parkingSchema)