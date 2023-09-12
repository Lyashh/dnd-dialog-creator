import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react-lite';
import { useMst } from '../../stores/Root';

export const NavBar = observer(() => {
  const store = useMst();
  const boardStore = store.boardStore;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Button variant="outlined" sx={{ mr: 2 }} onClick={boardStore.toggleNodePaletteSidebar}>
            Add block
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DND Dialogue Creator
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
