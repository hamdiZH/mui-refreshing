import React from 'react';
import { Box, List, ListItemText, Switch } from '@mui/material';
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from '@mui/icons-material';
import ListItemComponent from '../components/ListItemComponent';

export const Sidebar = ({ mode, changeMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <List>
          <ListItemComponent component="a" href="#home" icon={<Home />}>
            <ListItemText primary="Homepage" />
          </ListItemComponent>

          <ListItemComponent component="a" href="#pages" icon={<Article />}>
            <ListItemText primary="pages" />
          </ListItemComponent>

          <ListItemComponent component="a" href="#Groups" icon={<Group />}>
            <ListItemText primary="Groups" />
          </ListItemComponent>

          <ListItemComponent
            component="a"
            href="#Marketplace"
            icon={<Storefront />}
          >
            <ListItemText primary="MarketPlace" />
          </ListItemComponent>

          <ListItemComponent component="a" href="#friends" icon={<Person />}>
            <ListItemText primary="Friends" />
          </ListItemComponent>

          <ListItemComponent component="a" href="#settings" icon={<Settings />}>
            <ListItemText primary="Settings" />
          </ListItemComponent>

          <ListItemComponent
            component="a"
            href="#profile"
            icon={<AccountBox />}
          >
            <ListItemText primary="Profile" />
          </ListItemComponent>

          <ListItemComponent component="a" href={null} icon={<ModeNight />}>
            <Switch
              onChange={(e) => changeMode(mode === 'light' ? 'dark' : 'light')}
            />
          </ListItemComponent>
        </List>
      </Box>
    </Box>
  );
};
