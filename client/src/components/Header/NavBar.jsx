import React,{useState} from 'react'
import {AppBar,Toolbar,Box,styled, Typography, Drawer,List,ListItemButton, ListItemIcon} from '@mui/material';
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function NavBar() {
    
    
const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';



    const HeaderBar=styled(AppBar)`
    background:#2874f0;
    height:56px;
    
    `
        const DrawerContainer=styled(Box)(({theme})=>({
            [theme.breakpoints.up('700')]:{
                display:'none',
            }
        }))

        const FlipLogo=styled('img')({
            height:20,
            width:75
        })

        const LogoParent=styled(Box)`
            margin-left:12%;
            line-height:0;
        `

        const SubTitle=styled(Typography)`
        font-size:10px;
        font-style:italic;
        `

        const SubLogo=styled('img')({
            height:10,
            width:10,
        })
        const HeadBtn=styled(Box)(({theme})=>({
            margin: '0 1% 0 auto',
            alignItems:'center',
            [theme.breakpoints.down('700')]:{
                display:'none',
            }
        }))
        
        const [open,setOpen]=useState(false);

        const handleOpen=()=>{
            setOpen(true)
        }
        const handleClose=()=>{
            setOpen(false)
        }

        const drawerItems=()=>{
            return(
            <>
              <ListItemIcon onClick={()=>setOpen(!open)}>
                <ArrowBackIcon style={{marginLeft:'auto'}} />
            </ListItemIcon>  
                
            <List>
            
                <ListItemButton>
                    <HeaderButtons/>
                </ListItemButton>
            </List>
            
                </>
            )
        }



    return (
      <HeaderBar position='static'>
        <Toolbar style={{minHeight:56}}>
            <DrawerContainer>
            <MenuIcon onClick={handleOpen} />
            <Drawer style={{transition:1}} open={open} onClose={handleClose} >
                {drawerItems()}
            </Drawer>
            </DrawerContainer>
            <LogoParent>
                <Link to={'/'} style={{textDecoration:'none',color:'inherit'}} >
                <FlipLogo src={logoURL} alt="FlipCart-Logo" />
                <SubTitle>Explore&nbsp;
                    <Box component={'span'} style={{color:'#FFE500', fontWeight:600}}>
                     Plus
                    </Box>
                    <SubLogo src={subURL} alt="sub-Logo" />

                </SubTitle>
                </Link>
                 </LogoParent>
            <SearchBar/>
            <HeadBtn>
                <HeaderButtons/> 
            </HeadBtn>
        </Toolbar>
      </HeaderBar>
  )
}

export default NavBar
