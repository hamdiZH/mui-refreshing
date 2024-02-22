import { ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import React from 'react';

const ListItemComponent = ({ component, link, icon, children }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={component} href={link}>
        <ListItemIcon>{icon}</ListItemIcon>
        {children}
      </ListItemButton>
      
    </ListItem>
  );
};

export default ListItemComponent;
