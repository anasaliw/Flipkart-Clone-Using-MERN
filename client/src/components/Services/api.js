import axios from 'axios';

const URL='http://localhost:8000';

export const SignUpUser=async(data)=>{
    try {
       return await axios.post(`${URL}/user-details`,data);

    } catch (error) {
       console.log(error); 
    }

}

export const SignInUser=async(data)=>{
   try {
      return await axios.post(`${URL}/login`,data)
   } catch (error) {
      console.log(error);
      return error;
   }
}

