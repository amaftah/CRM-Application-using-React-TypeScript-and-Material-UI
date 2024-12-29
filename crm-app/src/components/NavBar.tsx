import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '10px',
        marginBottom: 4,
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFFFFF' }}>
          CRM Dashboard
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/" sx={{ color: '#FFD700' }}>
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/customers" sx={{ color: '#1E90FF' }}>
            Customers
          </Button>
          <Button color="inherit" component={Link} to="/reports" sx={{ color: '#32CD32' }}>
            Reports
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
