import {styled, Box, InputBase,List,ListItem } from '@mui/material'
import React,{useState,useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getProducts } from '../Redux/Actions/productActions';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const Container=styled(Box)`
background:#fff;
width:450px;
border-radius:2px;
margin-left:10px;
display:flex;

`
const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`
const InputSearchBar=styled(InputBase)`
width:100%;
margin: 0 auto 0 15px;
`
const ListWrapper=styled(List)`
position: absolute;
color: #000;
background: #FFFFFF;
margin-top: 36px;
`
const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;

`


function SearchBar() {
  const [text,setText]=useState();
  const getText=(InputText)=>{
    setText(InputText);
  }
  const { products } =  useSelector(state=>state.getProducts)

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  

  return (
    <Container>
        <InputSearchBar
        onChange={(e)=>getText(e.target.value)}
        placeholder='Search For products, brands and more'
        value={text}
        />
        <SearchIconWrapper>
        <SearchIcon />
        </SearchIconWrapper>
        {
          text && 
          <ListWrapper>
            {
           products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(filteredText=>(
            <ListItem >
              <Link 
                        to={`/product-details/${filteredText.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={()=>setText('')}
                      >
              {filteredText.title.longTitle}
              </Link>
            </ListItem>
           ))
          }
          </ListWrapper>
        }


    </Container>
  )
}

export default SearchBar