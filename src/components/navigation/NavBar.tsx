import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../stores/store';
import { toogleNodePalleteSideBarStatus } from '../../stores/navigationSlice';

export const NavBar = () => {
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Button variant="outlined" sx={{ mr: 2 }} onClick={() => dispatch(toogleNodePalleteSideBarStatus())}>
            Add Node
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DND Dialogue Creator
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
