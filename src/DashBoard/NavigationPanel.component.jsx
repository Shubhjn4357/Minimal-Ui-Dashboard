import {useState} from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import FitScreenRoundedIcon from '@mui/icons-material/FitScreenRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TripOriginRoundedIcon from '@mui/icons-material/TripOriginRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import GTranslateRoundedIcon from '@mui/icons-material/GTranslateRounded';
import DashboardPanel from "./DashBoardPanel.component";
import { green } from '@mui/material/colors';
import "./dashboard.style.css";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
       '& .MuiDrawer-paper': closedMixin(theme),
        '& .MuiList-root':{
          '& .MuiListItemButton-root':{
            '&:hover':{
            background:green[100],
            borderRadius:"0.5rem",
            boxShadow:"0px 1px 1px px #525252",
            margin:"auto",
            '& MuiListItemText':{
              color:green[400],
            },
            '& MuiListItemIcon':{
              color:green[400],
            }
            }
          }
        }, 
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),

    }),
    ...(!open && {
      ...closedMixin(theme),

    }),
  }),
);

const NavigationPanel=()=>{
  
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const GeneralpanelList=[
  {text:'App',icon:<SpeedRoundedIcon/>},
  {text:'E-commerce',icon:<AttachMoneyRoundedIcon/>},
  {text:'Analytics',icon:<EqualizerRoundedIcon/>},
  {text:'Banking',icon:<AccountBalanceRoundedIcon/>},
  {text:'Booking',icon:<BookmarkAddedRoundedIcon/>}
  ]
const ManagementpanelList=[
  {text:'User',icon:<PersonRoundedIcon/>},
  {text:'E-commerce',icon:<AddShoppingCartRoundedIcon/>},
  {text:'Blog',icon:<WebRoundedIcon/>},

  ]
const ApppanelList=[
  {text:'Mail',icon:<MailRoundedIcon/>},
  {text:'Chat',icon:<ChatRoundedIcon/>},
  {text:'Calender',icon:<TodayRoundedIcon/>},
  {text:'Kanban',icon:<FitScreenRoundedIcon/>},

  ]
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{background:green[400],color:"#363636",borderRadius:"0 0 0.5rem 0.5rem"}} open={open}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="primary"
            edge="start"
          >
            <SearchRoundedIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Minimal Ui
          </Typography>
          <Stack className="ms-auto" direction="row" spacing={1}>
             <IconButton><GTranslateRoundedIcon/></IconButton>
           <IconButton>
             <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={4} color="warning">
                <NotificationsRoundedIcon/>
             </Badge>
            </IconButton>
             <IconButton><PeopleRoundedIcon/></IconButton>
             <Avatar size="small" alt="profile" variant="circular" color="primary" src="https://picsum.photos/100"/>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} onClose={()=>setOpen(false)}>
        <DrawerHeader>
        <IconButton sx={{mr:"auto"}}>M</IconButton>
          <IconButton onClick={handleDrawerClose}>
            <TripOriginRoundedIcon/>
          </IconButton>
        </DrawerHeader>
      
        <Box className={!open?"d-none":""} component="span" sx={{p:2,mx:"auto",my:2, background:"rgba(139,139,139,0.485)" ,borderRadius:"1rem"}}>
        <Stack direction="row" spacing={3}>
          <Avatar alt="profile" variant="circular" color="primary" src="https://picsum.photos/200/200"/>
          <Stack direction="column">
            <Typography variant="p" sx={{fontSize:"1.2rem"}}>Minimal Ui</Typography>
            <Typography variant="p">Admin</Typography>
          </Stack>
        </Stack>
        </Box>
    
       <Stack direction="row" spacing={2}>
           <Typography className={!open?"d-none":""}  component="h1" sx={{mx:2,fontSize:"1.3rem"}}>General</Typography>
        </Stack>
        <List>
          {GeneralpanelList.map((item, index) => (
            <ListItemButton
              key={item.text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
               {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
       <Stack direction="row" spacing={2}>
        <Typography className={!open?"d-none":""} component="h1" sx={{mx:2,fontSize:"1.3rem"}}>Management</Typography>
        </Stack>
       <List>
          {ManagementpanelList.map((item, index) => (
            <ListItemButton
              key={item.text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
               {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
             <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
               <ChevronRightIcon/>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        <Divider />
       <Stack direction="row" spacing={2}>
         <Typography className={!open?"d-none":""}  component="h1" sx={{mx:2,fontSize:"1.3rem"}}>App</Typography>
        </Stack>
       <List>
          {ApppanelList.map((item, index) => (
            <ListItemButton
              key={item.text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
               {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <Divider/>
      </Drawer>
      <Box component="main" onClick={()=>setOpen(false)} sx={{ flexGrow: 1,flexShrink:1,py:3,overflow:"hidden"}}>
        <DrawerHeader />
          <DashboardPanel/>
      </Box>
    </Box>
  );
}
export default NavigationPanel;