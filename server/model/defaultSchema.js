import mongoose from 'mongoose';

const defaultSchema=mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    url:{
        type:String,
        required:true,
        
    },
    detailUrl:{
        type:String,
        required:true,
    },
    title:{
        type:Object,
        required:true,
    },
    price:{
        type:Object,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
    },
    discount:{
        type:String,
        required:true,
    },
    tagline:{
        type:String,
        required:true,
    }


},{timestamps:true});

const DefaultSchema=mongoose.model('product',defaultSchema);

export default DefaultSchema