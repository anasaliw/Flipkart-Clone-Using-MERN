import React from 'react'
import {Dialog,styled,Box,Typography,Button, TextField} from '@mui/material'
import { useState } from 'react'
import { SignUpUser,SignInUser } from '../Services/api'
import { DataContext } from '../ContextProvider/DataProvider'
import { useContext } from 'react'


const Image=styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat; 
    width:30%;
    height:91.1%;
    padding:20px 30px;
    
    `
const Component=styled(Box)(({theme})=>({
    height:'70vh',
    width:'90vh',
    display:'flex',
    [theme.breakpoints.down('400')]:{
        flexDirection:'column',
    }
}))
    

const Heading=styled(Typography)`
color:#fff;
font-size:20px;
font-weight:600;
`  
const SubHeading=styled(Typography)`
color:#fff;
font-size:14px;
`    
const Fields=styled(TextField)`
    width:80%;
    
`
const SignUpFields=styled(TextField)`
    margin :10px 20px;
    width:90%;
    
`
const PolicyMsg=styled(Typography)`
    font-size:12px;
    color:#6e6666;
    margin:20px auto 0 auto;
    width:70%;
    
  `
const LoginBtn =styled(Button)`
    color:#fff;
    width:80%;
    font-weight:500;
    text-transform:none;
    background: #FB641B;
    
    : hover {
    color:#6e6666;
    }
`
const OtpBtn=styled(Button)`
    color:#2874f0;
    width:80%;
    font-size:16px;
    font-weight:600;
    text-transform:none;
    background: #FFFF;
    margin: 20px 0;
`
const CreateAccTxt=styled(Typography)`
    margin-top:40px;
    cursor:pointer;
    color: #2874f0;
    font-weight:600;

`
const Wrapper=styled(Box)`
    display:flex;
    flex-direction:column;
    align-items:center;
    flex:1;
    & > div , & > button , & > p {
        margin-top:20px;
    }
    
`
function DialogLogin({open,setOpen}) {

    const handleClose=()=>{
        setOpen(false);
        toggleContainer(render.signIn);
        setError(false);
    }

    const render={
        signIn : {
            view:'login',
            heading:'Login',
            subheading:'Get access to your Orders, Wishlist and Recommendations'
        },
        signUp:{
            view:'signup',
            heading:`Looks like you're new here!`,
            subheading:'Sign up with your mobile number to get started'
            
        }
}

    const [container , toggleContainer]=useState(render.signIn);

    const onContainerChange=()=>{
        toggleContainer(render.signUp);
    }

    //StateManagement
    const initialValue={
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        password:'',
        number:''
    }

    const [signUpValues, setSignUpValues]=useState(initialValue);

    const onValueChange=(e)=>{
        setSignUpValues({...signUpValues,[e.target.name]:e.target.value});
        
    }

    //Showing Name to the user
    const {setAccount}=useContext(DataContext);


    //Handling Post 
    const handleSignUp=async()=>{
        let response = await SignUpUser(signUpValues);
        console.log('not going below');
        if (!response) return;
        console.log('going below');
        handleClose();
        setAccount(signUpValues.username);

    }

    // ! Handling SignUp Values
    const signInValues={
        username:'',
        password:''
    }

    const [signIn,setSignIn]=useState(signInValues)
    
    const onSignInValue=(e)=>{
     setSignIn({...signIn,[e.target.name]:e.target.value});   
    }

    const [error,setError]=useState(false);

    const handleSignIn=async()=>{
      const res =  await SignInUser(signIn);
      if(res.status===200) {
      const username = res.data.data.username;
      handleClose();
      setAccount(username)  
      }
      else{
        setError(true);
      }
    
    }


  return (


    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
    
        <Component>
           
            <Image>
                <Heading>{container.heading}</Heading>
                <SubHeading style={{marginTop:10}}>{container.subheading}</SubHeading>
            </Image>
        
        { container.view === 'login' ? 

                <Wrapper>

                    <Fields placeholder='Enter Username' onChange={(e)=>onSignInValue(e)} name='username' variant='standard' />        
                    {error &&
                     <Typography style={{fontSize:12,color:'red'}}>Please Enter Valid Username And Password</Typography> }
                    
                    <Fields placeholder='Enter Password' onChange={(e)=>onSignInValue(e)} name='password' variant='standard' />        
                    <PolicyMsg>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</PolicyMsg>
                    <LoginBtn onClick={()=>handleSignIn()} variant='standard'>Login</LoginBtn>
                    <Typography style={{color:'#6e6666'}}>OR</Typography>
                    <OtpBtn>Request OTP</OtpBtn>
                    <CreateAccTxt onClick={()=>onContainerChange()}>New to Flipkart? Create an account</CreateAccTxt>
                </Wrapper>
                  
            : 
            <Wrapper>   
                   <SignUpFields onChange={(e)=>onValueChange(e)} variant='standard' placeholder='Enter First Name' name='firstName' required  />
                   <SignUpFields onChange={(e)=>onValueChange(e)} variant='standard' placeholder='Enter Last Name' name='lastName' required />
                    <SignUpFields onChange={(e)=>onValueChange(e)} variant='standard' placeholder='Enter Username' name='username' required />
                    <SignUpFields onChange={(e)=>onValueChange(e)} variant='standard' placeholder='Enter Email' name='email' required />
                    <SignUpFields onChange={(e)=>onValueChange(e)} variant='standard' placeholder='Enter Password' name='password' required />
                    <SignUpFields onChange={(e)=>onValueChange(e)} variant='standard' placeholder='Enter Phone Number' name='number' required />
                    <LoginBtn onClick={handleSignUp}> Continue </LoginBtn>
                </Wrapper>
                
            
        
        }   
        </Component>
        
    </Dialog>
  )
}

export default DialogLogin