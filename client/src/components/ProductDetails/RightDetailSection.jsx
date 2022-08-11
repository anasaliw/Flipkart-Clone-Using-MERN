import { Box, Typography,styled, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material'
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const SmallText=styled(Box)`
    font-size:14px;
    vertical-align:baseline;
    & > p {
        font-size:14px;
        margin-top:10px;
    }
`

const Badge=styled(LocalOfferIcon)`
    color:#00CC00;
    font-size:15px;
    margin-right:10px;
`
const ColumnText = styled(TableRow)(({theme})=>({
    fontSize: '14px',
    verticalAlign: 'baseline',
    
   ' & > td' : {
        fontSize: '14px',
        marginTop: '10px',
        border:'none',
    },
    [theme.breakpoints.down('md')]:{
    display:'flex',
    flexDirection:'column',
    },
    [theme.breakpoints.down('xs')]:{
        ' & > td ':{
            width:'250px',
        } 
},
}))


const Image=styled('img')(({theme})=>({
  height: '100px',
  [theme.breakpoints.down('sm')]:{
    width:'300px',
    ObjectFit:'cover',
  }
}))

const Container=styled(Box)(({theme})=>({
    paddingLeft:'20px',
    marginLeft:'20px',
    overflow:'hidden',
    background:'#FFF',
    [theme.breakpoints.down('md')]:{
        marginTop:'30px',
        marginLeft:'0px',
        
    }

}))

const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
function RightDetailSection({product}) {
    const date=new Date(new Date().getTime()+(5*24*60*60*1000));
  return (
    <Container >
        <Typography style={{fontWeight:550}} >{product.title.longTitle}</Typography>
        <Typography style={{color:'#878787'}} >8 rating or 1 start
        <span  ><img  style={{width:88, marginLeft:20,marginTop:10 }} src={fassured} alt="assured_logo" /></span>
        </Typography>
        <Typography style={{marginTop:10}}>
            <span style={{fontSize:18,fontWeight:600}} >Rs {product.price.cost}</span> &nbsp;
            <span style={{color:'#878787',fontSize:13}} ><strike>Rs{product.price.mrp}</strike></span>&nbsp;&nbsp;
            <span style={{color:'#26A541',fontWeight:600 }} >{product.price.discount} Off</span>
        </Typography>
        <Typography style={{marginTop:20}} >Available Offers</Typography>
        <SmallText>   
            <Typography><Badge/>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card </Typography>
            <Typography><Badge/> Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
            <Typography><Badge/>Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs </Typography>
            <Typography><Badge/>Partner Offer Extra 10% off upto ₹500 on next furniture purchase </Typography>

        </SmallText>
        
            <Table style={{border:'none',overflow:'hidden'}}>
                <TableBody style={{border:'none'}} >
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }} >Delivery</TableCell>
                        <TableCell style={{fontWeight:600}} >Delivery by {date.toDateString()} | Rs</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }} >Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }} >Seller</TableCell>
                        <TableCell>
                            <Typography style={{ color: '#2874f0' }} >SuperComNet</Typography>
                            <Typography>GST invoice Available</Typography>
                            <Typography>View more seller starting from Rs40</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}> <Image src={adURL} alt=''/> </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }} > Description </TableCell>
                        <TableCell style={{overflow:'hidden'}} > {product.description} </TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
     


    </Container>
  )
}

export default RightDetailSection
