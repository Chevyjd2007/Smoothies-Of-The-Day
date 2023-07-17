import * as React from 'react';
import Box from '@mui/material/Box';
import Nav from './components/Nav';

import { useTheme } from '@mui/material/styles';
import ModeToggleButton from './components/themes/ModeToggleButton';



function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Nav/>
    </Box>
  );
}

export default App;