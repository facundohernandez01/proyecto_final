import Sidebar from './Sidebar'
import ResponsiveAppBar from './NavBar'
import Catalogo from './components/ItemListContainer';
import React, { useEffect, useState, useParams } from 'react'
import { Box, Grid, Container } from '@mui/material';
import { Link, Navigate, Route, Routes } from "react-router-dom";
import ItemDetail from './components/ItemDetail';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <>
    <CartContextProvider>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
    <ResponsiveAppBar/>
    {/* <Sidebar/> */}
    </Container>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={1}>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Routes>
          <Route path="/" element={<Catalogo productos={productos} />} />
          <Route path="/productos/:id" element={<ItemDetail />} />
          <Route path="/productos/category/:category" element={<Catalogo productos={productos} />} />
          <Route path="/:category" element={<Catalogo productos={productos} />} />

          </Routes>

            </Grid>
        </Box>

    </Grid>
    </Container>
    </CartContextProvider>

      </>
  )
}

export default App
