import React from 'react';
import "./nav.css"
import { Box} from "@mui/material";
import ModeToggleButton from '../themes/ModeToggleButton';
import { useTheme } from '@mui/material/styles';
import AddRecipe from "../tiny components/AddRecipe"


export default function Nav() {
  const theme = useTheme();

  return (     
    <Box className='NavbarItems' style={{ backgroundColor: theme.palette.background.default }}>
      <Box position={'absolute'} top={'5'} left={'50px'}>
       <AddRecipe/>
        </Box>
      <a className='bar__link' style={{ color:  theme.palette.text.primary}} data-text="Smoothie-of-the-day">
        Smoothie-of-the-day
       </a>
            <ModeToggleButton/>
    </Box>
  );
}
