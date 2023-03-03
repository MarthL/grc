import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Corpus from './components/Corpus';
import { Container } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Navbar />
        <Corpus />
        {/* content */}
    </ThemeProvider>
  );
}

export default App;
