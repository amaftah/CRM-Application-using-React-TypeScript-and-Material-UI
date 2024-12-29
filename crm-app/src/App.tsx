import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import NavBar from './components/NavBar.tsx'; // Ensure the NavBar component exists
import Dashboard from './pages/Dashboard.tsx'; // Ensure Dashboard exists
import Customers from './pages/Customers.tsx'; // Ensure Customers exists
import Reports from './pages/Reports.tsx'; // Ensure Reports exists
import NotFound from './pages/NotFound.tsx'; // Ensure NotFound exists

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#ff4081' },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
