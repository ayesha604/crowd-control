import React from 'react';
import { makeStyles } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#343434',
    color: '#D59F39',
  },
  content: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: theme.spacing(1),
  },
  tagline: {
    fontSize: '1.2rem',
    marginBottom: theme.spacing(3),
  },
  button: {
    backgroundColor: '#ffc107',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#ff9800',
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const handleUploadVideo = () => {
    // Add your upload video functionality here
    console.log('Upload Video button clicked');
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h1" className={classes.heading}>
          CrowdVision
        </Typography>
        <Typography variant="body1" className={classes.tagline}>
          application tagline
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleUploadVideo}
        >
          Upload Video
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;