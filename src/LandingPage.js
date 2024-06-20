import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Stack, CircularProgress } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Navbar from './components/Navbar';

function VideoUploadIcons({onClick}) {

  const [isProcessing, setIsProcessing] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("File selected: ", file);
            // sending video to backend would happen here
            setIsProcessing(true);
            
            // temporary video processing simulation
            setTimeout(() => {
              setIsProcessing(false);
              console.log("File processed: ", file);
            }, 3000);
        }
    };

    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    }

    return (
      <Stack direction="row">
        <IconButton sx={{color: "#D59F39"}} onClick={onClick}>
          <CameraAltIcon/>
        </IconButton>
        <IconButton sx={{color: "#D59F39"}} onClick={handleUploadClick}>
          <DriveFolderUploadIcon/>
        </IconButton>
        <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileChange}
        />
        {isProcessing && <CircularProgress sx={{ color: "#D59F39" }} />}
      </Stack>
    )
  }
  
  function MyButton({onClick}) {
    return (
      <Button
        onClick={onClick}
        sx={{
          backgroundColor:"#D59F39",
          color:"#E6E6E6",
          "&:hover":{ 
            backgroundColor:"#E6E6E6",
            color:"#D59F39"
          }
        }}
      >
        Upload Video
      </Button>
    )
  }
  
  export default function LandingPage() {
    const [showCamera, setShowCamera] = useState(false);
  
    const toggleIcons = () => {
      setShowCamera(!showCamera);
    };
  
    return (
      <Box className="App" sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
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
          <Typography variant="h2"
              noWrap
              sx={{
                display: 'flex',
                fontFamily: 'Orbitron',
                fontWeight: 700,
                color: '#D59F39',
              }}>CrowdGuard</Typography>
          <Typography variant="h6"
          noWrap
          sx={{
            display: 'flex',
            fontFamily: 'Roboto',
            fontWeight: 300,
            color: 'white',
            margin: 2
          }}>application tagline</Typography>
          {showCamera
            ? <VideoUploadIcons/>
            : <MyButton onClick={toggleIcons}>Upload Video</MyButton>
          }
        </Box>
      </Box>
    );
  }
