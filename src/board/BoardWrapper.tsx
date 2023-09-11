import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  Divider,
  Typography,
  List,
  Toolbar,
  CssBaseline,
  AppBar,
  Drawer,
  Box,
  styled,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { config } from '../config';
import { NodePalette } from './NodePalette';

const drawerWidth = config.theme.drawerWidth;
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
const toolbarHeight = config.theme.toolbarHeight;

type Props = {
  children: React.ReactNode;
};

export const BoardWrapper = (props: Props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar variant="dense" sx={{ height: toolbarHeight }}>
          <Typography variant="h6" noWrap component="div">
            {config.app.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <NodePalette />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Toolbar variant="dense" sx={{ height: toolbarHeight }} />
        {props.children}
      </Box>
    </Box>
  );
};
