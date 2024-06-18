import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Box, Button, styled, Typography } from '@mui/material';
import { Add, Settings } from '@mui/icons-material';

const MyButton = styled(Button)({
  backgroundColor:"#D59F39",
  color:"#E6E6E6",
  margin: 5,
  "&:hover":{
    backgroundColor:"#E6E6E6",
    color:"#D59F39"
  },
});

export default function App() {
  return (
    <Box className="App" sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Navbar sx = {{display: 'flex'}}/>
      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundColor: '#343434',
          color: 'white',
          flex: 1
        }}>
        <h1>CrowdGuard</h1>
        <p>application tagline</p>
        {/* <Button variant="contained" sx = {{ */}
        <MyButton>Upload Video</MyButton>
      </Box>
    </Box>
  );
}

