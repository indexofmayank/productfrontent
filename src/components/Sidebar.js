import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import {useNavigate} from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  }

  const sidebarItems = [
    { text: 'Product', icon: <ProductionQuantityLimitsIcon />, path: '/product' },
    { text: 'Category', icon: <CategoryIcon /> },
  ];

  return (
    <div>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem button key={item.text} onClick={() => handleNavigation(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
