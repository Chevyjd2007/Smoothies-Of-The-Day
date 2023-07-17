import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { MdLightMode } from "react-icons/md";
import { MdBrightness3 } from "react-icons/md";
import { ColorModeContext } from './ColorModeContextProvider';
import { Tooltip } from '@mui/material';

export default function ModeToggleButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Tooltip title="Change theme">
    <Box position={'absolute'} top={'5'} right={'50px'}>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} >
        {theme.palette.mode === 'dark' ? <MdBrightness3 size={'45px'}/> : <MdLightMode color='black' size={'45px'}/>}
      </IconButton>
    </Box>
    </Tooltip>
  );
}
