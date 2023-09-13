import { Button, Typography, Toolbar, Box, AppBar } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useMst } from '../../stores/Root';
import { Logo } from './Logo';

export const NavBar = observer(() => {
  const store = useMst();
  const boardStore = store.boardStore;


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar style={{ paddingRight: '100px', paddingLeft: '100px'}}>
          <Logo />

          <Typography variant="h6" component="div" sx={{ mr: 3 }}>
            DND Dialogue Creator
          </Typography>

          <Button variant="outlined" sx={{ mr: 2 }} onClick={boardStore.toggleNodePaletteSidebar}>
            Add block
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
