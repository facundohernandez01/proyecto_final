import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const ItemDetailButtons = ({onAdd}) => {
    const navigate = useNavigate();

        const [agregado, setAgregado] = useState(false);
       
        const alCarrito = (quantity)=>{
            setAgregado(true);
            onAdd(quantity);
    
            
        }

return (
    <>
    <Box    
        component="form"
        sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="off"
          > 
          <TextField
          id="outlined-number"
          label="Cantidad"
          type="number"
          defaultValue={1}
          InputLabelProps={{          
          shrink: true,
          }}
        />
    <Button variant="contained">Añadir al carrito</Button>
    <Button onClick={() => navigate(-1)} variant="contained" color="secondary">← Volver</Button>
    {agregado ? <Button to={"/carrito"}>Ver Carrito</Button>:<Button onClick={()=>{alCarrito()}}>Agregar al Carrito</Button>}

    </Box>
    </>
)
}
