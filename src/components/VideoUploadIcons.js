import React, { useState } from 'react';
import { IconButton, Stack, CircularProgress } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useNavigate } from 'react-router-dom';

function VideoUploadIcons({ isProcessing, onClick, onFileChange }) {
  return (
    <Stack direction="row">
      {isProcessing ? (
        <CircularProgress sx={{ color: "#D59F39" }} />
      ) : (
        <>
          <IconButton sx={{ color: "#D59F39" }} onClick={onClick}>
            <CameraAltIcon />
          </IconButton>
          <IconButton sx={{ color: "#D59F39" }} onClick={onClick}>
            <DriveFolderUploadIcon />
          </IconButton>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={onFileChange}
          />
        </>
      )}
    </Stack>
  );
}

export default VideoUploadIcons;
