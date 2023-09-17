import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Board } from './components/board/Board';
import { NavBar } from './components/navigation/NavBar';
import { NodePaletteSideBar } from './components/board/NodePaletteSideBar';
import { style } from './styles/styles.const';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#757ce8',
      main: style.colors.lightGreen,
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#757ce8',
      main: style.colors.darkGreen,
      dark: '#002884',
      contrastText: '#fff',
    },
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
