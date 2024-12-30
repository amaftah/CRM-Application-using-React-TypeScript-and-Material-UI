import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(120deg, #1976d2, #42a5f5)',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
        padding: '0.5rem 2rem',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CRM Application
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: '#fff' }}>
            Dashboard
          </Button>
          <Button component={Link} to="/customers" sx={{ color: '#fff' }}>
            Customers
          </Button>
          <Button component={Link} to="/reports" sx={{ color: '#fff' }}>
            Reports
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
