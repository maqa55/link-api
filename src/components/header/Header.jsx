import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { toggleMode } from '../../redux/slices/dark';
import './header.scss';



const drawerWidth = 240;
const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' }
];

function Header(props) {
  const { window } = props;
  const dispatch = useDispatch();
  const mode = useSelector(state => state.darkMode.mode); 

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      dispatch(toggleMode()); 
    }
  }, [dispatch]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const switchButtonStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '60px',
    height: '34px',
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: mode === 'dark' ? '#333' : '#1976d2' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{ color: '#fff' }}>
                <Link href={item.link} color="inherit" sx={{ textDecoration: 'none' }}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </Box>
          <label className="switch" style={switchButtonStyle}>
            <input
              type="checkbox"
              id="input" 
              checked={mode === 'dark'}
              onChange={() => dispatch(toggleMode())}
            />
            <div className="slider round">
              <div className="sun-moon">
                <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
              </div>
              <div className="stars">
                <svg id="star-1" className="star" viewBox="0 0 20 20">
                  <path
                    d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                  ></path>
                </svg>
              </div>
            </div>
          </label>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              MUI
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText
                      primary={<Link href={item.link} color="inherit" sx={{ textDecoration: 'none' }}>{item.name}</Link>}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }} />
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
