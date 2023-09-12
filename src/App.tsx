import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Board } from './components/board/Board';
import { NavBar } from './components/navigation/NavBar';
import { NodePaletteSideBar } from './components/board/NodePaletteSideBar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
      <NodePaletteSideBar />
      <ThemeProvider theme={lightTheme}>
        <Board />
      </ThemeProvider>
    </ThemeProvider>
  );
}
