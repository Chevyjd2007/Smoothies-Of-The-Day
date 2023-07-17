import React from 'react';
import "./nav.css"
import { MdAddBox } from "react-icons/md";
import { Tooltip, Box, IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import ModeToggleButton from './themes/ModeToggleButton';
import { useTheme } from '@mui/material/styles';

export default function Nav() {
  const theme = useTheme();

  return (     
    <Box className='NavbarItems' style={{ backgroundColor: theme.palette.background.default }}>
      <Box position={'absolute'} top={'5'} left={'50px'}>
       <Tooltip title="Add recipe">
          <IconButton>
            <MdAddBox size={"45px"} color='#64ce56'/>
          </IconButton>
        </Tooltip>
        </Box>
      <a className='bar__link' style={{ color:  theme.palette.text.primary}} data-text="Smoothie-of-the-day">
        Smoothie-of-the-day
       </a>
            <ModeToggleButton/>
    </Box>
  );
}
