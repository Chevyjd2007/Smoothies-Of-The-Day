import React from 'react';
import "./nav.css"
import { MdAddBox } from "react-icons/md";
import { Tooltip, IconButton, Box } from "@mui/material";

export default function Nav() {
  return (     
    <div className='NavbarItems'>
       <Tooltip title="Add recipe">
          <IconButton edge="start" className='iconButton'>
        <MdAddBox size={"50px"} color='#4dd0e1'/>
          </IconButton>
        </Tooltip>
      <a className='bar__link' href='/' data-text="Smoothie-of-the-day">
        Smoothie-of-the-day
       </a>
    </div>
  );
}
