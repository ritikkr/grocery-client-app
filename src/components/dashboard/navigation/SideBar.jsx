import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Outlet, useNavigate } from 'react-router-dom';

import SearchBox from './SearchBox';
import TopAppBar from './TopAppBar';
import { AccountBox, Book, Category, ExpandLess, ExpandMore, MedicalInformation, NotificationsActiveOutlined, StarBorderOutlined, Support, Toys } from '@mui/icons-material';
import { Collapse } from '@mui/material';

const drawerWidth = 240;

const itemList = [
  
  {
    title:"Orders",
    icon: <NotificationsActiveOutlined />,
    link: 'orders'
  },
  {
    title:"Account",
    icon: <AccountBox />,
    link: 'account'

  },
  {
    title:"Support",
    icon: <Support />,
    link: 'support'

  },

]

const categoryItemList = [
  {
  title:"Fruits",
  icon: <Category />,
  },
  {
    title:"Vegetables",
    icon: <Category />,
    },

    {
      title:"Stationary",
      icon: <Book />,
      },
  {
    title:"Dairy",
    icon: <NotificationsActiveOutlined />,
  },
  {
    title:"Medicine",
    icon: <MedicalInformation />,
  },
  {
    title:"Toys",
    icon: <Toys/>,
  },

]




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SideBar({open,  handleDrawerClose}) {
  const theme = useTheme();
  const [subListOpen, setSubListOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setSubListOpen(!subListOpen);
  };
  const handleCategoryClick = (category) => {
    // Logic to handle category-based search
    navigate(`search/category=${category}`);
  };

  const handleMenuItemClick = (link) => {
    // Logic to handle category-based search
    navigate(`${link}`);
    handleDrawerClose()
  };

  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <List>
          <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <Category />
                </ListItemIcon>
                <ListItemText primary={"Category"} />
                {subListOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
          </ListItem>
          <Collapse in={subListOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ml:2}}>
        {categoryItemList.map((item) => (
            <ListItem key={item.title} disablePadding onClick={() => handleCategoryClick(item.title)}>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
          {itemList.map((item) => (
            <ListItem key={item.title} disablePadding onClick={() => handleMenuItemClick(item.link)}>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}
