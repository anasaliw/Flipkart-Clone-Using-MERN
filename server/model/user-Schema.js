import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    username:{
        type:String,
        required:true,
        trim:true,
        min:5,
        unique:true,
        lowercase:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        min:5,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:5,
       },
    number:{
        type:Number,
        required:true,
        trim:true,
        min:5,
        
    }
    


},{timestamps:true});

const User = mongoose.model('user',userSchema);
export default User;