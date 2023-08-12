import * as React from 'react';
import Box from '@mui/material/Box';
import Nav from './components/Nav';
import HomePage from "./components/HomePage"
import Hero from './components/Hero';

import { useTheme } from '@mui/material/styles';



function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Nav/>
      <Hero/>
      <HomePage/>
    </Box>
  );
}

export default App;