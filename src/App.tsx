import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Board } from './board/Board';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Board />;
    </ThemeProvider>
  );
}
