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
import {useAuth} from "../../hooks/useProvideAuth"
import SearchBox from './SearchBox';
import TopAppBar from './TopAppBar';
import { AccountBox, Book, CardGiftcard, Category, ExpandLess, ExpandMore, GifBox, GifTwoTone, MailLock, MedicalInformation, MedicalServices, NotificationsActiveOutlined, PendingActions, StarBorderOutlined, Support, Toys } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import axios from 'axios';


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

const getCategoryIcons = (name) => {
  switch(name){
    case "Dairy": return <MailLock />
    case "Stationary": return <Book />
    case "Medicine": return <MedicalServices />
    case "Gift": return <CardGiftcard />
    default: return <PendingActions />
  }
}




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
  const {logOut} = useAuth()
  const [categoryItemList, setCategoryItemList] = React.useState([])
  const navigate = useNavigate();

  const handleClick = () => {
    setSubListOpen(!subListOpen);
  };




  const handleCategoryClick = (categoryId) => {
    // Logic to handle category-based search
    navigate(`search/category=${categoryId}`);
    handleDrawerClose()
  };

  const handleMenuItemClick = (link) => {
    // Logic to handle category-based search
    navigate(`${link}`);
    handleDrawerClose()
  };

  const handleLogOut = () => {
      logOut()
      navigate("/")
  }


  React.useEffect(() => {
    
      axios.get("/api/category", {
        headers: {
          Authorization: 'Bearer '+ JSON.parse(localStorage.getItem("token"))
        }
      }).then((res) => {
        console.log("cat list: ", res.data);
        setCategoryItemList(res.data)
        
      })
  }, [])

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
            <ListItem key={item.name} disablePadding onClick={() => handleCategoryClick(item.categoryId)}>
              <ListItemButton>
                <ListItemIcon>
          { getCategoryIcons(item.name)}
                </ListItemIcon>
                <ListItemText primary={item.name} />
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
           <ListItem  disablePadding onClick={handleLogOut}>
              <ListItemButton>
                <ListItemIcon>
                    <Book />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
  );
}
