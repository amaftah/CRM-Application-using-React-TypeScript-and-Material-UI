import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const NotFound: React.FC = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      404 - Page Not Found
    </Typography>
    <Typography variant="body1" gutterBottom>
      Oops! The page you're looking for doesn't exist. Maybe try going back to the dashboard?
    </Typography>
    <Button variant="contained" color="primary" href="/">
      Go to Dashboard
    </Button>
  </Container>
);

export default NotFound;
