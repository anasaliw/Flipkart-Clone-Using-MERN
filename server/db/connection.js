import mongoose from 'mongoose';



export const connection=async(username,password)=>{
const URL=`mongodb://${username}:${password}@anas-shard-00-00.0be97.mongodb.net:27017,anas-shard-00-01.0be97.mongodb.net:27017,anas-shard-00-02.0be97.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-37d5r8-shard-0&authSource=admin&retryWrites=true&w=majority`
try {
   await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true});
   console.log('Connected to Database')
    
} catch (error) {
    console.log(error);
}
}