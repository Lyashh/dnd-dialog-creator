import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Board } from './board/Board';

const mainTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Board />;
    </ThemeProvider>
  );
}
