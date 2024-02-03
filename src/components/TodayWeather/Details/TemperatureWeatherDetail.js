import { Box, Button, Typography } from '@mui/material';
import React, {useState} from 'react';
const TemperatureWeatherDetail = (props) => {
  const [temperatureUnit, setTemperatureUnit] = useState('celsius');
  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === 'celsius' ? 'fahrenheit' : 'celsius'));
  };
  const displayTemperature = () => {
    if (temperatureUnit === 'celsius') {
      return `${Math.round(props.temperature)} °C`;
    } else {
      // Convert Celsius to Fahrenheit: (Celsius * 9/5) + 32
      const fahrenheit = Math.round((props.temperature * 9/5) + 32);
      return `${fahrenheit} °F`;
    }
  };
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: '600',
          fontSize: { xs: '12px', sm: '14px', md: '16px' },
          color: 'white',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '8px',
          fontFamily: 'Poppins',
        }}
      >
        {/* {Math.round(props.temperature)} °C */}
        <Box display="flex" gap={4} alignItems="center">
        {displayTemperature()}
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={toggleTemperatureUnit}
        >
          Change Unit
        </Button>
    </Box>

      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: '10px', sm: '12px', md: '14px' },
          color: 'rgba(255,255,255, .7)',
          lineHeight: 1,
          letterSpacing: { xs: '1px', sm: '0' },
          fontFamily: 'Roboto Condensed',
        }}
      >
        {props.description}
      </Typography>
    </Box>
  );
};

export default TemperatureWeatherDetail;
