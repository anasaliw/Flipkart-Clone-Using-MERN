import React from 'react'
import { useState } from 'react';
import { ButtonGroup,styled,Button } from '@mui/material';

const BtnGroup=styled(ButtonGroup)`
  border-radius:50%;
`

function GroupButton() {
    const [count,setCount]=useState(1)
    const handlePlus=()=>{
        setCount(prevState=>prevState+1);
    }
    const handleMinus=()=>{
        if (count>0){
        setCount(prevState=>prevState-1);
        }
        else 
        return count
    }

  return (
    <BtnGroup variant='outlined' style={{marginTop:10}}>
        <Button onClick={()=>{handleMinus()}} > - </Button> 
        <Button>{count}</Button>
        <Button onClick={()=>{handlePlus()}} > + </Button>
    </BtnGroup>
  )
}

export default GroupButton