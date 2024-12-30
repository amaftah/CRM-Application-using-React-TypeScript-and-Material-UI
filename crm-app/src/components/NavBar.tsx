import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
        padding: '0.5rem 2rem',
        borderRadius: '10px',
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: '#FFD700',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
          }}
        >
          CRM Dashboard
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {[
            { label: 'Dashboard', path: '/' },
            { label: 'Customers', path: '/customers' },
            { label: 'Reports', path: '/reports' },
          ].map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? '#FFD700' : '#FFFFFF',
                background:
                  location.pathname === item.path
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'transparent',
                borderRadius: '5px',
                padding: '0.5rem 1rem',
                textTransform: 'capitalize',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
