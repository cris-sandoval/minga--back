import mongoose from "mongoose"

let schema = new mongoose.Schema ({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    is_online: {type:Boolean},
    is_admin:{type:Boolean},
    is_company:{type:Boolean}

},{
    timestamps: true
})

let User = mongoose.model('users',schema)

export default User