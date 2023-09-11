import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Board } from './components/board/Board';
import { NavBar } from './components/navigation/NavBar';

const mainTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <NavBar />
      <Board />
    </ThemeProvider>
  );
}
