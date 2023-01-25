import { useParams, useNavigate, Navigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ItemDetailButtons } from "./ItemDetailButtons";
import { CartContext } from "../context/CartContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemDetail = ({productos}) => {
  const { id } = useParams();
  const {addItem} = useContext(CartContext);
  const [producto, setProducto] = useState({ products: [] })


  useEffect(() => {
  fetch(`https://dummyjson.com/products/${id}`)
  .then((response) => response.json())
  .then((json) => setProducto(json))
  },[id])  

  const onAdd = (quantity) =>{
    addItem(productos, quantity);
  }

  return (
    
  <div>
       <h1>{producto.title}</h1>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
          <img src={producto.thumbnail}/>
          </Item>
        </Grid>
        <Grid item xs={4} 
        align='left'>
          <Item>
          <h2>{producto.title}</h2>
          <p>{producto.description}</p>
          <h2>$ {producto.price}</h2>
  <Box>
        <Item>
        <ItemDetailButtons onAdd={onAdd} />
        </Item>
    </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  </div>
  );
};

export default ItemDetail;










