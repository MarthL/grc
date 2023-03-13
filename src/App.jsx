import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Corpus } from './components/Corpus';
import Second from './components/Second/Second';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<Corpus />} />
          <Route path="/second" element={<Second />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
