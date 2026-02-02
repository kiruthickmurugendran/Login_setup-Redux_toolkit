import React from 'react';
import Navbar from '../components/navbar';
import { Container, Typography, Button, Stack, Box } from '@mui/material';
import Form from '../pages/form';


const App = () => {


  return (
    <>
    <Navbar />
    <Box component="main" sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>   
      <Container maxWidth="sm">
        <Form/>
      </Container>
    </Box>
   

    
    
    </>
  );
};

export default App;