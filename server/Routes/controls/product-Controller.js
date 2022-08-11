import DefaultSchema from "../../model/defaultSchema.js"

export const getProducts =async(req,res)=>{
    try {
       const data = await DefaultSchema.find({});
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error);
        
    }
}

export const getProductDetails=async(req,res)=>{
    const id=req.params.id;
    try {
       const response = await DefaultSchema.findOne({'id': id});
        res.status(200).json(response);
        console.log(response);
    } catch (error) {
        res.status(500).json(error.message);
    }

}