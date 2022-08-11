import { products } from "./constants/data.js";
import DefaultSchema from "./model/defaultSchema.js";
import User from "./model/user-Schema.js";

const defaultPut=async()=>{
    try {
        await DefaultSchema.insertMany(products);
        console.log('Data Inserted Successfully');
    } catch (error) {
        console.log(error);
    }

}

export default defaultPut;