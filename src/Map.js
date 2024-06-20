import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Box, Typography, Button, IconButton, Stack } from '@mui/material';

const containerStyle = {
    width: '70vw',
    height: '70vh',
};

const defaultCenter = {
    lat: 45.530835,
    lng: -73.613303,
};

export default function Map() {
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error("Error getting user's location: ", error);
                }
            );
        }
    }, []);

    return (
    //   <Box className="App" sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={userLocation || defaultCenter}
                zoom={15}
            >
                {userLocation && <Marker position={userLocation} />}
            </GoogleMap>
        </LoadScript>
    //   </Box>
    );
}

