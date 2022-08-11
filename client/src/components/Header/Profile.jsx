import {Menu,MenuItem, Box, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

function Profile({account,setAccount}) {
  const [open,setOpen] = useState(false);

    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return (
    <>
        <Box style={{cursor:'pointer'}}  onMouseOver={handleClick} onClick={handleClick} ><Typography style={{fontWeight:600}} >{account}</Typography></Box>  
        <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{setAccount('')}} onMouseLeave={handleClose}>
            <PowerSettingsNewIcon fontSize='small' color='primary'/>
            <Typography style={{fontSize:14, marginLeft:5}}>Logout</Typography>
        </MenuItem>
      </Menu> 
    </>
  )
}

export default Profile